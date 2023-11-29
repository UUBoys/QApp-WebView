import { NextPage } from "next";

import ClubCard from "@/modules/common/components/ClubCard";
import { useClubs } from "@/modules/common/hooks/useEstablishmentsHook";

const Clubs: NextPage = () => {
  const { clubs } = useClubs();

  return (
    <div className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-20 p-4 pt-52 md:p-20">
      <p className="flex gap-8 text-6xl font-semibold">
        <div className="text-primary-500">Kluby</div>
      </p>
      <div className="flex min-h-[600px] w-full flex-col justify-center gap-6 rounded-xl bg-white py-4 shadow-xl md:py-20">
        {clubs.map((establishment) => (
          <ClubCard club={establishment} />
        ))}
      </div>
    </div>
  );
};

export default Clubs;
