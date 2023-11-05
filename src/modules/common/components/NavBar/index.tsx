/* eslint-disable sonarjs/no-duplicate-string */
import { Disclosure, Menu as HeadlessMenu } from "@headlessui/react";
import {
  XMarkIcon,
  Bars3Icon,
  UserIcon,
  MusicalNoteIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

import LocalAtmRoundedIcon from "@mui/icons-material/LocalAtmRounded";
import { useUserAdditionalDataStore } from "../../stores/user-aditional-data-store";

import Menu from "@/modules/common/components/Menu";
import SearchModal from "@/modules/common/components/SearchModal";
import LanguageSelector from "../LanguageSelector";
import { useTranslation } from "react-i18next";

const navbarAllowedRoutes = [
  "/",
  "/events",
  "/buyCredits",
  "/clubs",
  "/profile",
  "/feed",
  "/club/create",
  "/club/*",
];

let previousKreditCount = 0;
const regexPatterns = navbarAllowedRoutes.map((route) => {
  // Escape forward slashes and replace '*' with '.*' for wildcard matches
  const pattern = route.replace(/\//g, "\\/").replace(/\*/g, ".*");
  return `^${pattern}$`; // The ^ and $ ensure the pattern matches the whole path
});

// Combine all regex patterns into one
const combinedPattern = regexPatterns.join("|");
const routeRegex = new RegExp(combinedPattern);

const NavBar = () => {
  const { t } = useTranslation();
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const { pathname, push } = useRouter();
  const { data: session } = useSession();
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(false);
  const { credits } = useUserAdditionalDataStore((set) => ({
    credits: set.credits,
  }));

  const isRouteAllowed = (routePathname: string) => {
    return routeRegex.test(routePathname);
  };

  useEffect(() => {
    if (credits === 0) return;
    if (previousKreditCount <= credits) {
      setShowUpArrow(true);
      setTimeout(() => {
        setShowUpArrow(false);
      }, 3000);
    } else if (previousKreditCount > credits) {
      setShowDownArrow(true);
      setTimeout(() => {
        setShowDownArrow(false);
      }, 3000);
    }
    previousKreditCount = credits;
  }, [credits]);

  if (!isRouteAllowed(pathname)) return null;

  const navigation = [
    {
      name: t("components.navbar.links.events"),
      href: "/",
      current: pathname === "/" || pathname === "/events",
    },
    {
      name: t("components.navbar.links.myTickets"),
      href: "/tickets",
      current: pathname === "/tickets",
    },
    {
      name: t("components.navbar.links.credits"),
      href: "/buyCredits",
      current: pathname === "/buyCredits",
    },
    {
      name: t("components.navbar.links.clubs"),
      href: "/clubs",
      current: pathname === "/clubs",
    },
  ];

  return (
    <Disclosure
      as="nav"
      className="fixed inset-0 z-[1000] mx-auto mt-10 max-h-[70px] w-[80%] max-w-[1500px] rounded-[20px]  bg-white px-4 py-[5px] shadow-xl"
    >
      {({ open }) => (
        <>
          <SearchModal
            open={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />

          <div className="mx-auto  px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <Link
                    href={"/"}
                    className={
                      "text-black text-[25px] font-medium cursor-pointer"
                    }
                  >
                    <span className={"text-primary"}>Q</span>APP
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={clsx(
                          item.current
                            ? "bg-primary text-white"
                            : "text-gray-700 hover:bg-secondary-500 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium transition-all"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex flex-col items-center  text-center font-bold">
                  {showUpArrow && (
                    <ArrowUpIcon
                      className="h-6 w-6 animate-bounce  text-green-400"
                      aria-hidden="true"
                    />
                  )}

                  {showDownArrow && (
                    <ArrowDownIcon
                      className="h-6 w-6  animate-bounce text-red-500"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className="flex gap-5">
                  <div className="flex gap-[10px] px-[20px] items-center  text-center font-bold text-white bg-primary rounded-full cursor-pointer hover:shadow-xl transition-all">
                    <Link
                      href="/buyCredits"
                      className="relative p-1 text-sm flex gap-[10px] items-center"
                    >
                      <LocalAtmRoundedIcon
                        className="h-6 w-6 "
                        aria-hidden="true"
                      />
                      {credits}
                    </Link>
                  </div>
                  <div className="flex items-center justify-center text-black">
                    <SearchRoundedIcon
                      className="h-6 w-6 cursor-pointer"
                      onClick={() => setIsSearchOpen(true)}
                    />
                  </div>

                  <div>
                    <LanguageSelector className={"max-w-[66px]"} />
                  </div>
                  {session?.user && (
                    <Menu
                      items={[
                        {
                          label: t(
                            "components.navbar.links.userOptions.account"
                          ),
                          onClick: () => push("/profile"),
                        },
                        {
                          label: t(
                            "components.navbar.links.userOptions.settings"
                          ),
                          onClick: (e) => console.log(e),
                        },
                        {
                          label: t(
                            "components.navbar.links.userOptions.logout"
                          ),
                          onClick: () => signOut(),
                        },
                      ]}
                    >
                      <HeadlessMenu.Button className="relative flex rounded-full bg-primary-400  text-sm text-white focus:outline-none focus:ring-2 focus:ring-white p-[10px] ">
                        <UserIcon
                          className="h-[20px] w-[20px] rounded-full"
                          aria-hidden="true"
                        />
                      </HeadlessMenu.Button>
                    </Menu>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 rounded-b-lg bg-white px-2 pb-3 pt-2 shadow-lg">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={clsx(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium transition-all"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
