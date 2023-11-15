import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import React, { useState } from "react";

import { CalendarColumnHeader, CalendarHeader } from "./CalendarHeader";

import {
  CalendarContent,
  CalendarViewConfig,
  CalendarViewType,
} from "types/clendar-types";

interface CalendarProps {
  // Base configuration for the calendar.
  /** Selected date in the calendar. */
  date?: Date;
  /** Data structure representing the content of the calendar. */
  content?: CalendarContent;
  /** Configuration object for calendar view */
  viewConfig?: CalendarViewConfig;

  // Callbacks.
  /** Callback when the selected date changes. */
  onSelectedDateChange?: (newSelectedDate: Date) => void;
  /** Callback when the calendar view configuration changes. */
  onViewConfigChange?: (viewConfig: CalendarViewConfig) => void;
}

interface CalendarDayGridProps {
  data?: CalendarContent;
  selectedView: CalendarViewType;
  selectedDate: Date;
}

const CalendarDayGrid: React.FC<CalendarDayGridProps> = ({
  data,
  selectedView,
  selectedDate,
}) => {
  const renderDays = () => {
    let days = [];
    let interval;

    switch (selectedView) {
      case "day":
        days = [selectedDate];
        break;
      case "week":
        interval = {
          start: startOfWeek(selectedDate, { weekStartsOn: 1 }),
          end: endOfWeek(selectedDate, { weekStartsOn: 1 }),
        };
        days = eachDayOfInterval(interval);
        break;
      case "month":
        interval = {
          start: startOfMonth(selectedDate),
          end: endOfMonth(selectedDate),
        };
        days = eachDayOfInterval(interval);
        break;
      default:
      // Další případné zobrazení
    }

    return days.map((day) => {
      const dayContent = data?.find((content) =>
        isSameDay(day, content.rowContent.startDate)
      );

      return (
        <div
          key={day.toISOString()}
          className="border border-gray-200 p-4 text-black"
        >
          {selectedView === "month" && <div>{format(day, "d.")}</div>}
          <div>
            {dayContent ? (
              <div>{dayContent.rowContent.content}</div>
            ) : (
              <div>No Events</div>
            )}
          </div>
        </div>
      );
    });
  };

  return <div className="grid grid-cols-7">{renderDays()}</div>;
};

/**
 * Default component for displaying a calendar.
 */
export const Calendar: React.FC<CalendarProps> = ({
  date = new Date(),
  content,
  viewConfig = { viewType: "week" },
  onSelectedDateChange,
  onViewConfigChange,
}) => {
  const [selectedDate, setSelectedDate] = useState(date);
  const [viewType, setViewType] = useState<CalendarViewType>(
    viewConfig.viewType
  );

  const handleDateChange = (newDate: Date) => {
    setSelectedDate(newDate);
    onSelectedDateChange?.(newDate);
  };

  const handleViewTypeChange = (newViewType: CalendarViewType) => {
    setViewType(newViewType);
    onViewConfigChange?.({ ...viewConfig, viewType: newViewType });
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <CalendarHeader
        selectedDate={selectedDate}
        onSelectedDateChange={handleDateChange}
        selectedCalendarViewType={viewType}
        onSelectedCalendarViewTypeChange={handleViewTypeChange}
      />
      <CalendarColumnHeader
        selectedDate={selectedDate}
        selectedView={viewType}
      />

      <CalendarDayGrid
        data={content}
        selectedView={viewType}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default Calendar;
