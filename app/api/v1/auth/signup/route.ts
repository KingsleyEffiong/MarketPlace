import connectToDB from "@/utils/database";
import User from "@/model/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXPIRES_IN, JWT_SECRET } from "@/config/env";
import { NextRequest } from "next/server";
import ApiError from "@/utils/ApiError";
import { handleError } from "@/utils/errorHandler";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const { email, accountType, password } = await req.json();

    if (!email || !accountType || !password) {
      throw new ApiError(400, "All fields are required.");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new ApiError(409, "User already exists.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      accountType,
      password: hashedPassword,
    });

    if (!JWT_SECRET) {
      throw new ApiError(500, "JWT secret is not defined.");
    }

    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET as string, {
      expiresIn: JWT_EXPIRES_IN as jwt.SignOptions["expiresIn"], // ✅ Explicit type
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "User created successfully.",
        data: {
          token,
          user: {
            id: newUser._id,
            email: newUser.email,
            accountType: newUser.accountType,
          },
        },
      }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return handleError(error);
  }
}
