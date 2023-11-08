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
        backgroundImage: `url(${
          coverImage !== ""
            ? coverImage
            : "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/412dcb7c-3831-4329-b94a-8551655acb08/d4zylmk-5e12b1c0-e2cb-434c-bc0c-a57c487b3a63.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxMmRjYjdjLTM4MzEtNDMyOS1iOTRhLTg1NTE2NTVhY2IwOFwvZDR6eWxtay01ZTEyYjFjMC1lMmNiLTQzNGMtYmMwYy1hNTdjNDg3YjNhNjMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bNC4E9m461k7pEDmSmEij8MVdfpnyeptIh3xvl1xECM" ??
              "https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/412dcb7c-3831-4329-b94a-8551655acb08/d4zylmk-5e12b1c0-e2cb-434c-bc0c-a57c487b3a63.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQxMmRjYjdjLTM4MzEtNDMyOS1iOTRhLTg1NTE2NTVhY2IwOFwvZDR6eWxtay01ZTEyYjFjMC1lMmNiLTQzNGMtYmMwYy1hNTdjNDg3YjNhNjMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bNC4E9m461k7pEDmSmEij8MVdfpnyeptIh3xvl1xECM"
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
      onClick={() => {
        push(`/club/${id}`);
      }}
      className="mx-auto flex  w-2/3 cursor-pointer flex-row  flex-wrap rounded-lg bg-gray-700 p-3 antialiased shadow-lg transition-all hover:shadow-xl"
    >
      <div className="w-full md:w-1/3">
        <Image
          width={200}
          height={200}
          alt="image"
          className="rounded-full antialiased shadow-lg"
          src={
            profileImage !== ""
              ? profileImage
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" ??
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          }
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
