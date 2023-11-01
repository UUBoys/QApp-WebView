/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { NextPage } from "next";

import PhoneWithCircle from "@/modules/pages/Home/PhoneWithCircle";

const Home: NextPage = () => {
  return (
    <div className="relative mt-36 flex h-[100vh] w-full flex-col items-center gap-[15%] overflow-hidden p-10 px-12 lg:mt-0 lg:flex-row lg:justify-between lg:px-28">
      <div className="flex flex-col justify-center space-y-8 lg:w-[40%]">
        <h1 className="text-4xl font-bold text-gray-800">Akce na dosah ruky</h1>
        <p className="text-3xl font-semibold text-gray-500">
          Nepropásněte žádné akce ve vašem okolí s naší aplikací QApp
        </p>
        <button className="rounded-full bg-primary-500 px-6 py-3 text-gray-800 hover:bg-primary-600">
          Začněte teď
        </button>
      </div>
      <PhoneWithCircle />
    </div>
  );
};

export default Home;
