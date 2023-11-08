import React, { useState } from "react";
import Image from "next/image";
import { useQRCode } from "next-qrcode";
import moment from "moment";

export type TicketProps = {
  uuid: string;
  eventName: string;
  eventLocation: string;
  clubName: string;
  clubImage: string;
  clubUuid: string;
  eventDate: string;
  className?: string;
};

const Ticket = ({
  uuid,
  eventName,
  eventLocation,
  clubName,
  clubImage,
  clubUuid,
  className = "",
  eventDate,
}: TicketProps) => {
  const { Canvas } = useQRCode();
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div>
      <div
        className="rounded-lg max-w-sm flex items-center"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => setIsHover((prev) => !prev)}
      >
        {isHover && (
          <div
            className={
              "w-[110px] h-[110px] relative bg-white rounded-2xl shadow-2xl"
            }
          >
            <Canvas
              text={`${process.env.PROD_URL}/ticket/${uuid}`}
              options={{
                errorCorrectionLevel: "M",
                scale: 4,
                width: 110,
                margin: 5,
              }}
            />
          </div>
        )}
        <div
          className={"flex w-full bg-white shadow-lg rounded-lg min-w-[450px]"}
        >
          <div className={"w-[150px] h-[125px] relative"}>
            <Image
              src={"https://picsum.photos/300/150"}
              fill
              className={"rounded-l-lg"}
              alt={"ticket-image"}
            />
          </div>
          <div className={"text-gray-70 px-4 py-2 "}>
            <p className={"text-gray-700 text-[22px]"}>{eventName}</p>
            <div className={"flex items-center gap-[10px] py-[10px]"}>
              <Image
                src={clubImage}
                alt={"ticket-club-image"}
                width={30}
                height={30}
                className={"rounded-full"}
              />
              <p className={"text-gray-500"}>{clubName}</p>
            </div>
            <p className={"text-gray-500"}>
              {moment(eventDate).format("DD-MM-YYYY")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
