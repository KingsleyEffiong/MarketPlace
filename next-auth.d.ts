import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    googleAccessToken?: string;
    userProfile?: any;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    googleAccessToken?: string;
    facebookAccessToken?: string;
    userProfile?: any;
    defaultSocialSetId?: string;
  }
}
