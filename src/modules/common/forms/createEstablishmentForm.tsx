/* eslint-disable tailwindcss/no-custom-classname */
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useMemo } from "react";
import { useForm } from "react-hook-form";

import Button from "@/modules/common/components/Button";
import Input from "@/modules/common/components/Input";
import { IClub } from "@/modules/utils/schemas/club";

type CreateClubInputs = {
  name: string;
  description: string;
  profilePicture: FileList | string;
  coverPicture: FileList | string;
  city: string;
  country: string;
  street: string;
};

interface ICreateEstablishmentFormProps {
  onSubmit: (data: CreateClubInputs) => void;
  onCancel: () => void;
  withCancel?: boolean;
  establishment?: IClub;
  primaryButtonText?: string;
}

const CreateEstablishmentForm: React.FC<ICreateEstablishmentFormProps> = ({
  establishment,
  withCancel,
  onCancel,
  onSubmit,
  primaryButtonText = "Vytvořit",
}) => {
  const { register, handleSubmit, watch } = useForm<CreateClubInputs>({
    defaultValues: {
      name: establishment?.name,
      description: establishment?.description,
      street: establishment?.street,
      city: establishment?.city,
      country: establishment?.country,
      coverPicture: establishment?.coverImage,
      profilePicture: establishment?.profileImage,
    },
  });

  const watchedProfilePicture = watch("profilePicture");
  const watchedCoverPicture = watch("coverPicture");

  const profilePicturePreview = useMemo(() => {
    if (typeof watchedProfilePicture === "string") return watchedProfilePicture;
    if (watchedProfilePicture && watchedProfilePicture[0]) {
      return URL.createObjectURL(watchedProfilePicture[0]);
    }
    return null;
  }, [watchedProfilePicture]);

  const coverPicturePreview = useMemo(() => {
    if (typeof watchedCoverPicture === "string") return watchedCoverPicture;
    if (watchedCoverPicture && watchedCoverPicture[0]) {
      return URL.createObjectURL(watchedCoverPicture[0]);
    }
    return null;
  }, [watchedCoverPicture]);

  return (
    <div className="flex w-full flex-col items-center gap-32 align-top">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex  w-full flex-col items-start rounded-lg bg-white text-center  shadow-xl"
      >
        <label
          htmlFor="club-cover-picture"
          style={{ backgroundImage: `url(${coverPicturePreview})` }}
          className={clsx(
            "relative flex h-3/5 min-h-[30vh] w-full cursor-pointer flex-col items-center justify-center rounded-t-lg bg-gray-200 bg-cover text-center text-2xl font-semibold text-gray-500"
          )}
        >
          {!coverPicturePreview && (
            <>
              {" "}
              <ArrowUpTrayIcon className="h-20 w-20 text-gray-500" />
              Nahrát fotku
            </>
          )}

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
              {!profilePicturePreview && (
                <>
                  <ArrowUpTrayIcon className="h-10 w-10 text-gray-500" />
                  Nahrát fotku
                </>
              )}
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

            <div className="flex w-full items-center justify-center gap-6">
              <div className=" text-end">
                <Button type="submit" size="lg" className="w-20">
                  {primaryButtonText}
                </Button>
              </div>
              {withCancel && (
                <div className=" text-end">
                  <Button
                    onClick={() => {
                      onCancel();
                    }}
                    size="lg"
                    className="w-20"
                    type="button"
                    color="gray"
                  >
                    Zrušit
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateEstablishmentForm;
