import { useQuery } from "@apollo/client";
import { useState } from "react";

import { Query } from "@/generated/graphql";
import { GET_EVENTS } from "@/modules/GRAPHQL/queries/GetEventsQuery";
import { IEvent } from "@/modules/utils/schemas/event";

interface UseEventsHook {
  events: IEvent[];
  refetchEvents: () => void;
}

export const useEvents = (): UseEventsHook => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const { refetch } = useQuery<Query>(GET_EVENTS, {
    fetchPolicy: "cache-and-network",
    context: { shouldTrackStatus: true },
    onCompleted(data) {
      if (!data.getEvents?.events || data.getEvents.events?.length <= 0) {
        return;
      }
      setEvents([...(data.getEvents.events as IEvent[])]);
    },
  });

  return {
    events,
    refetchEvents: refetch,
  };
};
