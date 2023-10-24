/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Transition } from "@headlessui/react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import clsx from "clsx";
import React from "react";

import Button from "@/modules/common/components/Button";

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
    <div className="relative mt-2 overflow-hidden rounded-xl bg-gray-100 transition-all hover:bg-gray-200">
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
          className="absolute left-0 top-0 z-0 h-full w-full object-cover"
        />
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black bg-opacity-60" />
      </Transition>

      <div
        className="relative z-20 flex h-1/2 cursor-pointer flex-col items-center justify-between p-2 sm:flex-row"
        onClick={onToggle}
      >
        <div className="flex items-center">
          <span className={clsx(isOpen && " text-white", "font-medium")}>
            {title}
          </span>
          <span
            className={clsx(
              isOpen && "bg-primary-400 text-white",
              "ml-4 rounded bg-gray-300 px-2 py-1 text-sm text-black"
            )}
          >
            {price}
          </span>
        </div>

        {!isOpen && (
          <img
            src={imageSrc}
            alt="Event"
            className="mr-2 h-16 w-28 select-none rounded shadow-md"
          />
        )}
        <span
          className={`transition-transform duration-300${
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
        <div className="relative z-20 p-2">
          <p className="mb-1 text-gray-50">{date}</p>
          <p className="mb-1 text-gray-50">{address}</p>
          <p className="text-gray-50">{content}</p>
        </div>
        <div className="relative z-10 flex w-full justify-end p-2 px-3">
          <Button className="w-36 rounded-xl">Zakoupit</Button>
        </div>
      </Transition>
    </div>
  );
};

export default ExpandableItem;
