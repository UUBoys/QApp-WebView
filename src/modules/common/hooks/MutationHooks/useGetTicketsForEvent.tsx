import { useMutation } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";

import { Mutation } from "@/generated/graphql";
import { GET_TICKETS_FOR_EVENT } from "@/modules/GRAPHQL/mutations/GetTicketsForEventMutation";
import { ITicket } from "@/modules/utils/schemas/ticket";

interface UseTicketsForEventHook {
  ticket: ITicket | null;
  refetchTickets: () => void;
}

export const useTicketsForEvent = (eventId: string): UseTicketsForEventHook => {
  const [ticket, setTicket] = useState<ITicket | null>(null);

  const [refetchTickets] = useMutation<Mutation>(GET_TICKETS_FOR_EVENT, {
    context: { shouldTrackStatus: true },
    onCompleted(data) {
      if (!data.getTicketsForEvent || data.getTicketsForEvent?.length <= 0) {
        return;
      }
      setTicket(data.getTicketsForEvent[0] as ITicket);
    },
  });

  const callMutation = useCallback(() => {
    if (!eventId) return;
    refetchTickets({
      variables: {
        eventId,
      },
    });
  }, [eventId, refetchTickets]);

  useEffect(() => {
    if (!eventId) return;
    callMutation();
  }, [callMutation, eventId]);

  return {
    ticket,
    refetchTickets: callMutation,
  };
};
