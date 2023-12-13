/* eslint-disable react/no-array-index-key */
import clsx from "clsx";
import React, { useState } from "react";

import ExpandableItem from "@/modules/common/components/ExpandableItem";
import { IEvent } from "@/modules/utils/schemas/event";

type EventsListProps = {
  events: IEvent[];
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
        "mx-auto mt-10 flex w-full  max-w-full flex-col gap-[20px] p-4 transition-all ",
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
