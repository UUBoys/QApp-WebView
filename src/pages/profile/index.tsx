import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import React from "react";

import Navigation from "@/modules/common/components/Navigation";
import { useClubs } from "@/modules/common/hooks/useEstablishmentshook";

const Profile = () => {
  const { data: session } = useSession();
  const { clubs } = useClubs();
  const { push } = useRouter();
  return (
    <div className="mt-[200px] flex items-center justify-center">
      <div className="flex min-h-[500px] w-[100%] min-w-[300px] max-w-[700px] flex-col gap-[20px] md:flex-row">
        <div className="flex flex-1 flex-col justify-between rounded-xl bg-white p-[20px] shadow-2xl">
          <div className="relative mx-auto mb-[20px] flex h-[200px] w-[200px]">
            <Image
              src="https://i.redd.it/geyjjtzxk7741.jpg"
              alt="Picture of the author"
              layout="fill"
              className="rounded-full shadow-2xl transition-all duration-300 ease-in-out hover:scale-[1.1]"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-[24px] font-bold text-gray-800">
              {session?.user?.username}
            </p>
            <p className="text-[18px] font-medium text-gray-700">
              {session?.user?.email}
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[20px]">
          <div className="h-full rounded-xl bg-white p-[20px] shadow-2xl">
            <p className="text-gray-700">My tickets</p>
          </div>
          <div className="h-full rounded-xl bg-white p-[20px] shadow-2xl">
            <p className="text-gray-700">Favorite clubs</p>
            <Navigation
              links={clubs.slice(0, 5).map((club) => {
                return {
                  label: club.name,
                  image: club.profileImage,
                  onClick: () => push(`/club/${club.id}`),
                };
              })}
              className="my-[20px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
