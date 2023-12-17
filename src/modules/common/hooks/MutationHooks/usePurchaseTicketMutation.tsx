import { FetchResult, useMutation } from "@apollo/client";

import { Mutation } from "@/generated/graphql";
import { PURCHASE_TICKET } from "@/modules/GRAPHQL/mutations/PurchaseTicketMutation";

interface UseTicketsForEventHook {
  purchaseTicketAsync: (
    eventId: string,
    ticketId: string
  ) => Promise<FetchResult<Mutation>>;
}

export const usePurchaseTicketMutation = (): UseTicketsForEventHook => {
  const [purchaseTicket] = useMutation<Mutation>(PURCHASE_TICKET, {
    context: { shouldTrackStatus: true, withConfirmation: true },
    onCompleted: (data) => {
      if (!data.purchaseTicket) return;
      console.log(data);
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
  return { purchaseTicketAsync };
};
