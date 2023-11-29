/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import NearMeIcon from "@mui/icons-material/NearMe";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

import PhoneWithCircle from "@/modules/pages/Home/PhoneWithCircle";

const Home: NextPage = () => {
  const { t } = useTranslation();

  const infoBoxes = [
    {
      title: t("pages.homepage.blocks.allInOne.title"),
      description: t("pages.homepage.blocks.allInOne.description"),
      icon: <PhoneIphoneIcon sx={{ fontSize: "50px" }} />,
    },
    {
      title: t("pages.homepage.blocks.noQueue.title"),
      description: t("pages.homepage.blocks.noQueue.description"),
      icon: <LocalActivityIcon sx={{ fontSize: "50px" }} />,
    },
    {
      title: t("pages.homepage.blocks.nearToYou.title"),
      description: t("pages.homepage.blocks.nearToYou.description"),
      icon: <NearMeIcon sx={{ fontSize: "50px" }} />,
    },
  ];

  const renderBlock = (
    title: string,
    description: string,
    icon: React.ReactNode
  ) => {
    return (
      <div className="flex h-[300px] min-w-[250px] max-w-[300px] flex-col items-center justify-center gap-[20px] rounded-[9px] border-t-4 border-t-primary bg-white px-[20px] py-[30px] shadow-2xl transition-all hover:scale-[1.1]">
        <div className="text-primary">{icon}</div>
        <p className="text-[24px] font-bold text-gray-800">{title}</p>
        <p className="text-[18px] font-medium text-gray-700">{description}</p>
      </div>
    );
  };

  return (
    <div className="relative mt-36 flex min-h-[100vh] w-full flex-col items-center gap-[15%] overflow-hidden p-10 px-12 lg:mt-0 lg:flex-row lg:justify-between lg:px-28">
      <div className="flex flex-col justify-center space-y-8 lg:w-[40%]">
        <h1 className="text-4xl font-bold text-gray-800">
          {t("pages.homepage.header")}
        </h1>
        <p className="text-3xl font-semibold text-gray-500">
          {t("pages.homepage.description")}
        </p>
        <div className="flex flex-col gap-[20px] md:flex-row">
          <Link
            href="/auth/signin"
            className="w-fit rounded-full bg-primary-500 px-6 py-3 font-semibold  text-white hover:bg-primary-600"
          >
            {t("pages.homepage.button")}
          </Link>
          <Link
            href="/club/create"
            className="w-fit rounded-full bg-primary-500 px-6 py-3 font-semibold text-white hover:bg-primary-600"
          >
            {t("pages.homepage.registerClub")}
          </Link>
        </div>
      </div>

      <div className="relative bottom-0 left-0 z-[10] mt-[100px] flex  w-full flex-col items-center justify-center gap-[20px] md:absolute md:mt-0 md:flex-row">
        {infoBoxes.map((box, index) => (
          <React.Fragment key={index}>
            {renderBlock(box.title, box.description, box.icon)}
          </React.Fragment>
        ))}
      </div>

      <PhoneWithCircle />
    </div>
  );
};

export default Home;
