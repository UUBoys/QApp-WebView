import { type ReactNode, type ReactElement } from "react";

/** Days of the week. */
export type DayType = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

/** Available calendar view types. */
export type CalendarViewType = "day" | "week" | "month";

export interface CalendarCellContent {
  /** The start date for the content. */
  startDate: Date;
  /** The end date for the content. */
  endDate?: Date;
  /** The content to be displayed for the day. */
  content: ReactNode;
}

/**
 * Represents a row of content in the calendar.
 * This row can correspond to a specific row in the left description column based on the `rowId`.
 */
export type CalendarRowContent = {
  /** The cell contents for this specific row. */
  rowContent: CalendarCellContent;
  rowId?: string;
};

/**
 * Represents the main structure of the calendar content.
 *
 * Each item in the array represents a row in the calendar. Each row contains multiple cells,
 * where each cell represents content for a specific day or date range.
 *
 * This structure is designed to be flexible to handle different views with multiple rows.
 */
export type CalendarContent = CalendarRowContent[];

/** Configuration object for defining how the calendar should be displayed. */
export interface CalendarViewConfig {
  /** The type of calendar view (day, week, month, ...). */
  viewType: CalendarViewType;
  /** The day on which the calendar should start. */
  startDay?: Date;
  /** Number of days to be displayed in the view. */
  numberOfDays?: number;
}

/**
 * Type for customizing the calendar cell.
 * Used to customize the wrapper around content in calendar for each day in the calendar.
 * You can validate viewType and render different wrapper for each viewType. For example if you want to render different wrapper for day, week and month.
 * Used for example if you want to change background of cell. Or you don't want to display number of the day.
 */
export type CalendarRenderCustomCell = (
  children: ReactNode,
  viewType: CalendarViewType
) => ReactElement;
