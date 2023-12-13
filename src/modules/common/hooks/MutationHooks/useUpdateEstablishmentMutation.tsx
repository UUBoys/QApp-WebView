import { FetchResult, useMutation } from "@apollo/client";
import { useState } from "react";

import { Mutation } from "@/generated/graphql";
import { UPDATE_ESTABLISHMENT_MUTATION } from "@/modules/GRAPHQL/mutations/UpdateEstablishmentMutation";
import { IClub } from "@/modules/utils/schemas/club";

interface IUseUpdateEstablishmentHook {
  updatedEstablishment: IClub | null;
  updateEstablishmentAsync: (
    establishment: IClub
  ) => Promise<FetchResult<Mutation>>;
}

export const useUpdateEstablishment = (): IUseUpdateEstablishmentHook => {
  const [updatedEstablishment, setUpdatedEstablishment] =
    useState<IClub | null>(null);
  const [updateEstablishment] = useMutation<Mutation>(
    UPDATE_ESTABLISHMENT_MUTATION,
    {
      context: { shouldTrackStatus: true, withConfirmation: true },
      onCompleted: (data) => {
        if (!data.updateEstablishment) return;
        setUpdatedEstablishment(
          data.updateEstablishment.establishment as IClub
        );
      },
    }
  );

  const updateEstablishmentAsync = async (establishment: IClub) => {
    const variables = {
      establishmentId: establishment.id,
      city: establishment.city,
      country: establishment.country,
      description: establishment.description,
      name: establishment.name,
      street: establishment.street,
      profileImage: establishment.profileImage,
      coverImage: establishment.coverImage,
    };
    return updateEstablishment({
      variables,
    });
  };
  return { updatedEstablishment, updateEstablishmentAsync };
};
