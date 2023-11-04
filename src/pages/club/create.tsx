import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import { NextPage } from "next";
import { useForm } from "react-hook-form";

import Button from "@/modules/common/components/Button";
import Input from "@/modules/common/components/Input";

type CreateClubInputs = {
  name: string;
  description: string;
  profilePicture: string;
  coverPicture: string;
  avarageOpenTime: string;
  avarageCloseTime: string;
  address: string;
};

const CreateClub: NextPage = () => {
  const { register, handleSubmit, reset } = useForm<CreateClubInputs>();

  const onSubmit = (data: CreateClubInputs) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex min-h-[100vh] flex-col items-center gap-32 py-52 align-top">
      <p className="flex gap-8 text-6xl font-semibold">
        Vytvořit <div className="text-primary-500">klub</div>
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex  min-w-[60vw] flex-col items-start rounded-lg bg-white text-center  shadow-xl"
      >
        <div className="flex h-3/5 min-h-[30vh] w-full cursor-pointer flex-col items-center justify-center rounded-t-lg bg-gray-200 text-center text-2xl font-semibold text-gray-500">
          <ArrowUpTrayIcon className="h-20 w-20 text-gray-500" />
          Nahrát fotku
        </div>
        <div className="w-full pb-20">
          <div className="relative pl-10">
            <div className="absolute top-[-4rem] flex h-24 min-h-[8rem] w-24 min-w-[8rem] cursor-pointer flex-col items-center justify-center rounded-full bg-gray-300 text-sm font-semibold text-gray-500">
              <ArrowUpTrayIcon className="h-10 w-10 text-gray-500" />
              Nahrát fotku
            </div>
          </div>
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
                placeholder="Adresa klubu"
                type="text"
                hookFormRegisterReturn={{ ...register("address") }}
              />
            </div>
            <div className="mx-auto flex w-3/5  flex-col gap-3 text-start ">
              Běžná otevírací doba
              <div className="flex w-full flex-row items-center justify-center">
                <Input
                  containerClasses="mr-auto w-2/5"
                  className="bg-gray-100"
                  type="time"
                  hookFormRegisterReturn={{ ...register("avarageOpenTime") }}
                />
                -
                <Input
                  containerClasses="ml-auto w-2/5"
                  className="bg-gray-100"
                  type="time"
                  hookFormRegisterReturn={{ ...register("avarageCloseTime") }}
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
