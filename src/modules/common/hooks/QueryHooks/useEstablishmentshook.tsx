import { useQuery } from "@apollo/client";
import { useState } from "react";

import { Query } from "@/generated/graphql";
import { GET_ESTABLISHMENTS } from "@/modules/GRAPHQL/queries/GetEstablishmentsQuery";
import { IClub } from "@/modules/utils/schemas/club";

interface UseClubsHook {
  clubs: IClub[];
  refetchClubs: () => void;
}

export const useClubs = (): UseClubsHook => {
  const [clubs, setClubs] = useState<IClub[]>([]);
  const { refetch } = useQuery<Query>(GET_ESTABLISHMENTS, {
    context: { shouldTrackStatus: true, withConfirmation: false },
    onCompleted(data) {
      if (
        !data.getEstablishments?.establishments ||
        data.getEstablishments.establishments?.length <= 0
      ) {
        return;
      }
      setClubs([...(data.getEstablishments.establishments as IClub[])]);
    },
  });

  return {
    clubs,
    refetchClubs: refetch,
  };
};
