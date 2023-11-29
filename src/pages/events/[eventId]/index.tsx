"use client";

import { useQuery } from "@apollo/client";
import clsx from "clsx";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

import { Establishment, Query } from "@/generated/graphql";
import Button from "@/modules/common/components/Button";
import { Event } from "@/modules/common/components/EventList";
import { GET_ESTABLISHMENT_BY_ID } from "@/modules/GRAPHQL/queries/GetEstablishmentQuery";
import { GET_EVENT_BY_ID } from "@/modules/GRAPHQL/queries/GetEventByIdQuery";

/* ----------------------------------------- MUSÍ SE DODĚLAT -------------------------------------------------*/

const Event: NextPage = () => {
  const { eventId } = useRouter().query;
  const [event, setEvent] = useState<Event | null | undefined>(null);
  const [establishment, setEstablishment] = useState<
    Establishment | null | undefined
  >(null);
  useQuery<Query>(GET_EVENT_BY_ID, {
    fetchPolicy: "cache-and-network",
    context: { shouldTrackStatus: false },
    variables: { getEventByIdId: eventId },
    onCompleted(data) {
      if (!data.getEventById?.events) return;
      setEvent(data.getEventById.events[0] as unknown as Event);
    },
  });

  useQuery<Query>(GET_ESTABLISHMENT_BY_ID, {
    fetchPolicy: "cache-and-network",
    variables: {
      getEstablishmentByIdId: event?.establishment_id ?? 0,
    },
    defaultOptions: {},
    context: { shouldTrackStatus: true },
    onCompleted(data) {
      if (!data.getEstablishmentById?.establishments) return;
      setEstablishment(
        data.getEstablishmentById.establishments[0] as unknown as Establishment
      );
    },
  });

  if (!event) return null;
  return (
    <div className="flex min-h-[100vh] flex-col items-start text-center shadow-xl">
      <div
        style={{ backgroundImage: `url(${event.image ?? ""})` }}
        className={clsx(
          "relative flex h-full min-h-[100vh] w-full flex-col items-center justify-center bg-gray-200 bg-cover bg-center bg-no-repeat text-center text-2xl font-semibold text-gray-500"
        )}
      >
        {" "}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative flex min-h-[200px] w-full max-w-[600px] justify-center rounded-lg border-2 border-primary-400 bg-white p-10 pt-20 text-start shadow-lg transition-all hover:shadow-xl">
          <div className="flex flex-col gap-5 text-center">
            {" "}
            <div className="flex w-full items-center border-b border-primary-400 pb-5 text-center">
              <div className=" w-full text-center text-3xl font-bold">
                {event.name}
              </div>
            </div>
            <div className="text-sm font-bold text-gray-400">
              {event?.description ?? ""}
            </div>
            <div className="text-sm font-bold text-gray-500">
              {establishment?.city ?? ""}, {establishment?.street ?? ""}{" "}
            </div>
            <div className="mt-20 flex w-full justify-center text-5xl font-bold text-gray-800">
              <p className="text-primary-400"> {event?.price ?? ""}</p>.00
              Kreditů
            </div>
            <div className="mt-20 flex w-full justify-center gap-2 text-2xl font-semibold text-gray-700">
              Kapacita{" "}
              <p className="text-primary-400">
                {" "}
                {event?.maximumCapacity ?? ""}
              </p>
              lidí
            </div>
            <div className="mt-20 flex w-full justify-center text-5xl font-bold text-gray-800">
              <Button className="h-full min-h-[50px] w-full rounded-lg px-4 text-xl">
                Zakoupit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

/* ----------------------------------------- MUSÍ SE DODĚLAT -------------------------------------------------*/
