import { useQuery } from "@apollo/client";
import { useState } from "react";

import { Query } from "@/generated/graphql";
import { GET_TICKETS_FOR_EVENT } from "@/modules/GRAPHQL/mutations/GetTicketsForEventMutation";
import { ITicket } from "@/modules/utils/schemas/ticket";

interface IUseTicketsForEventHook {
  tickets: ITicket[];
  refetchTickets: () => void;
}

export const useTicketsForEvent = (
  eventId: string | number
): IUseTicketsForEventHook => {
  const [tickets, setTickets] = useState<ITicket[]>([]);
  const { refetch } = useQuery<Query>(GET_TICKETS_FOR_EVENT, {
    context: { shouldTrackStatus: true, withConfirmation: false },
    variables: { getTicketsForEventId: eventId },
    onCompleted(data) {
      if (!data.getTickets || data.getTickets?.length <= 0) {
        return;
      }
      setTickets([...(data.getTickets as ITicket[])]);
    },
  });

  return {
    tickets,
    refetchTickets: refetch,
  };
};
