/* eslint-disable no-restricted-exports */
export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/buyCredits",
    "/profile",
    "/feed",
    "/club/create",
    "/club/myClubs",
    "/profile/:path*",
    "/tickets/:path*",
  ],
};
