/* eslint-disable sonarjs/no-duplicate-string */
import { useQuery } from "@apollo/client";
import { Disclosure, Menu as HeadlessMenu } from "@headlessui/react";
import {
  XMarkIcon,
  Bars3Icon,
  UserIcon,
  MusicalNoteIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import React, { Fragment, useEffect } from "react";

import { useUserAdditionalDataStore } from "../../stores/user-aditional-data-store";
import Menu from "../Menu";

import { Query } from "@/generated/graphql";
import { GET_CREDIT } from "@/modules/GRAPHQL/queries/GetCreditQuery";

const navbarAllowedRoutes = ["/", "/events", "/buyCredits", "/clubs"];

const NavBar = () => {
  const { pathname } = useRouter();
  const { data: session } = useSession();
  const { credits, setCredits } = useUserAdditionalDataStore((set) => ({
    setCredits: set.setCredits,
    credits: set.credits,
  }));

  const { data, refetch } = useQuery<Query>(GET_CREDIT);

  useEffect(() => {
    if (data) setCredits(data?.getCredit?.balance as number);
  }, [data, setCredits]);

  useEffect(() => {
    if (session?.user) refetch();
  }, [refetch, session?.user]);

  if (!navbarAllowedRoutes.includes(pathname)) return null;

  const navigation = [
    {
      name: "Akce",
      href: "/",
      current: pathname === "/" || pathname === "/events",
    },
    {
      name: "Moje lístky",
      href: "/tickets",
      current: pathname === "/tickets",
    },
    {
      name: "Kredity",
      href: "/buyCredits",
      current: pathname === "/buyCredits",
    },
    { name: "Kluby", href: "/clubs", current: pathname === "/clubs" },
  ];

  return (
    <Disclosure
      as="nav"
      className="fixed inset-0 z-[1000] mx-auto mt-10 max-h-24 w-11/12 rounded-[20px]  bg-white p-4 shadow-xl"
    >
      {({ open }) => (
        <>
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
                  <svg
                    width="65"
                    height="20"
                    viewBox="0 0 65 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.29084 12.1364H10.1545L11.8505 14.3352L13.0607 15.767L15.967 19.5H12.8988L10.9215 16.9943L10.0778 15.8011L7.29084 12.1364ZM16.3846 9.27273C16.3846 11.1534 16.0323 12.7642 15.3278 14.1051C14.6289 15.4403 13.6744 16.4631 12.4641 17.1733C11.2596 17.8835 9.89311 18.2386 8.3647 18.2386C6.83629 18.2386 5.46697 17.8835 4.25675 17.1733C3.0522 16.4574 2.09766 15.4318 1.39311 14.0966C0.694247 12.7557 0.344815 11.1477 0.344815 9.27273C0.344815 7.39205 0.694247 5.78409 1.39311 4.44886C2.09766 3.10795 3.0522 2.08239 4.25675 1.37216C5.46697 0.661931 6.83629 0.306818 8.3647 0.306818C9.89311 0.306818 11.2596 0.661931 12.4641 1.37216C13.6744 2.08239 14.6289 3.10795 15.3278 4.44886C16.0323 5.78409 16.3846 7.39205 16.3846 9.27273ZM13.2056 9.27273C13.2056 7.94886 12.9982 6.83239 12.5835 5.92329C12.1744 5.00852 11.6062 4.31818 10.8789 3.85227C10.1516 3.38068 9.31357 3.14489 8.3647 3.14489C7.41584 3.14489 6.57777 3.38068 5.8505 3.85227C5.12322 4.31818 4.5522 5.00852 4.13743 5.92329C3.72834 6.83239 3.52379 7.94886 3.52379 9.27273C3.52379 10.5966 3.72834 11.7159 4.13743 12.6307C4.5522 13.5398 5.12322 14.2301 5.8505 14.7017C6.57777 15.1676 7.41584 15.4006 8.3647 15.4006C9.31357 15.4006 10.1516 15.1676 10.8789 14.7017C11.6062 14.2301 12.1744 13.5398 12.5835 12.6307C12.9982 11.7159 13.2056 10.5966 13.2056 9.27273Z"
                      fill="#FFAD32"
                    />
                    <path
                      d="M21.6388 18H18.2638L24.4087 0.545454H28.3121L34.4656 18H31.0906L26.4286 4.125H26.2923L21.6388 18ZM21.7496 11.1562H30.9542V13.696H21.7496V11.1562ZM36.7646 18V0.545454H43.31C44.6509 0.545454 45.7759 0.795454 46.685 1.29545C47.5998 1.79545 48.2901 2.48295 48.756 3.35795C49.2276 4.22727 49.4634 5.21591 49.4634 6.32386C49.4634 7.44318 49.2276 8.4375 48.756 9.30682C48.2844 10.1761 47.5884 10.8608 46.668 11.3608C45.7475 11.8551 44.614 12.1023 43.2674 12.1023H38.9293V9.50284H42.8413C43.6254 9.50284 44.2674 9.36648 44.7674 9.09375C45.2674 8.82102 45.6367 8.44602 45.8754 7.96875C46.1197 7.49148 46.2418 6.94318 46.2418 6.32386C46.2418 5.70455 46.1197 5.15909 45.8754 4.6875C45.6367 4.21591 45.2646 3.84943 44.7589 3.58807C44.2589 3.32102 43.614 3.1875 42.8242 3.1875H39.9265V18H36.7646ZM52.2099 18V0.545454H58.7553C60.0962 0.545454 61.2212 0.795454 62.1303 1.29545C63.0451 1.79545 63.7354 2.48295 64.2014 3.35795C64.6729 4.22727 64.9087 5.21591 64.9087 6.32386C64.9087 7.44318 64.6729 8.4375 64.2014 9.30682C63.7298 10.1761 63.0337 10.8608 62.1133 11.3608C61.1928 11.8551 60.0593 12.1023 58.7127 12.1023H54.3746V9.50284H58.2866C59.0707 9.50284 59.7127 9.36648 60.2127 9.09375C60.7127 8.82102 61.082 8.44602 61.3207 7.96875C61.565 7.49148 61.6871 6.94318 61.6871 6.32386C61.6871 5.70455 61.565 5.15909 61.3207 4.6875C61.082 4.21591 60.7099 3.84943 60.2042 3.58807C59.7042 3.32102 59.0593 3.1875 58.2695 3.1875H55.3718V18H52.2099Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={clsx(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-700 hover:bg-secondary-400 hover:text-white",
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
                  <ArrowUpIcon
                    className="h-6 w-6 animate-bounce text-green-400"
                    aria-hidden="true"
                  />

                  <ArrowDownIcon
                    className="h-6 w-6 animate-bounce text-red-500"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex  gap-5 ">
                  {" "}
                  <div className="flex flex-col items-center  text-center font-bold">
                    <Link
                      href="/buyCredits"
                      className="relative flex p-1 text-sm  text-primary-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
                    >
                      <MusicalNoteIcon
                        className="h-6 w-6 "
                        aria-hidden="true"
                      />
                    </Link>
                    {credits}
                  </div>
                  {session?.user && (
                    <Menu
                      items={[
                        {
                          label: "Účet",
                          onClick: (e) => console.log(e),
                        },
                        {
                          label: "Nastavení",
                          onClick: (e) => console.log(e),
                        },
                        {
                          label: "Odhlásit se",
                          onClick: () => signOut(),
                        },
                      ]}
                    >
                      <HeadlessMenu.Button className="relative flex rounded-full bg-primary-400 p-1 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-white ">
                        <UserIcon
                          className="h-8 w-8 rounded-full"
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
