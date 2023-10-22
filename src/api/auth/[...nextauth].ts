import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Prisma adapter for NextAuth, optional and can be removed

import { signInSchema, studentSignInSchema } from "@/server/schema/auth";

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
    // ...add more providers here
    CredentialsProvider({
      name: "Credentials",
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
      async authorize(credentials) {
        console.log(credentials);
        return {};
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
    async session({ session, token }) {
      const sessionCopy = { ...session };

      if (sessionCopy.user) {
        sessionCopy.user.id = token.id as string;
        const user = await prisma.user.findFirst({
          where: { id: sessionCopy?.user?.id },
          include: {
            UsersInClass: true,
            stripeData: true,
            AssignedTo: true,
            ActiveLicense: true,
            Schools: true,
          },
        });

        if (user) {
          sessionCopy.user.firstName = user?.firstName as string;
          sessionCopy.user.lastName = user?.lastName as string;
        }
      }

      return session;
    },
    async jwt({ token, user }) {
      const tokenCopy = { ...token };
      if (user) {
        tokenCopy.id = user.id;
        tokenCopy.email = user.email || "";
      }

      return tokenCopy;
    },
  },
};

export default NextAuth(authOptions);
