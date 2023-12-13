/* eslint-disable import/no-unresolved */
/* eslint-disable tailwindcss/no-custom-classname */
import {
  InformationCircleIcon,
  MapPinIcon,
  PencilIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { UploadFileResponse } from "uploadthing/client";

import ClubControls from "@/modules/common/components/ClubControls";
import EventsList from "@/modules/common/components/EventList";
import CreateEstablishmentForm from "@/modules/common/forms/createEstablishmentForm";
import { useUpdateEstablishment } from "@/modules/common/hooks/MutationHooks/useUpdateEstablishmentMutation";
import { useEstablishmentById } from "@/modules/common/hooks/QueryHooks/useEstablishmentByIdHook";
import { useModalStore } from "@/modules/common/stores/modal-store";
import { useUserAdditionalDataStore } from "@/modules/common/stores/user-aditional-data-store";
import { uploadFiles } from "@/modules/lib/uploadThingHelpers";
import { IClub } from "@/modules/utils/schemas/club";
import { IEvent } from "@/modules/utils/schemas/event";

const Club: NextPage = () => {
  const { clubId } = useRouter().query;

  const { userOwnedClubs } = useUserAdditionalDataStore((set) => ({
    userOwnedClubs: set.userOwnedClubs,
  }));

  const { updatedEstablishment, updateEstablishmentAsync } =
    useUpdateEstablishment();

  const isUserOwner = userOwnedClubs?.some(
    (club) => club.id === (clubId as string) ?? ""
  );

  const { openModal, closeModal } = useModalStore((s) => ({
    openModal: s.openModal,
    closeModal: s.closeModal,
  }));

  const { establishment, setEstablishment, refetchEstablishment } =
    useEstablishmentById(clubId as string);

  useEffect(() => {
    if (!updatedEstablishment) return;
    setEstablishment(updatedEstablishment as IClub);
  }, [setEstablishment, updatedEstablishment]);

  if (!establishment) return null;

  const onEditEstablishmentOpenModal = () => {
    openModal({
      content: (
        <CreateEstablishmentForm
          onCancel={() => {
            closeModal();
          }}
          withCancel
          primaryButtonText="Upravit"
          establishment={establishment}
          onSubmit={async (data) => {
            try {
              let uploadFileProfileProfilePictureResponse: UploadFileResponse[] =
                [];

              let uploadFileProfileCoverPictureResponse: UploadFileResponse[] =
                [];
              if (typeof data.profilePicture !== "string") {
                uploadFileProfileProfilePictureResponse = await uploadFiles({
                  files: [(data.profilePicture as FileList)[0]],
                  endpoint: "imageUploader",
                });
              }

              if (typeof data.coverPicture !== "string") {
                uploadFileProfileCoverPictureResponse = await uploadFiles({
                  files: [(data.coverPicture as FileList)[0]],
                  endpoint: "imageUploader",
                });
              }
              await updateEstablishmentAsync({
                city: data.city,
                country: data.country,
                profileImage:
                  uploadFileProfileProfilePictureResponse[0]?.url ??
                  data.profilePicture,
                coverImage:
                  uploadFileProfileCoverPictureResponse[0]?.url ??
                  data.coverPicture,
                description: data.description as string,
                name: data.name,
                id: establishment.id,
                street: data.street,
              });

              await refetchEstablishment();
              closeModal();
            } catch (error: any) {
              console.error(error.message);
            }
          }}
        />
      ),
      backdrop: "!bg-black/50",

      onConfirm: (data) => updateEstablishmentAsync(data as IClub),
      isClosable: true,
    });
  };

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
              <div className=" text-3xl font-bold">{establishment.name}</div>

              {isUserOwner && (
                <button onClick={() => onEditEstablishmentOpenModal()}>
                  <PencilIcon className="ml-3 h-6 w-6 text-primary-500" />
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
                events={(establishment.events as unknown as IEvent[]) ?? []}
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
