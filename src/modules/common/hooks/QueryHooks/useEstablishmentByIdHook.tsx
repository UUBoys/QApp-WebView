import {
  ApolloQueryResult,
  OperationVariables,
  useQuery,
} from "@apollo/client";
import { Dispatch, SetStateAction, useState } from "react";

import { Query } from "@/generated/graphql";
import { GET_ESTABLISHMENT_BY_ID } from "@/modules/GRAPHQL/queries/GetEstablishmentQuery";
import { IClub } from "@/modules/utils/schemas/club";

interface UseEstablishmentByIdHook {
  establishment: IClub | null;
  refetchEstablishment: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Query>>;
  setEstablishment: Dispatch<SetStateAction<IClub | null>>;
}

export const useEstablishmentById = (
  clubId?: string
): UseEstablishmentByIdHook => {
  const [establishment, setEstablishment] = useState<IClub | null>(null);

  const { refetch } = useQuery<Query>(GET_ESTABLISHMENT_BY_ID, {
    fetchPolicy: "cache-and-network",
    variables: {
      getEstablishmentByIdId: clubId,
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
    skip: !clubId,
  });

  return {
    establishment,
    refetchEstablishment: refetch,
    setEstablishment,
  };
};
