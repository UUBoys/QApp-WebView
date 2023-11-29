import { useQuery } from "@apollo/client";
import { useState } from "react";

import { Query } from "@/generated/graphql";
import { GET_ESTABLISHMENT_BY_ID } from "@/modules/GRAPHQL/queries/GetEstablishmentQuery";
import { IClub } from "@/modules/utils/schemas/club";

interface UseEstablishmentByIdHook {
  establishment: IClub | null;
  refetchEstablishment: () => void;
}

export const useEstablishmentById = (
  clubId: string | number
): UseEstablishmentByIdHook => {
  const [establishment, setEstablishment] = useState<IClub | null>(null);

  const { refetch } = useQuery<Query>(GET_ESTABLISHMENT_BY_ID, {
    fetchPolicy: "cache-and-network",
    variables: {
      getEstablishmentByIdId:
        typeof clubId === "number" ? clubId : parseFloat(clubId),
    },
    context: { shouldTrackStatus: true },
    onCompleted(data) {
      if (
        !data.getEstablishmentById ||
        !data.getEstablishmentById?.establishments
      ) {
        return;
      }
      setEstablishment(data.getEstablishmentById?.establishments[0] as IClub);
    },
    skip: !clubId, // Skip the query if clubId is not provided
  });

  return {
    establishment,
    refetchEstablishment: refetch,
  };
};
