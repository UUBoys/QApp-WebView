import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import clsx from "clsx";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

import Button from "@/modules/common/components/Button";
import { IClub } from "@/modules/utils/schemas/club";
import { IEvent } from "@/modules/utils/schemas/event";

export type EventPostProps = {
  event: IEvent | IEvent[];
  club: IClub;
  className?: string;
};

const EventPost = ({ event, className, club }: EventPostProps) => {
  const { t } = useTranslation();
  const { push } = useRouter();

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
        className={clsx("relative rounded-lg bg-white shadow-2xl", className)}
      >
        {/* HEADER */}
        <div className="rounded-md bg-white p-4">
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-[10px]">
              <Image
                src={
                  club.profileImage ||
                  "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
                }
                alt="user-image"
                width={40}
                height={40}
                className="rounded-full border border-primary"
              />
              <p className="cursor-pointer font-medium text-black">
                {club.name}
              </p>
            </div>
            <div className="flex items-center text-gray-300">
              <p>{moment(event.start_date).fromNow()}</p>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] w-full">
          <Image
            src={
              event?.image ||
              "https://www.editionhotels.com/wp-content/uploads/2019/07/EDITION_TimesSquare_ParadiseClub_Blue_3.jpg"
            }
            alt={event.name}
            layout="fill"
            objectFit="cover"
            className="absolute left-0 top-0"
          />
        </div>
        <div className="flex flex-col justify-center gap-[15px] px-4 py-5 pb-[25px]">
          <p className="cursor-pointer text-[16px] font-medium text-black">
            {event.name}
          </p>
          <div className="flex justify-between ">
            <div className="flex flex-col">
              <p className="text-[14px] text-gray-300">
                {moment(event.start_date).format("MMMM Do YYYY, h:mm a")}
              </p>
              <p className="text-[14px] text-gray-300">{club.street}</p>
            </div>
            <div className="flex items-center">
              <Button
                onClick={() => {
                  push(`/events/${event.id}`);
                }}
                className="rounded-full px-4"
              >
                {t("components.eventPost.tickets")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={clsx("relative rounded-lg bg-white shadow-2xl", className)}>
      {/* HEADER */}
      <div className="rounded-md bg-white p-4">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-[10px]">
            <Image
              src={
                club.profileImage ||
                "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
              }
              alt="user-image"
              width={40}
              height={40}
              className="rounded-full border border-primary"
            />
            <div className="flex flex-col justify-center">
              <p className="cursor-pointer font-medium text-black">
                {club.name}
              </p>
              <p className="text-[12px] text-gray-300">
                {t("components.eventPost.moreEvents").replace(
                  "{x}",
                  event.length.toString()
                )}
              </p>
            </div>
          </div>
          <div className="flex items-center text-gray-300">
            <p>{moment(event[0].start_date).fromNow()}</p>
          </div>
        </div>
      </div>

      {/* WIDGET LIST */}
      <div className="relative h-[380px] w-full px-[25px]">
        {slide !== 0 && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-[-20px] top-1/2 z-10 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-2xl"
          >
            <KeyboardArrowLeftRoundedIcon sx={{ fontSize: "35px" }} />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex w-full snap-x snap-mandatory gap-[40px] overflow-hidden overflow-x-auto"
        >
          {event.map((_event) => (
            <div
              key={_event.id}
              className="snap-alway relative flex h-full min-w-[320px] flex-col rounded-lg border border-gray-300"
            >
              <div className="relative h-[200px] w-full shrink-0">
                <Image
                  src={
                    _event.image ||
                    "https://www.editionhotels.com/wp-content/uploads/2019/07/EDITION_TimesSquare_ParadiseClub_Blue_3.jpg"
                  }
                  alt="multiple-events-thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="absolute left-0 top-0 rounded-t-lg"
                />
              </div>

              <div className="grow p-3 py-[20px]">
                <p className="text-[16px] text-black">{_event.name}</p>
                <div className="flex flex-col py-[10px]">
                  <p className="text-[14px] text-gray-300">
                    {moment(_event.start_date).format("MMMM Do YYYY, h:mm a")}
                  </p>
                  <p className="text-[14px] text-gray-300">{club.street}</p>
                  <div className="mt-[15px]">
                    <Button className="rounded-full px-4">
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
            className="absolute right-[-20px] top-1/2 z-10 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-2xl"
          >
            <KeyboardArrowRightRoundedIcon sx={{ fontSize: "35px" }} />
          </button>
        )}
      </div>

      <div className="flex flex-col justify-center gap-[15px] px-4 py-5 pb-[25px]" />
    </div>
  );
};

export default EventPost;
