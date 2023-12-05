import { useQuery } from "@apollo/client";
import { useState } from "react";

import { Query } from "@/generated/graphql";
import { GET_EVENT_BY_ID } from "@/modules/GRAPHQL/queries/GetEventByIdQuery";
import { IEvent } from "@/modules/utils/schemas/event";

interface UseEventByIdHook {
  event: IEvent | null;
  refetchEvent: () => void;
}

export const useEventById = (eventId: string | number): UseEventByIdHook => {
  const [event, setEvent] = useState<IEvent | null>(null);

  const { refetch } = useQuery<Query>(GET_EVENT_BY_ID, {
    fetchPolicy: "cache-and-network",
    context: { shouldTrackStatus: true },
    variables: { getEventByIdId: eventId },
    onCompleted(data) {
      if (!data.getEventById?.events) return;
      setEvent(data.getEventById.events[0] as unknown as IEvent);
    },
  });

  return {
    event,
    refetchEvent: refetch,
  };
};
