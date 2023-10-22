import React, { useState } from "react";
import ExpandableItem from "@/modules/common/components/ExpandableItem";

type Event = {
  title: string;
  date: string;
  address: string;
  content: string;
  imageSrc: string;
  price: string;
};

type EventsListProps = {
  events: Event[];
};

const EventsList: React.FC<EventsListProps> = ({ events }) => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    if (openedIndex !== index) {
      setOpenedIndex(index);
    } else {
      setOpenedIndex(null);
    }
  };

  return (
    <div className="max-w-full transition-all md:max-w-lg p-4 border bg-white mx-auto mt-10">
      {events.map((event, index) => (
        <ExpandableItem
          key={index}
          {...event}
          isOpen={openedIndex === index}
          onToggle={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default EventsList;
