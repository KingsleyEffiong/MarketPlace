import { Schema, Document, models, model } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  avatar?: string;
  accountType: "buyer" | "seller";
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: { type: String, required: true, minlength: 6 },
    avatar: { type: String, default: "" },
    accountType: {
      type: String,
      enum: ["buyer", "seller"],
      default: "buyer",
    },
  },
  { timestamps: true }
);

const User = models.User || model<IUser>("User", UserSchema);
export default User;
