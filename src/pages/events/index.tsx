import { useQuery } from "@apollo/client";
import { PlusIcon } from "@heroicons/react/24/solid";
import { NextPage } from "next";
import Link from "next/link";

import { Query } from "@/generated/graphql";
import { GET_EVENTS } from "@/modules/GRAPHQL/queries/GetEventsQuery";

/* ----------------------------------------- MUSÍ SE DODĚLAT -------------------------------------------------*/

const Events: NextPage = () => {
  const { data: eventsData } = useQuery<Query>(GET_EVENTS, {
    fetchPolicy: "cache-and-network",
    context: { shouldTrackStatus: true },
    onCompleted(data) {
      console.log(data);
    },
  });
  console.log(eventsData);
  return (
    <div className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-20 p-20 pt-52">
      <p className="flex gap-8 text-6xl font-semibold">
        <div className="text-primary-500">event</div>
      </p>
      <div className="flex min-h-[600px] w-full flex-col justify-center gap-6 rounded-xl bg-white py-20 shadow-xl">
        <Link
          href="/club/create"
          className="mx-auto flex min-h-[100px] w-2/3 cursor-pointer flex-col flex-wrap items-center justify-center rounded-lg bg-primary-200  p-3 font-bold antialiased shadow-lg transition-all hover:bg-primary-400 hover:shadow-xl"
        >
          Event
          <PlusIcon className="h-8 w-8" />
        </Link>
      </div>
    </div>
  );
};

export default Events;

/* ----------------------------------------- MUSÍ SE DODĚLAT -------------------------------------------------*/
