import {
  addDays,
  subDays,
  addWeeks,
  subWeeks,
  addMonths,
  subMonths,
  format,
} from "date-fns";
import React from "react";

import { CalendarViewType } from "types/clendar-types";

interface CalendarHeaderProps {
  selectedDate: Date;
  onSelectedDateChange: (newDate: Date) => void;
  selectedCalendarViewType: CalendarViewType;
  onSelectedCalendarViewTypeChange: (viewType: CalendarViewType) => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  selectedDate,
  onSelectedDateChange,
  selectedCalendarViewType,
  onSelectedCalendarViewTypeChange,
}) => {
  // Funkce pro navigaci v kalendáři (např. předchozí/následující den/týden/měsíc)
  const navigateDate = (direction: "prev" | "next") => {
    switch (selectedCalendarViewType) {
      case "day":
        onSelectedDateChange(
          direction === "prev"
            ? subDays(selectedDate, 1)
            : addDays(selectedDate, 1)
        );
        break;
      case "week":
        onSelectedDateChange(
          direction === "prev"
            ? subWeeks(selectedDate, 1)
            : addWeeks(selectedDate, 1)
        );
        break;
      case "month":
        onSelectedDateChange(
          direction === "prev"
            ? subMonths(selectedDate, 1)
            : addMonths(selectedDate, 1)
        );
        break;
      default:
        // Případně další logika pro jiné zobrazení
        break;
    }
  };
  return (
    <div className="mb-4 flex items-center justify-between">
      <div>
        <button
          className="mr-2 rounded bg-blue-500 p-2 text-white"
          onClick={() => navigateDate("prev")}
        >
          Předchozí
        </button>
        <button
          className="rounded bg-blue-500 p-2 text-white"
          onClick={() => navigateDate("next")}
        >
          Následující
        </button>
      </div>

      <div>
        <span className="text-black">
          Datum: {selectedDate.toLocaleDateString()}
        </span>
      </div>

      <div>
        <button
          className={`mr-2 ${
            selectedCalendarViewType === "day" ? "bg-gray-800" : "bg-gray-500"
          }`}
          onClick={() => onSelectedCalendarViewTypeChange("day")}
        >
          Den
        </button>
        <button
          className={`mr-2 ${
            selectedCalendarViewType === "week" ? "bg-gray-800" : "bg-gray-500"
          }`}
          onClick={() => onSelectedCalendarViewTypeChange("week")}
        >
          Týden
        </button>
        <button
          className={`${
            selectedCalendarViewType === "month" ? "bg-gray-800" : "bg-gray-500"
          }`}
          onClick={() => onSelectedCalendarViewTypeChange("month")}
        >
          Měsíc
        </button>
      </div>
    </div>
  );
};

interface CalendarColumnHeaderProps {
  selectedView: CalendarViewType;
  selectedDate: Date;
}

export const CalendarColumnHeader: React.FC<CalendarColumnHeaderProps> = ({
  selectedView,
  selectedDate,
}) => {
  const formatString = selectedView === "week" ? "EEEE, d. MMMM" : "EEEE";
  return (
    <div className="grid grid-cols-7 border-b border-gray-600 text-black">
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="bg-gray-100 p-2 text-center">
          {format(selectedDate, formatString)}
        </div>
      ))}
    </div>
  );
};
