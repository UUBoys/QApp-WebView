import { FetchResult, useMutation } from "@apollo/client";
import { useState } from "react";

import { Mutation } from "@/generated/graphql";
import { PURCHASE_TICKET } from "@/modules/GRAPHQL/mutations/PurchaseTicketMutation";
import { ITicket } from "@/modules/utils/schemas/ticket";

interface UseTicketsForEventHook {
  purchasedTicket: ITicket | null;
  purchaseTicketAsync: (
    eventId: string,
    ticketId: string
  ) => Promise<FetchResult<Mutation>>;
}

export const usePurchaseTicketMutation = (): UseTicketsForEventHook => {
  const [purchasedTicket, setPurchasedTicket] = useState<ITicket | null>(null);
  const [purchaseTicket] = useMutation<Mutation>(PURCHASE_TICKET, {
    context: { shouldTrackStatus: true, withConfirmation: true },
    onCompleted: (data) => {
      if (!data.purchaseTicket) return;
      setPurchasedTicket(data.purchaseTicket);
    },
  });

  const purchaseTicketAsync = async (eventId: string, ticketId: string) => {
    return purchaseTicket({
      variables: {
        eventId,
        ticketId,
      },
    });
  };
  return { purchasedTicket, purchaseTicketAsync };
};
