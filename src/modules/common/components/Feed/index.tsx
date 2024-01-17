/* eslint-disable no-shadow */
/* eslint-disable sonarjs/no-duplicate-string */
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import WindowRoundedIcon from "@mui/icons-material/WindowRounded";
import React from "react";
import { useTranslation } from "react-i18next";

import { useClubs } from "../../hooks/QueryHooks/useEstablishmentshook";
import { useEvents } from "../../hooks/QueryHooks/useEventsHook";
import { useTicketsForUser } from "../../hooks/QueryHooks/useTicketsForUserHook";

import EventsList from "@/modules/common/components/EventList";
import EventPost from "@/modules/common/components/EventPost";
import Navigation from "@/modules/common/components/Navigation";
import { IEvent } from "@/modules/utils/schemas/event";

enum E_FastFeedFilter {
  "ALL",
  "EVENTS",
  "CLUBS",
}

const Feed = () => {
  const [fastFeedFilter, setFastFeedFilter] = React.useState<E_FastFeedFilter>(
    E_FastFeedFilter.ALL
  );
  const { t } = useTranslation();
  const { clubs } = useClubs();
  const { events } = useEvents();
  const { tickets } = useTicketsForUser();

  return (
    <div className="relative max-h-[calc(100vh)] overflow-hidden pb-10 text-gray-300 ">
      <div className="grid  max-h-[calc(100vh)] w-full grid-cols-1 pb-10 pt-[50px]  lg:grid-cols-3">
        <div className="col-span-1 hidden max-h-[calc(100vh-150px)] lg:block">
          <div className="mt-[100px] flex flex-col items-end px-[10px]">
            <Navigation
              links={[
                {
                  label: "Vše",
                  onClick: () => {
                    setFastFeedFilter(E_FastFeedFilter.ALL);
                  },
                  icon: <HomeRoundedIcon />,
                },
                {
                  label: "Akce",
                  onClick: () => {
                    setFastFeedFilter(E_FastFeedFilter.EVENTS);
                  },
                  icon: <WindowRoundedIcon />,
                },
                {
                  label: "Cluby",
                  onClick: () => {
                    setFastFeedFilter(E_FastFeedFilter.CLUBS);
                  },
                  icon: <ApartmentRoundedIcon />,
                },
              ]}
              className="w-[200px]"
            />
            <div className="my-[20px] h-[2px] w-[200px] rounded-full bg-gray-300" />
            <Navigation
              links={clubs.map((club) => {
                return {
                  label: club.name,
                  image: club.profileImage,
                  href: `/club/${club.id}`,
                };
              })}
              className="w-[200px]"
            />
          </div>
        </div>
        {(fastFeedFilter === E_FastFeedFilter.ALL ||
          fastFeedFilter === E_FastFeedFilter.EVENTS) && (
          <div className="scroll-hidden col-span-1 max-h-[100vh] w-full overflow-y-auto pt-[50px] lg:px-20">
            <div className=" flex flex-col gap-[50px]  px-[20px]  pb-[50px] pt-20 lg:px-0 ">
              {events.map((event) => {
                const eventClub = clubs.find(
                  (club) => club.id === event.establishment_id
                );
                if (!eventClub) return null;
                return <EventPost event={event} club={eventClub} />;
              })}
            </div>
          </div>
        )}

        {(fastFeedFilter === E_FastFeedFilter.ALL ||
          fastFeedFilter === E_FastFeedFilter.CLUBS) && (
          <div className="col-span-1 hidden max-h-[calc(100vh-150px)] w-full lg:block">
            <div className="mt-[100px] flex flex-col items-start p-3">
              <h1 className=" text-center text-[20px]  text-gray-700">
                {t("pages.feed.eventsWithTickets")}
              </h1>
              <div className="scroll-hidden mt-[20px] max-h-[calc(100vh)] overflow-y-auto rounded-2xl bg-transparent py-10 pb-[100px] pt-[20px]">
                <EventsList
                  events={
                    (tickets.map((ticket) => {
                      return events.find(
                        (event) => event.id === ticket.event_id
                      );
                    }) as IEvent[]) ?? ([] as IEvent[])
                  }
                  className="!mx-0 !mt-[10px] !w-[500px] rounded-2xl pb-40"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
