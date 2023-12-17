/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from "clsx";
import moment from "moment";
import { useRouter } from "next/router";
import { useQRCode } from "next-qrcode";

import { useEstablishmentById } from "../../hooks/QueryHooks/useEstablishmentByIdHook";
import { useEventById } from "../../hooks/QueryHooks/useEventByIdHook";

import { ITicket } from "@/modules/utils/schemas/ticket";

export type TicketProps = {
  ticket: ITicket;
  className?: string;
  ticketHolesColor?: string;
};

const Ticket: React.FC<TicketProps> = ({
  ticket: { event_id, ticket_id },
  ticketHolesColor,
  className,
}) => {
  const { push } = useRouter();
  const { Canvas } = useQRCode();
  const { event } = useEventById(event_id);
  const { establishment } = useEstablishmentById(event?.establishment_id);
  moment.locale("cs");

  if (!establishment) return null;
  return (
    <div
      onClick={() => {
        push(`/events/${event_id}`);
      }}
      className={clsx(
        className,
        "relative mx-auto my-6  w-[400px] cursor-pointer bg-gray-100 shadow-xl transition-all hover:shadow-2xl"
      )}
    >
      {/* Top Holes */}
      <div
        className={clsx(
          ticketHolesColor,
          "absolute left-1/2 top-[-25px] h-[50px] w-[50px] -translate-x-1/2 rounded-full bg-white"
        )}
      />
      <div
        className={clsx(
          ticketHolesColor,
          "absolute left-[25px] top-[-25px] h-[50px] w-[50px] rounded-full bg-white"
        )}
      />
      <div className="absolute right-[25px] top-[-25px] h-[50px] w-[50px] rounded-full bg-white " />

      {/* Ticket Title */}
      <div className="p-12 pb-2.5 pt-20">
        <p className="text-center text-xl text-gray-400">
          {establishment?.name}
        </p>
        <p className="text-center text-5xl">{event?.name}</p>
      </div>

      {/* Movie Poster */}
      <div className="my-2">
        {event && event.image && (
          <img
            src={event.image}
            alt="Movie: Only God Forgives"
            className="mx-auto h-auto max-w-[300px]"
          />
        )}
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-3 p-5">
        <table className="w-full text-lg">
          <tr>
            <th className="w-1/2 text-center">ZAČÁTEK</th>
            <th className="w-1/2 text-center">ZAČÁTEK</th>
          </tr>
          <tr>
            <td className="w-1/2 text-center">
              {moment(event?.start_date).format("DD.MMMM, HH:mm")}
            </td>
            <td className="w-1/2 text-center">
              {moment(event?.end_date).format("DD.MMMM, HH:mm")}
            </td>
          </tr>
        </table>
        <table className="w-full text-lg">
          <tr>
            <th className="w-full text-left">CENA</th>
          </tr>
          <tr>
            <td>{event?.price} Kreditů</td>
          </tr>
        </table>
      </div>

      {/* Lower Holes */}
      <div className="relative ">
        <div className="mx-6 h-[2px] border border-dashed border-gray-300" />
      </div>

      {/* Serial Number */}
      <div className="flex w-full items-center justify-center p-6">
        {" "}
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
    </div>
  );
};

export default Ticket;
