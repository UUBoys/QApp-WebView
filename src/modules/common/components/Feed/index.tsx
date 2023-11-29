/* eslint-disable sonarjs/no-duplicate-string */
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import WindowRoundedIcon from "@mui/icons-material/WindowRounded";
import React from "react";
import { useTranslation } from "react-i18next";

import { useClubs } from "../../hooks/useEstablishmentsHook";

import EventsList, { Event } from "@/modules/common/components/EventList";
import EventPost, {
  EventPostProps,
} from "@/modules/common/components/EventPost";
import Navigation, {
  NavigationLinkProps,
} from "@/modules/common/components/Navigation";

const mockData: EventPostProps[] = [
  {
    event: {
      uuid: "001",
      title: "Rock Koncert",
      address: "Main Street 1, City",
      date: "2023-12-01",
      thumbnail: "https://picsum.photos/200/300",
      created: "2023-11-01",
    },
    club: {
      name: "Rock Club",
      avatar: "https://picsum.photos/40/40",
      address: "Main Street 1, City",
    },
  },
  {
    event: {
      uuid: "002",
      title: "Electro Party",
      address: "Main Street 2, City",
      date: "2023-12-02",
      thumbnail: "https://picsum.photos/200/300",
      created: "2023-11-02",
    },
    club: {
      name: "Electro Club",
      avatar: "https://picsum.photos/40/40",
      address: "Main Street 2, City",
    },
  },
  {
    event: [
      {
        uuid: "0202",
        title: "Electro Party",
        address: "Main Street 2, City",
        date: "2023-12-02",
        thumbnail: "https://picsum.photos/200/300",
        created: "2023-11-02",
      },
      {
        uuid: "0102",
        title: "Electro Party",
        address: "Main Street 2, City",
        date: "2023-12-02",
        thumbnail: "https://picsum.photos/200/300",
        created: "2023-11-02",
      },
      {
        uuid: "002",
        title: "Electro Party",
        address: "Main Street 2, City",
        date: "2023-12-02",
        thumbnail: "https://picsum.photos/200/300",
        created: "2023-11-02",
      },
      {
        uuid: "002",
        title: "Electro Party",
        address: "Main Street 2, City",
        date: "2023-12-02",
        thumbnail: "https://picsum.photos/200/300",
        created: "2023-11-02",
      },
    ],
    club: {
      name: "Electro Club",
      avatar: "https://picsum.photos/40/40",
      address: "Main Street 2, City",
    },
  },
  {
    event: {
      uuid: "003",
      title: "Jazz večer",
      address: "Main Street 3, City",
      date: "2023-12-03",
      thumbnail: "https://picsum.photos/200/300",
      created: "2023-11-03",
    },
    club: {
      name: "Jazz Bar",
      avatar: "https://picsum.photos/40/40",
      address: "Main Street 3, City",
    },
  },
  {
    event: {
      uuid: "010",
      title: "Klasická hudba",
      address: "Main Street 10, City",
      date: "2023-12-10",
      thumbnail: "https://picsum.photos/200/300",
      created: "2023-11-10",
    },
    club: {
      name: "Classic Club",
      avatar: "https://picsum.photos/40/40",
      address: "Main Street 10, City",
    },
  },
];

const leftMenuMockLinks: NavigationLinkProps[] = [
  {
    label: "Link 1",
    icon: <HomeRoundedIcon />,
  },
  {
    label: "Link 2",
    icon: <WindowRoundedIcon />,
  },
  {
    label: "Link 2",
    icon: <ApartmentRoundedIcon />,
  },
];

const mockEvetList: Event[] = [
  {
    description: "Popis akce bla bla",
    end_date: "2023-11-25T02:38:00.000Z",
    establishment_id: 7,
    image: "https://utfs.io/f/7e862802-7728-43b1-8831-26df6df46ea6-6mtux8.jpg",
    maximumCapacity: 150,
    name: "Halloween v Becheru",
    price: 100,
    start_date: "2023-11-24T20:44:00.000Z",
    id: "5121e86a-9e8b-4432-8b53-44361e24850d",
  },
  {
    description: "Popis akce bla bla",
    end_date: "2023-11-25T02:38:00.000Z",
    establishment_id: 7,
    id: "5121e86a-9e8b-4432-8b53-44361e24850d",
    image: "https://utfs.io/f/7e862802-7728-43b1-8831-26df6df46ea6-6mtux8.jpg",
    maximumCapacity: 150,
    name: "Halloween v Becheru",
    price: 100,
    start_date: "2023-11-24T20:44:00.000Z",
  },
  {
    description: "Popis akce bla bla",
    id: "5121e86a-9e8b-4432-8b53-44361e24850d",
    end_date: "2023-11-25T02:38:00.000Z",
    establishment_id: 7,
    image: "https://utfs.io/f/7e862802-7728-43b1-8831-26df6df46ea6-6mtux8.jpg",
    maximumCapacity: 150,
    name: "Halloween v Becheru",
    price: 100,
    start_date: "2023-11-24T20:44:00.000Z",
  },
  {
    description: "Popis akce bla bla",
    end_date: "2023-11-25T02:38:00.000Z",
    establishment_id: 7,
    image: "https://utfs.io/f/7e862802-7728-43b1-8831-26df6df46ea6-6mtux8.jpg",
    maximumCapacity: 150,
    name: "Halloween v Becheru",
    price: 100,
    start_date: "2023-11-24T20:44:00.000Z",
    id: "5121e86a-9e8b-4432-8b53-44361e24850d",
  },
];

const Feed = () => {
  const { t } = useTranslation();
  const { clubs } = useClubs();
  return (
    <div className="relative  max-h-[calc(100vh-50px)] text-gray-300 ">
      <div className="grid  max-h-[calc(100vh-50px)] w-full grid-cols-1 pt-[50px]  lg:grid-cols-3">
        <div className="col-span-1 hidden max-h-[calc(100vh-150px)] lg:block">
          <div className="mt-[100px] flex flex-col items-end px-[10px]">
            <Navigation links={leftMenuMockLinks} className="w-[200px]" />
            <div className="my-[20px] h-[2px] w-[200px] rounded-full bg-gray-300" />
            {/* <div className={"w-[200px]"}>
              <p className={"text-center text-gray-700 mb-[20px] font-medium"}>
                {t("pages.feed.favoriteClubs")}
              </p>
            </div> */}
            <Navigation
              links={clubs.map((club) => {
                return {
                  label: club.name,
                  image: club.profileImage,
                };
              })}
              className="w-[200px]"
            />
          </div>
        </div>
        <div className="scroll-hidden col-span-1 max-h-[calc(100vh-50px)] overflow-y-auto pt-[50px]">
          <div className="flex flex-col gap-[50px] px-[10px] py-[50px] lg:px-0 ">
            {mockData.map((event) => (
              <EventPost event={event.event} club={event.club} />
            ))}
          </div>
        </div>
        <div className="col-span-1 hidden max-h-[calc(100vh-150px)] w-full lg:block">
          <div className="mt-[100px] flex flex-col items-start p-3">
            <h1 className="w-[500px] text-center text-[20px]  text-gray-700">
              {t("pages.feed.eventsWithTickets")}
            </h1>
            <div className="scroll-hidden mt-[20px] overflow-y-auto rounded-2xl bg-transparent pb-[100px] pt-[20px]">
              <EventsList
                events={mockEvetList}
                className="!mx-0 !mt-[10px] !w-[500px] rounded-2xl py-[0px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
