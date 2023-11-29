import { useQuery } from "@apollo/client";
import { NextPage } from "next";

import { Query } from "@/generated/graphql";
import EventsList, { Event } from "@/modules/common/components/EventList";
import { GET_EVENTS } from "@/modules/GRAPHQL/queries/GetEventsQuery";

/* ----------------------------------------- MUSÍ SE DODĚLAT -------------------------------------------------*/

const Events: NextPage = () => {
  const { data: eventsData } = useQuery<Query>(GET_EVENTS, {
    fetchPolicy: "cache-and-network",
    context: { shouldTrackStatus: true },
  });

  return (
    <div className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-20 p-20 pt-52">
      <p className="flex gap-8 text-6xl font-semibold">
        Všechny<div className="text-primary-500">{" akce"}</div>
      </p>
      <div className="flex min-h-[600px] w-full flex-col justify-center gap-6 rounded-xl bg-white py-20 shadow-xl">
        <EventsList
          events={(eventsData?.getEvents?.events as unknown as Event[]) ?? []}
        />
      </div>
    </div>
  );
};

export default Events;

/* ----------------------------------------- MUSÍ SE DODĚLAT -------------------------------------------------*/
