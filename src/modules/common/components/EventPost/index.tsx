import clsx from "clsx";
import React from "react";
import moment from "moment";
import Image from "next/image";
import Button from "../Button";

type EventPostProps = {
  event: EventPostEventProps;
  className?: string;
};

export type EventPostAuthorProps = {
  name: string;
  avatar?: string;
};

export type EventPostEventProps = {
  uuid: string;
  author: EventPostAuthorProps;
  title: string;
  address: string;
  date: string;
  thumbnail?: string;
  created: string;
};

export default function EventPost({ event, className }: EventPostProps) {
  return (
    <div className={clsx("bg-white shadow-2xl rounded-lg relative", className)}>
      {/* HEADER */}
      <div key={event.uuid} className="bg-white rounded-md p-4">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-[10px]">
            <Image
              src={
                event.author.avatar ||
                "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
              }
              alt="user-image"
              width={40}
              height={40}
              className="rounded-full border border-primary"
            />
            <p className="text-black font-medium cursor-pointer">
              Kulturni dum Barikadniku
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
            <p className={"text-gray-300 text-[14px]"}>{event.address}</p>
          </div>
          <div className={"flex items-center"}>
            <Button className={"rounded-full px-4"}>Vstupenky</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
