/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Transition } from "@headlessui/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
    <div className="relative mt-2 w-full overflow-hidden rounded-xl border border-gray-200 transition-all hover:border-transparent hover:bg-gray-100 hover:shadow-2xl">
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
        className={`relative z-20 flex h-1/2 cursor-pointer flex-col items-center justify-between sm:flex-row ${
          isOpen && "py-5"
        }`}
        onClick={onToggle}
      >
        <div className={`flex flex-1 ${isOpen && "pl-2"}`}>
          {!isOpen && (
            <img
              src={imageSrc}
              alt="Event"
              className="mr-2 h-[80px] w-28 select-none  shadow-md"
            />
          )}
          <div className="flex flex-1 items-center justify-between px-2">
            <div className="flex flex-col">
              <span
                className={clsx(
                  isOpen ? " text-white" : "text-gray-700",
                  "font-medium"
                )}
              >
                {title}
              </span>
              <span className={`${isOpen && "hidden"} text-gray-400`}>
                {date}
              </span>
            </div>
            <span
              className={clsx(
                isOpen && "bg-primary-400 text-white",
                "ml-4 rounded bg-primary px-2 py-1 text-sm text-white"
              )}
            >
              {price}
            </span>
          </div>
        </div>

        <span
          className={`transition-transform duration-300${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? (
            <KeyboardArrowUpIcon className={clsx("mr-4 text-white")} />
          ) : (
            <KeyboardArrowDownIcon className={clsx("mr-4 text-black")} />
          )}
        </span>
      </div>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        className="px-3 py-2"
      >
        <div className="relative z-20 p-2">
          <p className="mb-1 text-gray-50">{date}</p>
          <p className="mb-1 text-gray-50">{address}</p>
          <p className="text-gray-50">{content}</p>
        </div>
        <div className="relative z-10 my-6 flex w-full justify-end px-3">
          <Button className="w-36 rounded-xl">Zakoupit</Button>
        </div>
      </Transition>
    </div>
  );
};

export default ExpandableItem;
