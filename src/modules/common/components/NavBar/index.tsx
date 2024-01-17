/* eslint-disable sonarjs/no-duplicate-string */
import { Disclosure, Menu as HeadlessMenu } from "@headlessui/react";
import {
  XMarkIcon,
  Bars3Icon,
  UserIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";
import AodRoundedIcon from "@mui/icons-material/AodRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import LocalActivityRoundedIcon from "@mui/icons-material/LocalActivityRounded";
import LocalAtmRoundedIcon from "@mui/icons-material/LocalAtmRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MoneyRoundedIcon from "@mui/icons-material/MoneyRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { useUserAdditionalDataStore } from "../../stores/user-aditional-data-store";
import LanguageSelector from "../LanguageSelector";

import Menu from "@/modules/common/components/Menu";
import SearchModal from "@/modules/common/components/SearchModal";

const navbarAllowedRoutes = [
  "/",
  "/events",
  "/buyCredits",
  "/clubs",
  "/profile",
  "/profile/settings",
  "/feed",
  "/club/create",
  "/club/*",
  "/clubs",
  "/events/*",
  "/tickets/*",
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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
      href: "/events",
      current: pathname === "/events",
      ico: <LocalActivityRoundedIcon sx={{ fontSize: "20px" }} />,
    },
    {
      name: t("components.navbar.links.myTickets"),
      href: "/tickets/myTickets",
      current: pathname === "/tickets/myTickets",
      ico: <AodRoundedIcon sx={{ fontSize: "20px" }} />,
    },
    {
      name: t("components.navbar.links.credits"),
      href: "/buyCredits",
      current: pathname === "/buyCredits",
      ico: <MoneyRoundedIcon sx={{ fontSize: "20px" }} />,
    },
    {
      name: t("components.navbar.links.clubs"),
      href: "/clubs",
      current: pathname === "/clubs",
      ico: <Groups2RoundedIcon sx={{ fontSize: "20px" }} />,
    },
  ];

  return (
    <>
      {/* MOBILE NAVBAR */}
      <div className="fixed left-[5%] top-[10px] z-20 block w-[90%] rounded-lg  bg-white shadow-2xl transition-all lg:hidden">
        <div className="flex w-full items-center justify-between p-[10px]">
          <Link className="flex text-[20px] font-bold" href="/">
            <p className="text-primary">Q</p>
            <p className="text-black">APP</p>
          </Link>
          <div className="flex items-center gap-[20px]">
            <div className="flex cursor-pointer items-center gap-[10px]  rounded-full bg-primary px-[20px] text-center font-bold text-white transition-all hover:shadow-xl">
              <Link
                href="/buyCredits"
                className="relative flex items-center gap-[10px] p-1 text-sm"
              >
                <LocalAtmRoundedIcon className="h-6 w-6 " aria-hidden="true" />
                {credits}
              </Link>
            </div>
            {isMenuOpen ? (
              <CloseRoundedIcon
                sx={{ fontSize: "30px", color: "black" }}
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <MenuRoundedIcon
                sx={{ fontSize: "30px", color: "black" }}
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div>
        </div>
        {isMenuOpen && (
          <div className="flex flex-col ">
            <div className="flex justify-between border-b border-b-gray-200">
              {session?.user && (
                <Menu
                  menuClassName="left-[20px]"
                  items={[
                    {
                      label: t("components.navbar.links.userOptions.account"),
                      onClick: () => push("/profile"),
                    },
                    {
                      label: t("components.navbar.links.userOptions.myClubs"),
                      onClick: () => push("/club/myClubs"),
                    },
                    {
                      label: t("components.navbar.links.userOptions.settings"),
                      onClick: () => push("/profile/settings"),
                    },
                    {
                      label: t("components.navbar.links.userOptions.logout"),
                      onClick: () => signOut(),
                    },
                  ]}
                >
                  <HeadlessMenu.Button className="flex flex-col gap-[3px] pb-[10px]">
                    <p className="text-[14px] font-semibold text-gray-500">
                      Testovaci ucet
                    </p>
                    <p className="text-[12px] text-gray-400">test@test.com</p>
                  </HeadlessMenu.Button>
                </Menu>
              )}
              {/* <Link className="flex flex-col p-[10px]" href="/profile">
                <p className="text-[14px] font-semibold text-gray-500">
                  Testovaci ucet
                </p>
                <p className="text-[12px] text-gray-400">test@test.com</p>
              </Link> */}
              <LanguageSelector className="mr-[10px] max-w-[66px]" />
            </div>
            <div className="my-[10px] flex flex-col gap-[10px] px-[10px]">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    item.current
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-secondary-500 hover:text-white",
                    "flex items-center gap-[10px] rounded-md px-3 py-2 text-sm font-medium transition-all"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.ico}
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <Disclosure
        as="nav"
        className="fixed inset-0 z-[987] mx-auto mt-10 hidden max-h-[70px] w-[80%] max-w-[1500px]  rounded-[20px] bg-white px-4 py-[5px] shadow-xl lg:block"
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
                      href="/"
                      className="cursor-pointer text-[25px] font-medium text-black"
                    >
                      <span className="text-primary">Q</span>APP
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
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
                        </Link>
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
                    {session?.user ? (
                      <>
                        <div className="flex cursor-pointer items-center gap-[10px]  rounded-full bg-primary px-[20px] text-center font-bold text-white transition-all hover:shadow-xl">
                          <Link
                            href="/buyCredits"
                            className="relative flex items-center gap-[10px] p-1 text-sm"
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
                      </>
                    ) : (
                      <div className="flex cursor-pointer items-center gap-[10px]  rounded-full bg-primary px-[20px] text-center font-bold text-white transition-all hover:shadow-xl">
                        <Link
                          href="/auth/signin"
                          className="relative flex items-center gap-[10px] p-1 text-sm"
                        >
                          Přihlásit se
                        </Link>
                      </div>
                    )}

                    <div>
                      <LanguageSelector className="max-w-[66px]" />
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
                              "components.navbar.links.userOptions.myClubs"
                            ),
                            onClick: () => push("/club/myClubs"),
                          },
                          {
                            label: t(
                              "components.navbar.links.userOptions.settings"
                            ),
                            onClick: () => push("/profile/settings"),
                          },
                          {
                            label: t(
                              "components.navbar.links.userOptions.logout"
                            ),
                            onClick: () => signOut(),
                          },
                        ]}
                      >
                        <HeadlessMenu.Button className="relative flex rounded-full bg-primary-400  p-[10px] text-sm text-white focus:outline-none focus:ring-2 focus:ring-white ">
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
    </>
  );
};

export default NavBar;
