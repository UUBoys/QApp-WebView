import React, { useState } from "react";
import Image from "next/image";

const Ticket = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div>
      <div
        className=" rounded-lg max-w-sm flex items-center"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => setIsHover((prev) => !prev)}
      >
        {isHover && (
          <div className={"w-[90px] h-[90px] relative bg-white rounded-l-lg"}>
            <Image
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/440px-QR_code_for_mobile_English_Wikipedia.svg.png"
              }
              fill
              alt={"ticket-image"}
            />
          </div>
        )}
        <div className={"flex w-full bg-white shadow-lg rounded-lg"}>
          <div className={"w-[150px] h-[110px] relative"}>
            <Image
              src={"https://picsum.photos/300/150"}
              fill
              className={"rounded-l-lg"}
              alt={"ticket-image"}
            />
          </div>
          <div className={"text-gray-70 px-4 py-2 "}>
            <p className={"text-gray-700 text-[22px]"}>Event name</p>
            <p className={"text-gray-500"}>Becher's bar</p>
            <p className={"text-gray-500"}>17.10.2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
