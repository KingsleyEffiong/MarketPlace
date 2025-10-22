import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectToDB from "@/utils/database";
import User from "@/model/user";
import { GOOGLE_CLIENT_SECRET, GOOGLE_ID } from "@/config/env";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_ID!,
      clientSecret: GOOGLE_CLIENT_SECRET!,
    }),
  ],

  session: { strategy: "jwt" },

  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
    newUser: "/", // redirect new users to homepage
  },

  callbacks: {
    async signIn({ user }) {
      await connectToDB();

      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        const newUser = new User({
          email: user.email,
          avatar: user.image,
          accountType: "buyer",
        });
        await newUser.save();
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) token.email = user.email;
      return token;
    },

    async session({ session, token }) {
      if (session.user && token.email) {
        session.user.email = token.email;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
