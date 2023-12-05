/* eslint-disable tailwindcss/no-custom-classname */
import {
  CheckIcon,
  InformationCircleIcon,
  MapPinIcon,
  PencilIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import ClubControls from "@/modules/common/components/ClubControls";
import EventsList, { Event } from "@/modules/common/components/EventList";
import Input from "@/modules/common/components/Input";
import { useEstablishmentById } from "@/modules/common/hooks/QueryHooks/useEstablishmentByIdHook";
import { useUserAdditionalDataStore } from "@/modules/common/stores/user-aditional-data-store";

const Club: NextPage = () => {
  const { clubId } = useRouter().query;
  const [elementEditID, setElementEditID] = useState<string>("");

  const { userOwnedClubs } = useUserAdditionalDataStore((set) => ({
    userOwnedClubs: set.userOwnedClubs,
  }));

  const isUserOwner = userOwnedClubs?.some(
    (club) => club.id === parseFloat((clubId as string) ?? "")
  );

  const { establishment } = useEstablishmentById(clubId as string);
  console.log(establishment);
  if (!establishment) return null;

  return (
    <div className="flex min-h-[100vh] flex-col items-start text-center shadow-xl">
      {isUserOwner && <ClubControls />}
      <div
        style={{ backgroundImage: `url(${establishment.coverImage})` }}
        className={clsx(
          "relative flex h-3/5 max-h-[400px] min-h-[50vh] w-full flex-col items-center justify-center bg-gray-200 bg-cover bg-center bg-no-repeat text-center text-2xl font-semibold text-gray-500"
        )}
      >
        {/* Overlay with black filter */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="min-h-[100vh] w-full pb-20">
        <div className="relative pl-20 text-start">
          <div
            style={{ backgroundImage: `url(${establishment.profileImage})` }}
            className={clsx(
              "absolute top-[-8rem] flex h-24 min-h-[16rem] w-24 min-w-[16rem] flex-col items-center  justify-center rounded-full border-[7px] border-[#f0f0f0] bg-gray-300 bg-contain text-sm font-semibold text-gray-500"
            )}
          />
          <div className="ml-[20rem] pt-[2rem]">
            {" "}
            <div className="flex items-center">
              {isUserOwner && elementEditID === "name" ? (
                <Input
                  ref={(input: any) =>
                    elementEditID === "name" && input?.focus()
                  }
                  inputProps={{
                    onBlur: () => {
                      // edit
                      // Mutate edit with updated data
                      // setElementEditID after 2 seconds because of loading and success animation
                      setElementEditID("");
                    },
                  }}
                  isSuccess={false}
                  isLoading={false}
                  defaultValue={establishment.name}
                />
              ) : (
                <div className=" text-3xl font-bold">{establishment.name}</div>
              )}
              {isUserOwner && (
                <button
                  onClick={() =>
                    elementEditID === ""
                      ? setElementEditID("name")
                      : setElementEditID("")
                  }
                >
                  {elementEditID === "name" ? (
                    <CheckIcon className="ml-3 h-7 w-7 text-primary-500" />
                  ) : (
                    <PencilIcon className="ml-3 h-6 w-6 text-primary-500" />
                  )}
                </button>
              )}
            </div>
            <div className="  font-bold text-gray-500">
              Počet nadcházejících akcí:{" "}
              <b className="text-primary-500">{establishment.events?.length}</b>
            </div>
          </div>
        </div>
        <div className="flex px-20">
          <div className="mt-32 flex min-h-[40vh] w-24 min-w-[16rem] flex-col items-center rounded-lg bg-white p-7 shadow-lg">
            <div className="w-full border-b pb-3 text-lg">Úvodní informace</div>
            <div className="mt-3 flex items-center justify-between gap-5 text-sm text-gray-500">
              <div className="w-1/8">
                {" "}
                <InformationCircleIcon className="h-8 w-8 text-primary-500" />
              </div>
              <div className="w-7/8"> {establishment.description}</div>
            </div>
            <div className="mt-3 flex items-center justify-between gap-5 text-left text-sm text-gray-500">
              <div className="w-1/8">
                {" "}
                <MapPinIcon className="h-8 w-8 text-primary-500" />
              </div>
              <div className="w-7/8">
                {" "}
                {establishment.street}, {establishment.city} <br />{" "}
                {establishment.country}
              </div>
            </div>
          </div>
          <div className="mt-32 flex w-full flex-col items-start gap-10 p-3 pt-0">
            {" "}
            <Link
              href={`/club/${establishment.id}/createEvent`}
              className="mx-auto flex min-h-[100px] w-full cursor-pointer flex-col flex-wrap items-center justify-center rounded-lg bg-primary-200  p-3 font-bold antialiased shadow-lg transition-all hover:bg-primary-400 hover:shadow-xl"
            >
              Vytvořit akci <PlusIcon className="h-8 w-8" />
            </Link>
            <div className="scroll-hidden  w-full overflow-y-auto rounded-lg bg-white p-7 py-[20px]">
              {" "}
              <div className="w-full border-b pb-3 text-lg">
                Nadcházející akce
              </div>
              <EventsList
                events={(establishment.events as unknown as Event[]) ?? []}
                className="!mx-0 !mt-[10px]  w-full rounded-2xl py-[0px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Club;
