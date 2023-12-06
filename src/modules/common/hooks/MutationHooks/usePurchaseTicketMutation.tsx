import { useMutation } from "@apollo/client";
import { useState } from "react";

import { Mutation } from "@/generated/graphql";
import { PURCHASE_TICKET } from "@/modules/GRAPHQL/mutations/PurchaseTicketMutation";
import { ITicket } from "@/modules/utils/schemas/ticket";

interface UseTicketsForEventHook {
  purchasedTicket: ITicket | null;
  purchaseTicketAsync: (ticketId: number) => void;
}

export const usePurchaseTicketMutation = (): UseTicketsForEventHook => {
  const [purchasedTicket, setPurchasedTicket] = useState<ITicket | null>(null);
  const [purchaseTicket] = useMutation<Mutation>(PURCHASE_TICKET, {
    context: { shouldTrackStatus: true },
    onCompleted: (data) => {
      if (!data.purchaseTicket) return;
      setPurchasedTicket(data.purchaseTicket);
    },
  });

  const purchaseTicketAsync = async (ticketId: number) => {
    return purchaseTicket({
      variables: {
        ticketId,
      },
    });
  };
  return { purchasedTicket, purchaseTicketAsync };
};
