import { useQuery } from "@apollo/client";
import clsx from "clsx";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { Query } from "@/generated/graphql";
import { Event } from "@/modules/common/components/EventList";
import { GET_EVENT_BY_ID } from "@/modules/GRAPHQL/queries/GetEventByIdQuery";

/* ----------------------------------------- MUSÍ SE DODĚLAT -------------------------------------------------*/

const Event: NextPage = () => {
  const { eventId } = useRouter().query;
  const { data: eventData } = useQuery<Query>(GET_EVENT_BY_ID, {
    fetchPolicy: "cache-and-network",
    context: { shouldTrackStatus: true },
    variables: { getEventByIdId: eventId },
    onCompleted(data) {
      console.log(data);
    },
  });

  if (!eventData?.getEventById?.events) return null;
  const event = (eventData?.getEventById?.events as any)[0] as Event;

  console.log(event);
  if (!event) return null;
  return (
    <div className="flex min-h-[100vh] flex-col items-start text-center shadow-xl">
      <div
        style={{ backgroundImage: `url(${event.image ?? ""})` }}
        className={clsx(
          "relative flex h-3/5 max-h-[400px] min-h-[50vh] w-full flex-col items-center justify-center bg-gray-200 bg-cover bg-center bg-no-repeat text-center text-2xl font-semibold text-gray-500"
        )}
      >
        {/* Overlay with black filter */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="min-h-[100vh] w-full pb-20">
        <div className="relative pl-20 text-start">
          <div className="ml-[20rem] pt-[2rem]">
            {" "}
            <div className="flex items-center">
              <div className=" text-3xl font-bold">{event.name}</div>
            </div>
            <div className="  font-bold text-gray-500">
              Počet nadcházejících akcí: <b className="text-primary-500">fsa</b>
            </div>
          </div>
        </div>
        <div className="flex px-20" />
      </div>
    </div>
  );
};

export default Event;

/* ----------------------------------------- MUSÍ SE DODĚLAT -------------------------------------------------*/
