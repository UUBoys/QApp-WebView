/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import moment from "moment";
import Image from "next/image";
import { useQRCode } from "next-qrcode";
import { useState } from "react";

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
        className={`flex max-w-sm items-center rounded-lg ${className}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => setIsHover((prev) => !prev)}
      >
        {isHover && (
          <div className="relative h-[110px] w-[110px] rounded-2xl bg-white shadow-2xl">
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
        <div className="flex w-full min-w-[450px] rounded-lg bg-white shadow-lg">
          <div className="relative h-[125px] w-[150px]">
            <Image
              src="https://picsum.photos/300/150"
              fill
              className="rounded-l-lg"
              alt="ticket-image"
            />
          </div>
          <div className="px-4 py-2 text-gray-700">
            <p className="text-[22px] text-gray-700">{eventName}</p>
            <div className="flex items-center gap-[10px] py-[10px]">
              <Image
                src={clubImage}
                alt="ticket-club-image"
                width={30}
                height={30}
                className="rounded-full"
              />
              <p className="text-gray-500">{clubName}</p>
            </div>
            <p className="text-gray-500">
              {moment(eventDate).format("DD-MM-YYYY")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
