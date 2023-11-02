/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";

import ExpandableItem from "@/modules/common/components/ExpandableItem";
import clsx from "clsx";

export type Event = {
  title: string;
  date: string;
  address: string;
  content: string;
  imageSrc: string;
  price: string;
};

type EventsListProps = {
  events: Event[];
  className?: string;
};

const EventsList: React.FC<EventsListProps> = ({ events, className }) => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    if (openedIndex !== index) {
      setOpenedIndex(index);
    } else {
      setOpenedIndex(null);
    }
  };

  return (
    <div
      className={clsx(
        "mx-auto mt-10 max-w-full  p-4 transition-all md:max-w-lg flex flex-col gap-[20px]",
        className
      )}
    >
      {events.map((event, index) => (
        <ExpandableItem
          key={`klic${index}`}
          {...event}
          isOpen={openedIndex === index}
          onToggle={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default EventsList;
