import Link from "next/link";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useUserSessionContext } from "@/modules/contexts/userContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HeadphonesIcon from "@mui/icons-material/Headphones";

const NavBar = () => {
  const user = useUserSessionContext();
  const [search, setSearch] = React.useState("");

  return (
    <nav className="fixed z-10 h-[4.5rem] w-full bg-slate-950 flex items-center">
      <div className="flex w-full flex-wrap items-center justify-between p-4 px-12">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 text-xl text-primary-500 border-gray-400 border-2 rounded-full flex items-center justify-center">
            120
          </div>
          <div className="text-2xl">Credits</div>
        </div>
        <Link href="/" className="items-center flex">
          <span className="w self-center text-2xl font-semibold text-primary-600 ">
            Q
          </span>
          <span className="w self-center text-2xl font-semibold text-gray-100 ">
            Up!
          </span>
        </Link>
        <div className="cursor-pointer hidden gap-6 items-center md:flex">
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href={user?.user ? "/profile" : "/auth/signin"}>
            {user?.user ? (
              <HeadphonesIcon className="text-gray-200" fontSize="large" />
            ) : (
              <AccountCircleIcon className="text-gray-200" fontSize="large" />
            )}
          </Link>
        </div>
        <div className=" md:hidden">
          <Link href={user?.user ? "/profile" : "/auth/signin"}>
            <MenuIcon className="text-primary-500" fontSize="large" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
