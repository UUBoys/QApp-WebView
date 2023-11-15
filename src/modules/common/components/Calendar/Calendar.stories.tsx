// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Calendar from ".";

import { CalendarContent } from "types/clendar-types";

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: "Components/Calendar",
};

const mockCalendarData: CalendarContent = [
  {
    rowId: "2023-11-01",
    rowContent: {
      startDate: new Date(2023, 10, 1), // Pamatujte, že měsíce v JavaScriptu začínají od 0
      content: <div>Narozeniny Alice</div>,
    },
  },
  {
    rowId: "2023-11-05",
    rowContent: {
      startDate: new Date(2023, 10, 5),
      content: <div>Výroční schůze</div>,
    },
  },
  {
    rowId: "2023-11-15",
    rowContent: {
      startDate: new Date(2023, 10, 15),
      content: <div>Lékařská prohlídka</div>,
    },
  },
  // ... další události ...
];

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    content: mockCalendarData,
  },
};
