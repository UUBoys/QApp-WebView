import { useQuery } from "@apollo/client";
import { NextPage } from "next";
import { useState } from "react";

import { GetEstablishmentsResponse, Query } from "@/generated/graphql";
import ClubCard from "@/modules/common/components/ClubCard";
import { GET_ESTABLISHMENTS } from "@/modules/GRAPHQL/queries/GetEstablishmentsQuery";
import { IClub } from "@/modules/utils/schemas/club";

const Clubs: NextPage = () => {
  const [clubs, setClubs] = useState<IClub[]>([]);
  useQuery<Query>(GET_ESTABLISHMENTS, {
    context: { shouldTrackStatus: true, withConfirmation: false },
    onCompleted(data) {
      if (
        !data.getEstablishments?.establishments ||
        data.getEstablishments?.establishments?.length <= 0
      )
        return;
      if (data.getEstablishments !== null)
        setClubs([
          ...((data.getEstablishments as GetEstablishmentsResponse)
            .establishments as IClub[]),
        ]);
    },
  });

  return (
    <div className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-20 p-20 pt-52">
      <p className="flex gap-8 text-6xl font-semibold">
        <div className="text-primary-500">Kluby</div>
      </p>
      <div className="flex min-h-[600px] w-full flex-col justify-center gap-6 rounded-xl bg-white py-20 shadow-xl">
        {clubs.map((establishment) => (
          <ClubCard club={establishment} />
        ))}
      </div>
    </div>
  );
};

export default Clubs;
