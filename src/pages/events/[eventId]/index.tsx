/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

"use client";

import clsx from "clsx";
import { NextPage } from "next";
import { useRouter } from "next/router";

import Button from "@/modules/common/components/Button";
import { useEstablishmentById } from "@/modules/common/hooks/useEstablishmentByIdHook";
import { useEventById } from "@/modules/common/hooks/useEventByIdHook";

const Event: NextPage = () => {
  const { eventId } = useRouter().query;
  const { push } = useRouter();

  const { event } = useEventById(eventId as string);

  const { establishment } = useEstablishmentById(event?.establishment_id ?? "");

  if (!event) return null;
  return (
    <div className="flex min-h-[100vh] flex-col items-start text-center shadow-xl">
      <div
        style={{ backgroundImage: `url(${event.image ?? ""})` }}
        className={clsx(
          "relative flex h-full min-h-[100vh] w-full flex-col items-center justify-center bg-gray-200 bg-cover bg-center bg-no-repeat pb-4 pt-32 text-center text-2xl font-semibold text-gray-500"
        )}
      >
        {" "}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative flex min-h-[200px] w-full max-w-[600px] justify-center rounded-lg border-2 border-primary-400 bg-white p-10 pt-20 text-start shadow-xl transition-all hover:shadow-2xl">
          <div className="flex flex-col items-start gap-5 text-center">
            <div
              onClick={() => {
                push(`/club/${establishment?.id}`);
              }}
              className="flex min-h-[15vh] w-full cursor-pointer items-center justify-start rounded-lg bg-gray-200 p-5 shadow-xl transition-all hover:shadow-2xl "
            >
              {" "}
              <div className="relative">
                {" "}
                <div
                  style={{
                    backgroundImage: `url(${establishment?.profileImage})`,
                  }}
                  className={clsx(
                    "absolute top-[-4rem] flex h-12 min-h-[8rem] w-12 min-w-[8rem] flex-col items-center  justify-center rounded-full border-[3px] border-black bg-gray-300 bg-contain text-sm font-semibold text-gray-500"
                  )}
                />
              </div>
              <div className="ml-40 flex flex-col items-start">
                {" "}
                <div className=" text-2xl font-bold text-black">
                  {establishment?.name}
                </div>
                <div className=" text-sm font-semibold text-black">
                  {" "}
                  {establishment?.city ?? ""}, {establishment?.country},{" "}
                  {establishment?.street ?? ""}{" "}
                </div>
              </div>
            </div>
            <div className="flex w-full items-center border-b border-primary-400 pb-5 text-center">
              <div className=" w-full text-center text-3xl font-bold">
                {event.name}
              </div>
            </div>
            <div className="w-full text-center text-sm font-bold text-gray-400">
              {event?.description ?? ""}
            </div>
            <div className="w-full text-center text-sm font-bold text-gray-500">
              {" "}
              {establishment?.city ?? ""}, {establishment?.country},{" "}
              {establishment?.street ?? ""}{" "}
            </div>
            <div className="mt-5 flex w-full justify-center text-5xl font-bold text-gray-800">
              <p className="text-primary-400"> {event?.price ?? ""}</p>.00
              Kreditů
            </div>
            <div className="mt-5 flex w-full justify-center gap-2 text-2xl font-semibold text-gray-700">
              Kapacita{" "}
              <p className="text-primary-400">
                {" "}
                {event?.maximumCapacity ?? ""}
              </p>
              lidí
            </div>
            <div className="mt-5 flex w-full justify-center gap-2 text-sm font-semibold text-gray-700">
              Od{" "}
              <p className="text-primary-400">
                {" "}
                {new Date(event?.start_date ?? "").toLocaleString()}
              </p>{" "}
              do{" "}
              <p className="text-primary-400">
                {" "}
                {new Date(event?.end_date ?? "").toLocaleString()}
              </p>
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
