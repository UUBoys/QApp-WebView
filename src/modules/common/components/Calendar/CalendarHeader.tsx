import {
  addDays,
  subDays,
  addWeeks,
  subWeeks,
  addMonths,
  subMonths,
  format,
  startOfWeek,
} from "date-fns";
import React from "react";

import { CalendarViewType } from "types/clendar-types";

const activeButtonClass = "bg-gray-800";
const inactiveButtonClass = "bg-gray-500";

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
            selectedCalendarViewType === "day"
              ? activeButtonClass
              : inactiveButtonClass
          }`}
          onClick={() => onSelectedCalendarViewTypeChange("day")}
        >
          Den
        </button>
        <button
          className={`mr-2 ${
            selectedCalendarViewType === "week"
              ? activeButtonClass
              : inactiveButtonClass
          }`}
          onClick={() => onSelectedCalendarViewTypeChange("week")}
        >
          Týden
        </button>
        <button
          className={`${
            selectedCalendarViewType === "month"
              ? activeButtonClass
              : inactiveButtonClass
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
  let formatString = "";
  let colSpan;

  if (selectedView === "day") {
    formatString = "EEEE, d. MMMM";
    colSpan = 1; // pouze jeden sloupec pro zobrazení dne
  } else if (selectedView === "week") {
    formatString = "EEEE, d. MMMM";
    colSpan = 7; // sedm sloupců pro zobrazení týdne
  } else {
    formatString = "EEEE";
    colSpan = 7; // sedm sloupců pro zobrazení týdne
  }

  // Generuje buňky pouze pokud je to týden, jinak jedna buňka s celým dnem
  const cells =
    selectedView === "week" || selectedView === "month"
      ? Array.from({ length: colSpan }).map((_, i) => (
          <div
            key={`dwa${i.toString()}`}
            className="bg-gray-100 p-2 text-center"
          >
            {format(
              addDays(startOfWeek(selectedDate, { weekStartsOn: 1 }), i),
              formatString
            )}
          </div>
        ))
      : [
          <div key="single" className="bg-gray-100 p-2 text-center">
            {format(selectedDate, formatString)}
          </div>,
        ];

  return (
    <div
      className={`grid ${
        selectedView === "week" || selectedView === "month"
          ? "grid-cols-7"
          : "grid-cols-1"
      } border-b border-gray-600 text-black`}
    >
      {cells}
    </div>
  );
};
