"use client";

import { PlusIcon } from "@heroicons/react/24/solid";
import { NextPage } from "next";
import Link from "next/link";

import Ticket from "@/modules/common/components/Ticket";
import { useUserAdditionalDataStore } from "@/modules/common/stores/user-aditional-data-store";

const MyTickets: NextPage = () => {
  const { userOwnedTickets } = useUserAdditionalDataStore((set) => ({
    userOwnedTickets: set.userOwnedTickets,
  }));
  return (
    <div className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-20 p-20 pt-52">
      <p className="flex gap-8 text-6xl font-semibold">
        Moje <div className="text-primary-500">Lístky</div>
      </p>
      <div className="flex min-h-[600px] w-full flex-col justify-center gap-6 rounded-xl bg-white py-20 shadow-xl">
        <Link
          href="/tickets"
          className="mx-auto flex min-h-[100px] w-2/3 cursor-pointer flex-col flex-wrap items-center justify-center rounded-lg bg-primary-200  p-3 font-bold antialiased shadow-lg transition-all hover:bg-primary-400 hover:shadow-xl"
        >
          Zakoupit další lístek <PlusIcon className="h-8 w-8" />
        </Link>
        {userOwnedTickets.map((ticket) => (
          <Ticket ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default MyTickets;
