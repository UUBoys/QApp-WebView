/* eslint-disable sonarjs/no-duplicate-string */
import clsx from "clsx";
import { NextPage } from "next";

import EventsList, { Event } from "@/modules/common/components/EventList";

const mockEvetList: Event[] = [
  {
    address: "Kolbenova 123/456, Praha 9, 400 08",
    content:
      "Bechers bar akce číslo 1! Přijďte si užít skvělou atmosféru a výborné drinky!",
    title: "Bechers bar",
    date: "12. 5. 2021",
    imageSrc:
      "https://media.istockphoto.com/id/501387734/cs/fotografie/tan%C4%8D%C3%ADc%C3%AD-p%C5%99%C3%A1tel%C3%A9.jpg?s=612x612&w=0&k=20&c=WyInUbbqdQuoj8efMtDrnJbnghE5JyvkGqC09T5gMRY=",
    price: "150 Kč",
  },
  {
    address: "Kolbenova 123/456, Praha 9, 400 08",
    content:
      "Bechers bar akce číslo 1! Přijďte si užít skvělou atmosféru a výborné drinky!",
    title: "Bechers bar",
    date: "12. 5. 2021",
    imageSrc:
      "https://media.istockphoto.com/id/501387734/cs/fotografie/tan%C4%8D%C3%ADc%C3%AD-p%C5%99%C3%A1tel%C3%A9.jpg?s=612x612&w=0&k=20&c=WyInUbbqdQuoj8efMtDrnJbnghE5JyvkGqC09T5gMRY=",
    price: "150 Kč",
  },
  {
    address: "Kolbenova 123/456, Praha 9, 400 08",
    content:
      "Bechers bar akce číslo 1! Přijďte si užít skvělou atmosféru a výborné drinky!",
    title: "Bechers bar",
    date: "12. 5. 2021",
    imageSrc:
      "https://media.istockphoto.com/id/501387734/cs/fotografie/tan%C4%8D%C3%ADc%C3%AD-p%C5%99%C3%A1tel%C3%A9.jpg?s=612x612&w=0&k=20&c=WyInUbbqdQuoj8efMtDrnJbnghE5JyvkGqC09T5gMRY=",
    price: "150 Kč",
  },
  {
    address: "Kolbenova 123/456, Praha 9, 400 08",
    content:
      "Bechers bar akce číslo 1! Přijďte si užít skvělou atmosféru a výborné drinky!",
    title: "Bechers bar",
    date: "12. 5. 2021",
    imageSrc:
      "https://media.istockphoto.com/id/501387734/cs/fotografie/tan%C4%8D%C3%ADc%C3%AD-p%C5%99%C3%A1tel%C3%A9.jpg?s=612x612&w=0&k=20&c=WyInUbbqdQuoj8efMtDrnJbnghE5JyvkGqC09T5gMRY=",
    price: "150 Kč",
  },
];

const Club: NextPage = () => {
  return (
    <div className="flex min-h-[100vh] flex-col items-start text-center shadow-xl">
      <div
        className={clsx(
          `relative bg-[url('https://scontent.fprg5-1.fna.fbcdn.net/v/t39.30808-6/392821716_844709504019068_5102223634808799910_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8J21Vtdo1cEAX9khNcE&_nc_ht=scontent.fprg5-1.fna&oh=00_AfBnymWnB6DDo_MlwdxQGFq9UHsDR5aiCSyr5H7ZziGKSg&oe=654B197C')]`,
          "flex h-3/5 max-h-[400px] min-h-[50vh] w-full flex-col items-center justify-center bg-gray-200 bg-cover bg-center bg-no-repeat text-center text-2xl font-semibold text-gray-500"
        )}
      >
        {/* Overlay with black filter */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="min-h-[100vh] w-full pb-20">
        <div className="relative pl-20 text-start">
          <div
            className={clsx(
              `bg-[url('https://scontent.fprg5-1.fna.fbcdn.net/v/t39.30808-6/340171648_215123627795660_5974484347210171207_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=AIvdNMpcJ0AAX_AiWld&_nc_ht=scontent.fprg5-1.fna&oh=00_AfAi_kqqwR_y5_QM5EFXisX647ifX_NcC6Blui_5wNxVPA&oe=654B81A6')]`,
              "absolute top-[-8rem] flex h-24 min-h-[16rem] w-24 min-w-[16rem] flex-col items-center  justify-center rounded-full border-[7px] border-[#f0f0f0] bg-gray-300 bg-contain text-sm font-semibold text-gray-500"
            )}
          />
          <div className="ml-[20rem] pt-[2rem]">
            {" "}
            <div className=" text-3xl font-bold">Bechers Bar</div>
            <div className="  font-bold text-gray-500">
              Počet nadcházejících akcí: <b className="text-primary-500">12</b>
            </div>
          </div>
        </div>
        <div className="flex px-20">
          <div className="mt-32 flex min-h-[40vh] w-24 min-w-[16rem] flex-col items-center rounded-lg bg-white p-7 shadow-lg">
            <div className="w-full border-b pb-3 text-lg">Úvodní informace</div>
          </div>
          <div className="mt-32 flex w-full flex-col items-start p-3 pt-0">
            <div className="scroll-hidden  w-full overflow-y-auto rounded-lg bg-white p-7 py-[20px]">
              {" "}
              <div className="w-full border-b pb-3 text-lg">
                Nadcházející akce
              </div>
              <EventsList
                events={mockEvetList}
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
