import { UsersInClass } from "@prisma/client";
import { type DefaultSession } from "next-auth";

import LicenseType from "@/server/licenseHelpers/licenseConfig";
import { SchoolRole } from "@/server/schema/school";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
      email: string;
      name: string;
    } & DefaultSession["user"];
  }
}
