import React from "react";
import { useTranslation } from "react-i18next";

import EventPost, {
  EventPostProps,
} from "@/modules/common/components/EventPost";
import Navigation, {
  NavigationLinkProps,
} from "@/modules/common/components/Navigation";
import EventsList, { Event } from "@/modules/common/components/EventList";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import WindowRoundedIcon from "@mui/icons-material/WindowRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";

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
    address: "Kolbenova 123/456, Praha 9, 400 08",
    content:
      "Bechers bar akce číslo 1! Přijďte si užít skvělou atmosféru a výborné drinky!",
    title: "Bechers bar",
    date: "12. 5. 2021",
    imageSrc:
      "https://media.istockphoto.com/id/501387734/cs/fotografie/tan%C4%8D%C3%ADc%C3%AD-p%C5%99%C3%A1tel%C3%A9.jpg?s=612x612&w=0&k=20&c=WyInUbbqdQuoj8efMtDrnJbnghE5JyvkGqC09T5gMRY=",
    price: "150 Kč",
  },
  {
    address: "Kolbenova 123/456, Praha 9, 400 08",
    content:
      "Bechers bar akce číslo 1! Přijďte si užít skvělou atmosféru a výborné drinky!",
    title: "Bechers bar",
    date: "12. 5. 2021",
    imageSrc:
      "https://media.istockphoto.com/id/501387734/cs/fotografie/tan%C4%8D%C3%ADc%C3%AD-p%C5%99%C3%A1tel%C3%A9.jpg?s=612x612&w=0&k=20&c=WyInUbbqdQuoj8efMtDrnJbnghE5JyvkGqC09T5gMRY=",
    price: "150 Kč",
  },
  {
    address: "Kolbenova 123/456, Praha 9, 400 08",
    content:
      "Bechers bar akce číslo 1! Přijďte si užít skvělou atmosféru a výborné drinky!",
    title: "Bechers bar",
    date: "12. 5. 2021",
    imageSrc:
      "https://media.istockphoto.com/id/501387734/cs/fotografie/tan%C4%8D%C3%ADc%C3%AD-p%C5%99%C3%A1tel%C3%A9.jpg?s=612x612&w=0&k=20&c=WyInUbbqdQuoj8efMtDrnJbnghE5JyvkGqC09T5gMRY=",
    price: "150 Kč",
  },
];

const Feed = () => {
  const { t } = useTranslation();
  return (
    <div className={"text-gray-300"}>
      <div className={"grid grid-cols-3 w-full pt-[50px]"}>
        <div className={"col-span-1"}>
          <div className={"flex justify-end mt-[100px] px-[10px]"}>
            <Navigation links={leftMenuMockLinks} className={"w-[200px]"} />
          </div>
        </div>
        <div
          className={
            "col-span-1  py-[50px] max-h-screen overflow-y-auto scroll-hidden"
          }
        >
          <div className={"flex flex-col gap-[50px] pt-[50px]"}>
            {mockData.map((event) => (
              <EventPost event={event.event} club={event.club} />
            ))}
          </div>
        </div>
        <div className={"col-span-1 w-full"}>
          <div className={"flex flex-col items-start mt-[100px]"}>
            <h1 className={"text-center text-[20px] text-gray-700  w-[500px]"}>
              {t("pages.feed.eventsWithTickets")}
            </h1>
            <EventsList
              events={mockEvetList}
              className={"!mt-[20px] !mx-0 !w-[500px]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;