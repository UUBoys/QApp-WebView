/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import { useRouter } from "next/router";

import { IClub } from "@/modules/utils/schemas/club";

interface ClubCardProps {
  club: IClub;
}

const ClubCard = ({
  club: {
    coverImage,
    description,
    name,
    id,
    profileImage,
    street,
    city,
    country,
  },
}: ClubCardProps) => {
  const { push } = useRouter();
  return (
    <div
      style={{
        backgroundImage: `url(${coverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
      onClick={() => {
        push(`/club/${id}`);
      }}
      className="mx-auto flex  w-2/3 cursor-pointer flex-row  flex-wrap rounded-lg bg-gray-600 p-3 antialiased shadow-lg transition-all hover:shadow-xl"
    >
      <div className="w-full md:w-1/3">
        <Image
          width={200}
          height={200}
          alt="image"
          className="rounded-full antialiased shadow-lg"
          src={profileImage}
        />
      </div>
      <div className="flex w-full flex-row flex-wrap px-3 md:w-2/3">
        <div className="relative w-full pt-3 text-right font-semibold text-gray-700 md:pt-0">
          <div className="text-2xl leading-tight text-white">{name}</div>
          <div className="cursor-pointer text-gray-300 hover:text-gray-400">
            <div className=" pb-1">Administrator</div>
            <div className=" pb-1">{street}</div>
            <div className="border-b border-dotted border-gray-500 pb-1">
              {city}, {country}
            </div>
          </div>
          <div className="bottom-0 right-0 cursor-pointer pt-3 text-sm text-gray-300 hover:text-gray-400 md:absolute md:pt-0">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;
