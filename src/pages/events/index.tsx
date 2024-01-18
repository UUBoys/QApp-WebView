"use client";

import { NextPage } from "next";

import EventsList from "@/modules/common/components/EventList";
import { useEvents } from "@/modules/common/hooks/QueryHooks/useEventsHook";

/* ----------------------------------------- MUSÍ SE DODĚLAT -------------------------------------------------*/

const Events: NextPage = () => {
  const { events } = useEvents();

  return (
    <div className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-20 pt-52 lg:p-20">
      <p className="flex gap-8 text-6xl font-semibold">
        Všechny<div className="text-primary-500">{" akce"}</div>
      </p>
      <div className="flex w-full flex-col justify-center gap-6 rounded-xl bg-white py-10 shadow-xl lg:min-h-[600px] lg:py-20">
        <EventsList events={events} />
      </div>
    </div>
  );
};

export default Events;

/* ----------------------------------------- MUSÍ SE DODĚLAT -------------------------------------------------*/
