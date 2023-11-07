/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from "next/image";
import React, { useState } from "react";

const Ticket = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div>
      <div
        className=" flex max-w-sm items-center rounded-lg"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => setIsHover((prev) => !prev)}
      >
        {isHover && (
          <div className="relative h-[90px] w-[90px] rounded-l-lg bg-white">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/440px-QR_code_for_mobile_English_Wikipedia.svg.png"
              fill
              alt="ticket-image"
            />
          </div>
        )}
        <div className="flex w-full rounded-lg bg-white shadow-lg">
          <div className="relative h-[110px] w-[150px]">
            <Image
              src="https://picsum.photos/300/150"
              fill
              className="rounded-l-lg"
              alt="ticket-image"
            />
          </div>
          <div className="text-gray-70 px-4 py-2 ">
            <p className="text-[22px] text-gray-700">Event name</p>
            <p className="text-gray-500">{`Becher's bar`}</p>
            <p className="text-gray-500">17.10.2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
