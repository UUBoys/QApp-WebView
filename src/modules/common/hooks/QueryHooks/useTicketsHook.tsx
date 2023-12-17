import { useQuery } from "@apollo/client";
import { useState } from "react";

import { Query } from "@/generated/graphql";
import { GET_TICKETS } from "@/modules/GRAPHQL/queries/GetTicketsQuery";
import { ITicket } from "@/modules/utils/schemas/ticket";

interface IUseTicketsHook {
  tickets: ITicket[];
  refetchTickets: () => void;
}

export const useTickets = (): IUseTicketsHook => {
  const [tickets, setTickets] = useState<ITicket[]>([]);
  const { refetch } = useQuery<Query>(GET_TICKETS, {
    context: { shouldTrackStatus: true, withConfirmation: false },
    onCompleted(data) {
      if (!data.getTickets || data.getTickets?.length <= 0) {
        return;
      }
      // TODO: Fix this
      setTickets([...(data.getTickets as unknown as ITicket[])]);
    },
  });

  return {
    tickets,
    refetchTickets: refetch,
  };
};
