/* eslint-disable no-param-reassign */
import jwt from "jsonwebtoken";
import NextAuth, { User, type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { signInSchema } from "@/modules/utils/schemas/auth";

export const AUTH_ROUTES = {
  signIn: "/auth/signin",
  signOut: "/auth/signout",
  index: "/",
};

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  pages: AUTH_ROUTES,
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "e-mail",
          type: "text",
          placeholder: "Enter your e-mail/username",
        },
        password: {
          label: "Name",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        const creds = await signInSchema.parseAsync(credentials);

        const res = await fetch("https://qappauth.azurewebsites.net/login", {
          method: "POST",
          body: JSON.stringify(creds),
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });

        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }

        if (!data.token) throw new Error("No token");

        const decodedToken = jwt.decode(data.token);

        if (!decodedToken) {
          throw new Error("Invalid user");
        }

        const userObject = { token: data.token };

        return userObject as User;
      },
    }),
  ],
  callbacks: {
    async redirect({ baseUrl, url }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async jwt({ token, user }) {
      if (user?.token) {
        token.accessToken = user.token;
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      const decodedToken = jwt.decode(token.accessToken as string) as any;
      if (session.user) {
        session.user.id = decodedToken?.id as string;
        session.user.email = decodedToken?.email as string;
        session.user.firstName = decodedToken?.firstName as string;
        session.user.lastName = decodedToken?.lastName as string;
        session.user.username = decodedToken?.username as string;
        session.user.role = decodedToken?.role as string;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
