import { useQuery } from "@apollo/client";
import { useState } from "react";

import { Query } from "@/generated/graphql";
import { GET_TICKETS_FOR_USER } from "@/modules/GRAPHQL/queries/GetTicketsForUserQuery";
import { ITicket } from "@/modules/utils/schemas/ticket";

interface IUseTicketsForUserHook {
  tickets: ITicket[];
  refetchTickets: () => void;
}

export const useTicketsForUser = (): IUseTicketsForUserHook => {
  const [tickets, setTickets] = useState<ITicket[]>([]);

  const { refetch } = useQuery<Query>(GET_TICKETS_FOR_USER, {
    context: { shouldTrackStatus: true, withConfirmation: false },
    onCompleted(data) {
      if (!data.getTicketsForUser || data.getTicketsForUser?.length <= 0) {
        return;
      }
      const parsedTickets: ITicket[] = [];
      data.getTicketsForUser.forEach((ticket: ITicket | null) => {
        for (let i = 0; i < (ticket?.bought_quantity ?? 1); i++) {
          parsedTickets.push({
            ...(ticket as ITicket),
            bought_quantity: 1,
          });
        }
      });
      setTickets([...parsedTickets]);
    },
  });

  return {
    tickets,
    refetchTickets: refetch,
  };
};
