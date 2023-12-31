/* eslint-disable no-restricted-exports */
export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/buyCredits",
    "/profile",
    "/feed",
    "/club/create",
    "/club/myClubs",
    "/clubs",
    "/club/:id*",
    "/events/",
    "/events/:id*",
    "/profile/:path*",
    "/tickets/:path*",
  ],
};
