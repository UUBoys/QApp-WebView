/* eslint-disable tailwindcss/no-custom-classname */
import { useMutation } from "@apollo/client";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useForm } from "react-hook-form";

import { Mutation, MutationCreateEstablishmentArgs } from "@/generated/graphql";
import Button from "@/modules/common/components/Button";
import Input from "@/modules/common/components/Input";
import { useApolloStatusStore } from "@/modules/common/stores/apollo-store";
import { CREATE_ESTABLISHMENT_MUTATION } from "@/modules/GRAPHQL/mutations/CreateEstablishmentMutation";
import { uuid } from "@/modules/helpers/general";
import { LoadingType } from "@/modules/helpers/loader-helpers";
import { uploadFiles } from "@/modules/lib/uploadThingHelpers";

type CreateClubInputs = {
  name: string;
  description: string;
  profilePicture: FileList;
  coverPicture: FileList;
  city: string;
  country: string;
  street: string;
};

const CreateClub: NextPage = () => {
  const { register, handleSubmit, watch } = useForm<CreateClubInputs>();
  const { push } = useRouter();

  const { addRequest, removeRequest, checkFinalStatus } = useApolloStatusStore(
    (set) => ({
      addRequest: set.addRequest,
      removeRequest: set.removeRequest,
      checkFinalStatus: set.checkFinalStatus,
    })
  );
  const [mutateCreateEstablishment] = useMutation<Mutation>(
    CREATE_ESTABLISHMENT_MUTATION,
    {
      context: { shouldTrackStatus: true, withConfirmation: true },
    }
  );

  const watchedProfilePicture = watch("profilePicture");
  const watchedCoverPicture = watch("coverPicture");

  const onSubmit = async (data: CreateClubInputs) => {
    const id = uuid();
    addRequest({ id, type: LoadingType.WITHOUT_CONFIRM });
    try {
      const uploadFilesTest = await uploadFiles({
        files: [data.profilePicture[0], data.coverPicture[0]],
        endpoint: "imageUploader",
      });
      const variables: MutationCreateEstablishmentArgs = {
        city: data.city,
        country: data.country,
        description: data.description,
        name: data.name,
        street: data.street,
        profileImage: uploadFilesTest[0].url,
        coverImage: uploadFilesTest[1].url,
      };

      const res = await mutateCreateEstablishment({
        variables,
      });

      setTimeout(() => {
        if (!res.data || !res.data.createEstablishment) return;
        push(`/club/${res.data.createEstablishment.establishment?.id}`);
      }, 2000);
    } catch (error: any) {
      console.error(error.message);
    }
    removeRequest(id);
    checkFinalStatus();
  };

  const profilePicturePreview = useMemo(() => {
    if (watchedProfilePicture && watchedProfilePicture[0]) {
      return URL.createObjectURL(watchedProfilePicture[0]);
    }
    return null;
  }, [watchedProfilePicture]);

  const coverPicturePreview = useMemo(() => {
    if (watchedCoverPicture && watchedCoverPicture[0]) {
      return URL.createObjectURL(watchedCoverPicture[0]);
    }
    return null;
  }, [watchedCoverPicture]);

  return (
    <div className="flex min-h-[100vh] flex-col items-center gap-32 py-52 align-top">
      <p className="flex gap-8 text-6xl font-semibold text-gray-500">
        Vytvořit <div className="text-primary-500">klub</div>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex  min-w-[60vw] flex-col items-start rounded-lg bg-white text-center  shadow-xl"
      >
        <label
          htmlFor="club-cover-picture"
          style={{ backgroundImage: `url(${coverPicturePreview})` }}
          className={clsx(
            "relative flex h-3/5 min-h-[30vh] w-full cursor-pointer flex-col items-center justify-center rounded-t-lg bg-gray-200 bg-cover text-center text-2xl font-semibold text-gray-500"
          )}
        >
          <ArrowUpTrayIcon className="h-20 w-20 text-gray-500" />
          Nahrát fotku
          <input
            className="hidden"
            id="club-cover-picture"
            type="file"
            multiple={false}
            {...register("coverPicture")}
            hidden
          />
          {coverPicturePreview && (
            <div className="absolute inset-0 bg-black/40" />
          )}
        </label>
        <div className="ml-[10px] w-full pb-20">
          <label htmlFor="club-profile-picture" className="relative pl-10">
            <div
              style={{ backgroundImage: `url(${profilePicturePreview})` }}
              className="absolute top-[-4rem] flex h-24 min-h-[8rem] w-24 min-w-[8rem] cursor-pointer flex-col items-center justify-center rounded-full border-[4px] border-white bg-gray-300 bg-contain text-sm font-semibold text-gray-500"
            >
              <ArrowUpTrayIcon className="h-10 w-10 text-gray-500" />
              Nahrát fotku
            </div>
            <input
              className="hidden"
              id="club-profile-picture"
              type="file"
              multiple={false}
              {...register("profilePicture")}
              hidden
            />
          </label>
          <div className="mt-16 flex w-full flex-col gap-10">
            <div className="mx-auto flex w-full items-center justify-center">
              <Input
                containerClasses="!w-3/5"
                className="bg-gray-100"
                placeholder="Název klubu"
                type="text"
                hookFormRegisterReturn={{ ...register("name") }}
              />
            </div>
            <div className="mx-auto  flex w-full  items-center justify-center">
              <Input
                containerClasses="!w-3/5"
                className="bg-gray-100"
                placeholder="Popis klubu"
                type="textarea"
                rows={5}
                hookFormRegisterReturn={{ ...register("description") }}
              />
            </div>
            <div className="mx-auto flex w-full  items-center justify-center">
              <Input
                containerClasses="!w-3/5"
                className="bg-gray-100"
                placeholder="Ulice"
                type="text"
                hookFormRegisterReturn={{ ...register("street") }}
              />
            </div>
            <div className="mx-auto flex w-3/5  flex-col  text-start ">
              <div className="flex w-full flex-row items-center justify-center gap-3">
                <Input
                  containerClasses="!w-3/5"
                  className="bg-gray-100"
                  placeholder="Město"
                  type="text"
                  hookFormRegisterReturn={{ ...register("city") }}
                />

                <Input
                  containerClasses="!w-3/5"
                  className="bg-gray-100"
                  placeholder="Země"
                  type="text"
                  hookFormRegisterReturn={{ ...register("country") }}
                />
              </div>
            </div>

            <div className="mx-auto w-3/5 text-end">
              <Button type="submit" className="ml-auto ">
                Vytvořit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateClub;
