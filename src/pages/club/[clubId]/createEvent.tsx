/* eslint-disable tailwindcss/no-custom-classname */
import { useMutation } from "@apollo/client";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useForm } from "react-hook-form";

import { Mutation } from "@/generated/graphql";
import Button from "@/modules/common/components/Button";
import Input from "@/modules/common/components/Input";
import { useApolloStatusStore } from "@/modules/common/stores/apollo-store";
import { CREATE_EVENT_MUTATION } from "@/modules/GRAPHQL/mutations/CreateEventMutation";
import { uuid } from "@/modules/helpers/general";
import { LoadingType } from "@/modules/helpers/loader-helpers";
import { uploadFiles } from "@/modules/lib/uploadThingHelpers";

type CreateEventInputs = {
  name: string;
  description: string;
  coverPicture: FileList;
  startDate: string;
  endDate: string;
  price: number;
  maximumCapacity: number;
};

const CreateEvent: NextPage = () => {
  const { register, handleSubmit, watch, reset } = useForm<CreateEventInputs>();
  const { clubId } = useRouter().query;
  const { push } = useRouter();
  const { addRequest, removeRequest, checkFinalStatus } = useApolloStatusStore(
    (set) => ({
      addRequest: set.addRequest,
      removeRequest: set.removeRequest,
      checkFinalStatus: set.checkFinalStatus,
    })
  );
  const [mutateCreateEvent] = useMutation<Mutation>(CREATE_EVENT_MUTATION, {
    context: { shouldTrackStatus: true, withConfirmation: true },
  });

  const watchedCoverPicture = watch("coverPicture");

  const onSubmit = async (data: CreateEventInputs) => {
    const id = uuid();
    addRequest({ id, type: LoadingType.WITHOUT_CONFIRM });

    try {
      const uploadFilesTest = await uploadFiles({
        files: [data.coverPicture[0], data.coverPicture[0]],
        endpoint: "imageUploader",
      });
      const variables = {
        description: data.description,
        endDate: new Date(data.endDate).toISOString(),
        establishmentId: parseFloat((clubId as string) ?? ""),
        maximumCapacity: parseFloat(data.maximumCapacity as unknown as string),
        name: data.name,
        price: parseFloat(data.price as any),
        startDate: new Date(data.startDate).toISOString(),
        image: uploadFilesTest[0].url,
      };

      const res = await mutateCreateEvent({
        variables,
      });

      if (!res.data || !res.data.createEvent)
        throw new Error("Event was not created");
      setTimeout(() => {
        if (res.data?.createEvent?.event?.id) {
          push(`/events/${res.data?.createEvent?.event?.id}`);
          reset();
        }
      }, 2000);
    } catch (error: any) {
      console.error(error.message);
    }
    removeRequest(id);
    checkFinalStatus();
  };

  const coverPicturePreview = useMemo(() => {
    if (watchedCoverPicture && watchedCoverPicture[0]) {
      return URL.createObjectURL(watchedCoverPicture[0]);
    }
    return null;
  }, [watchedCoverPicture]);

  return (
    <div className="flex min-h-[100vh] flex-col items-center gap-32 py-52 align-top">
      <p className="flex gap-8 text-6xl font-semibold text-gray-500">
        Vytvořit <div className="text-primary-500">akci</div>
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
          <div className="mt-16 flex w-full flex-col gap-10">
            <div className="mx-auto flex w-full items-center justify-center">
              <Input
                containerClasses="!w-3/5"
                className="bg-gray-100"
                placeholder="Název akce"
                type="text"
                hookFormRegisterReturn={{ ...register("name") }}
              />
            </div>
            <div className="mx-auto  flex w-full  items-center justify-center">
              <Input
                containerClasses="!w-3/5"
                className="bg-gray-100"
                placeholder="Popis akce"
                type="textarea"
                rows={5}
                hookFormRegisterReturn={{ ...register("description") }}
              />
            </div>
            <div className="mx-auto flex w-full  items-center justify-center">
              <Input
                containerClasses="!w-3/5"
                className="bg-gray-100"
                placeholder="Maximální kapacita"
                type="number"
                hookFormRegisterReturn={{ ...register("maximumCapacity") }}
              />
            </div>
            <div className="mx-auto flex w-full  items-center justify-center">
              <Input
                containerClasses="!w-3/5"
                className="bg-gray-100"
                placeholder="Cena"
                type="number"
                hookFormRegisterReturn={{ ...register("price") }}
              />
            </div>
            <div className="mx-auto flex w-3/5  flex-col  text-start ">
              <div className="flex w-full flex-row items-center justify-center gap-3">
                <Input
                  containerClasses="!w-3/5"
                  className="bg-gray-100"
                  placeholder="Začátek"
                  type="datetime-local"
                  hookFormRegisterReturn={{ ...register("startDate") }}
                />
                -
                <Input
                  containerClasses="!w-3/5"
                  className="bg-gray-100"
                  placeholder="Konec"
                  type="datetime-local"
                  hookFormRegisterReturn={{ ...register("endDate") }}
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

export default CreateEvent;
