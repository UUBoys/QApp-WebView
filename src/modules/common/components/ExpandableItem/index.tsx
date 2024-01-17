/* eslint-disable camelcase */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Transition } from "@headlessui/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

type ExpandableItemProps = {
  id: string;
  name: string;
  description?: string;
  start_date: string;
  end_date: string;
  price: number;
  establishment_id: string;
  maximumCapacity: number;
  image?: string;
  isOpen: boolean;
  onToggle: () => void;
};

const ExpandableItem: React.FC<ExpandableItemProps> = ({
  description,
  id,
  end_date,
  establishment_id,
  maximumCapacity,
  name,
  price,
  start_date,
  image,
  onToggle,
  isOpen,
}) => {
  console.log(establishment_id);
  return (
    <div className="relative mt-2 w-full overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-transparent hover:bg-gray-100 hover:shadow-2xl">
      {/* Background image that's visible only when expanded */}

      <Transition
        show={isOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <img
          src={image}
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
              src={image}
              alt="Event"
              className="mr-2 h-[80px] w-28 select-none object-cover  shadow-md"
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
                {name}
              </span>
              <span className={`${isOpen && "hidden"} text-gray-400`}>
                {new Date(start_date).toLocaleDateString()} -{" "}
                {new Date(end_date).toLocaleDateString()}
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
          <p className="mb-1 text-gray-50">
            {" "}
            {new Date(start_date).toLocaleDateString()} -{" "}
            {new Date(end_date).toLocaleDateString()}
          </p>
          <p className="mb-1 text-gray-50">
            Maximálně <b>{maximumCapacity}</b> lidí
          </p>
          <p className="text-gray-50">{description}</p>
        </div>
        <div className="relative z-10 my-6 flex w-full justify-end px-3">
          <Link
            href={`/events/${id}`}
            className="flex h-10 w-36 items-center justify-center rounded-xl bg-primary-400 px-2 py-1 text-center text-sm font-semibold text-white transition-all  hover:bg-primary-500 focus-visible:outline-primary-600"
          >
            Otevřít
          </Link>
        </div>
      </Transition>
    </div>
  );
};

export default ExpandableItem;
