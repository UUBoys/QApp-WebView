import Image from "next/image";
import React from "react";

import phone from "../../../assets/images/phone_with_login.png";

const PhoneWithCircle = () => {
  return (
    <div className="flex h-full w-full items-center rounded-full  bg-primary md:h-[70%] md:w-[70%] lg:absolute lg:bottom-[-100px] lg:right-[-100px] lg:h-[700px] lg:w-[700px] xl:bottom-[-145px] xl:right-[-175px] xl:h-[900px] xl:w-[900px]">
      <Image
        className="absolute bottom-[16%] left-1/2 w-[40%] -translate-x-1/2 sm:w-[30%] md:bottom-[15%] md:w-[27%] lg:w-[40%] xl:w-[40%]"
        src={phone}
        alt="Picture of phone"
      />
    </div>
  );
};

export default PhoneWithCircle;
