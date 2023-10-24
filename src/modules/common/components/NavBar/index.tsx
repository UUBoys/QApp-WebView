import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import React from "react";

const navbarAllowedRoutes = ["/", "/events"];

const NavBar = () => {
  const { data: session } = useSession();
  const { pathname } = useRouter();
  if (!navbarAllowedRoutes.includes(pathname)) return null;
  return (
    <nav className="fixed z-10 flex h-[4.5rem] w-full items-center bg-slate-950">
      <div className="flex w-full flex-wrap items-center justify-between p-4 px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-400 text-xl text-primary-500">
            120
          </div>
          <div className="text-2xl">Credits</div>
        </div>
        <Link href="/" className="flex items-center">
          <span className="w self-center text-2xl font-semibold text-primary-600 ">
            Q
          </span>
          <span className="w self-center text-2xl font-semibold text-gray-100 ">
            Up!
          </span>
        </Link>
        <div className="hidden cursor-pointer items-center gap-6 md:flex">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href={session?.user ? "/profile" : "/auth/signin"}>
            {session?.user ? (
              <HeadphonesIcon className="text-gray-200" fontSize="large" />
            ) : (
              <AccountCircleIcon className="text-gray-200" fontSize="large" />
            )}
          </Link>
        </div>
        <div className=" md:hidden">
          <Link href={session?.user ? "/profile" : "/auth/signin"}>
            <MenuIcon className="text-primary-500" fontSize="large" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
