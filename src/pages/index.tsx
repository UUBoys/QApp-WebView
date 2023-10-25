/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { NextPage } from "next";
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
  const {t} = useTranslation()
  return (
    <div className=" flex h-[90vh] w-full flex-row flex-wrap space-x-3 space-y-3 bg-white text-black">
      homepage 
      <p className={"mt-[100px]"}>{t("pages.homepage.header")}</p>
    </div>
  );
};

export default Home;
