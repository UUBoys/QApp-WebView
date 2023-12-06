/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQRCode } from "next-qrcode";
import { useState } from "react";

import { useEstablishmentById } from "../../hooks/QueryHooks/useEstablishmentByIdHook";
import { useEventById } from "../../hooks/QueryHooks/useEventByIdHook";

import { ITicket } from "@/modules/utils/schemas/ticket";

export type TicketProps = {
  ticket: ITicket;
  className?: string;
};

const Ticket = ({
  ticket: { event_id, ticket_id, name },
  className,
}: TicketProps) => {
  const { push } = useRouter();
  const { Canvas } = useQRCode();
  const [isHover, setIsHover] = useState<boolean>(false);
  const { event } = useEventById(event_id);
  const { establishment } = useEstablishmentById(event?.establishment_id);

  if (!establishment) return null;

  return (
    <div>
      <div
        className={`flex max-w-sm cursor-pointer items-center rounded-lg ${className}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => setIsHover((prev) => !prev)}
      >
        {isHover && (
          <div className="relative h-[110px] w-[110px] rounded-2xl bg-white shadow-2xl">
            <Canvas
              text={`${process.env.PROD_URL}/tickets/${ticket_id}`}
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
          <div
            className="px-4 py-2 text-gray-700"
            onClick={() => push(`club/${establishment.id}`)}
          >
            <p className="text-[22px] text-gray-700">{name}</p>
            <div className="flex items-center gap-[10px] rounded-lg p-[10px] hover:bg-gray-300">
              <Image
                src={establishment?.profileImage}
                alt="ticket-club-image"
                width={30}
                height={30}
                className="rounded-full"
              />
              <p className="text-gray-500">{establishment?.name}</p>
            </div>
            <p className="text-gray-500">
              {moment(event?.start_date).format("DD-MM-YYYY")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
