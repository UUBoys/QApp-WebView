import React, { useState, useRef } from "react";
import clsx from "clsx";
import moment from "moment";
import Image from "next/image";

import Button from "@/modules/common/components/Button";

import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useTranslation } from "react-i18next";

type EventPostProps = {
  event: EventPostEventProps | EventPostEventProps[];
  club: EventClubProps;
  className?: string;
};

type EventClubProps = {
  name: string;
  avatar?: string;
  address: string;
};

export type EventPostEventProps = {
  uuid: string;
  title: string;
  address: string;
  date: string;
  thumbnail?: string;
  created: string;
};

export default function EventPost({ event, className, club }: EventPostProps) {
  const { t } = useTranslation();

  const [slide, setSlide] = useState<number>(0);

  const scrollContainerRef = useRef(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const distance = 320;
      if (direction === "left") {
        setSlide((prev) => prev - 1);
        (scrollContainerRef.current as HTMLDivElement).scrollBy({
          left: -distance,
          behavior: "smooth",
        });
      } else if (direction === "right") {
        setSlide((prev) => prev + 1);
        (scrollContainerRef.current as HTMLDivElement).scrollBy({
          left: distance,
          behavior: "smooth",
        });
      }
    }
  };

  if (!Array.isArray(event)) {
    return (
      <div
        className={clsx("bg-white shadow-2xl rounded-lg relative", className)}
      >
        {/* HEADER */}
        <div className="bg-white rounded-md p-4">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-[10px]">
              <Image
                src={
                  club.avatar ||
                  "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
                }
                alt="user-image"
                width={40}
                height={40}
                className="rounded-full border border-primary"
              />
              <p className="text-black font-medium cursor-pointer">
                {club.name}
              </p>
            </div>
            <div className="flex items-center text-gray-300">
              <p>{moment(event.created).fromNow()}</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[300px] relative">
          <Image
            src={
              event?.thumbnail ||
              "https://www.editionhotels.com/wp-content/uploads/2019/07/EDITION_TimesSquare_ParadiseClub_Blue_3.jpg"
            }
            alt={event.title}
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0"
          />
        </div>
        <div
          className={
            "flex flex-col justify-center py-5 px-4 gap-[15px] pb-[25px]"
          }
        >
          <p className={"text-[16px] font-medium text-black cursor-pointer"}>
            {event.title}
          </p>
          <div className={"flex justify-between "}>
            <div className={"flex flex-col"}>
              <p className={"text-gray-300 text-[14px]"}>
                {moment(event.date).format("MMMM Do YYYY, h:mm a")}
              </p>
              <p className={"text-gray-300 text-[14px]"}>{club.address}</p>
            </div>
            <div className={"flex items-center"}>
              <Button className={"rounded-full px-4"}>
                {t("components.eventPost.tickets")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={clsx("bg-white shadow-2xl rounded-lg relative", className)}
      >
        {/* HEADER */}
        <div className="bg-white rounded-md p-4">
          <div className="flex justify-between w-full">
            <div className="flex items-center gap-[10px]">
              <Image
                src={
                  club.avatar ||
                  "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
                }
                alt="user-image"
                width={40}
                height={40}
                className="rounded-full border border-primary"
              />
              <div className={"flex flex-col justify-center"}>
                <p className="text-black font-medium cursor-pointer">
                  {club.name}
                </p>
                <p className={"text-gray-300 text-[12px]"}>
                  {t("components.eventPost.moreEvents").replace(
                    "{x}",
                    event.length.toString()
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center text-gray-300">
              <p>{moment(event[0].created).fromNow()}</p>
            </div>
          </div>
        </div>

        {/* WIDGET LIST */}
        <div className="w-full h-[380px] relative px-[25px]">
          {slide !== 0 && (
            <button
              onClick={() => handleScroll("left")}
              className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 z-10 rounded-full flex items-center justify-center bg-white shadow-2xl text-primary w-[40px] h-[40px]"
            >
              <KeyboardArrowLeftRoundedIcon sx={{ fontSize: "35px" }} />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="overflow-hidden overflow-x-auto flex gap-[40px] w-full snap-x snap-mandatory"
          >
            {event.map((_event) => (
              <div
                key={_event.uuid}
                className="min-w-[320px] border border-gray-300 relative h-full flex flex-col snap-alway rounded-lg"
              >
                <div className="relative flex-shrink-0 h-[200px] w-full">
                  <Image
                    src={
                      _event.thumbnail ||
                      "https://www.editionhotels.com/wp-content/uploads/2019/07/EDITION_TimesSquare_ParadiseClub_Blue_3.jpg"
                    }
                    alt="multiple-events-thumbnail"
                    layout="fill"
                    objectFit="cover"
                    className="absolute top-0 left-0 rounded-t-lg"
                  />
                </div>

                <div className="flex-grow p-3 py-[20px]">
                  <p className="text-black text-[16px]">{_event.title}</p>
                  <div className={"flex flex-col py-[10px]"}>
                    <p className={"text-gray-300 text-[14px]"}>
                      {moment(_event.date).format("MMMM Do YYYY, h:mm a")}
                    </p>
                    <p className={"text-gray-300 text-[14px]"}>
                      {_event.address}
                    </p>
                    <div className={"mt-[15px]"}>
                      <Button className={"rounded-full px-4"}>
                        {t("components.eventPost.tickets")}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {slide !== event.length - 1 && (
            <button
              onClick={() => handleScroll("right")}
              className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 z-10 rounded-full flex items-center justify-center bg-white shadow-2xl text-primary w-[40px] h-[40px]"
            >
              <KeyboardArrowRightRoundedIcon sx={{ fontSize: "35px" }} />
            </button>
          )}
        </div>

        <div
          className={
            "flex flex-col justify-center py-5 px-4 gap-[15px] pb-[25px]"
          }
        ></div>
      </div>
    );
  }
}
