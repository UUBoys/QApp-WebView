import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Button from "@/modules/common/components/Button";
import clsx from "clsx";

type ExpandableItemProps = {
  title: string;
  date: string;
  address: string;
  content: string;
  imageSrc: string;
  price: string;
  isOpen: boolean;
  onToggle: () => void;
};

const ExpandableItem: React.FC<ExpandableItemProps> = ({
  title,
  date,
  address,
  content,
  imageSrc,
  price,
  onToggle,
  isOpen,
}) => {
  return (
    <div className="relative bg-gray-100 transition-all hover:bg-gray-200 rounded-xl mt-2 overflow-hidden">
      {/* Background image that's visible only when expanded */}
      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <img
          src={imageSrc}
          alt="Event Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10"></div>
      </Transition>

      <div
        className="relative z-20 flex flex-col h-1/2 sm:flex-row justify-between items-center p-2 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center">
          <span className={clsx(isOpen && " text-white", "font-medium")}>
            {title}
          </span>
          <span
            className={clsx(
              isOpen && "bg-primary-400 text-white",
              "ml-4 bg-gray-300 text-black px-2 py-1 rounded text-sm"
            )}
          >
            {price}
          </span>
        </div>

        {!isOpen && (
          <img
            src={imageSrc}
            alt="Event"
            className="w-28 h-16 select-none rounded shadow-md mr-2"
          />
        )}
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <KeyboardArrowUpIcon className={clsx(isOpen && "text-white")} />
        </span>
      </div>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div className="p-2 relative z-20">
          <p className="mb-1 text-gray-50">{date}</p>
          <p className="mb-1 text-gray-50">{address}</p>
          <p className="text-gray-50">{content}</p>
        </div>
        <div className="w-full flex justify-end px-3 p-2 relative z-10">
          <Button className="w-36 rounded-xl">Zakoupit</Button>
        </div>
      </Transition>
    </div>
  );
};

export default ExpandableItem;
