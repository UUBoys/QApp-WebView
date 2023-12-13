/* eslint-disable sonarjs/no-duplicate-string */
// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import EventList from "@/modules/common/components/EventList";

const meta: Meta<typeof EventList> = {
  component: EventList,
  title: "Components/EventList",
};

export default meta;
type Story = StoryObj<typeof EventList>;

export const Default: Story = {
  args: {
    events: [
      {
        description: "Popis akce bla bla",
        end_date: "2023-11-25T02:38:00.000Z",
        establishment_id: "c6c6d90d-d74a-4fb3-a87d-0f15d864d9e5",
        image:
          "https://utfs.io/f/7e862802-7728-43b1-8831-26df6df46ea6-6mtux8.jpg",
        maximumCapacity: 150,
        name: "Halloween v Becheru",
        price: 100,
        id: "1",
        start_date: "2023-11-24T20:44:00.000Z",
      },
      {
        description: "Popis akce bla bla",
        end_date: "2023-11-25T02:38:00.000Z",
        establishment_id: "c6c6d90d-d74a-4fb3-a87d-0f15d864d9e5",
        image:
          "https://utfs.io/f/7e862802-7728-43b1-8831-26df6df46ea6-6mtux8.jpg",
        maximumCapacity: 150,
        id: "1",
        name: "Halloween v Becheru",
        price: 100,
        start_date: "2023-11-24T20:44:00.000Z",
      },
      {
        description: "Popis akce bla bla",
        end_date: "2023-11-25T02:38:00.000Z",
        establishment_id: "c6c6d90d-d74a-4fb3-a87d-0f15d864d9e5",
        image:
          "https://utfs.io/f/7e862802-7728-43b1-8831-26df6df46ea6-6mtux8.jpg",
        maximumCapacity: 150,
        name: "Halloween v Becheru",
        id: "1",
        price: 100,
        start_date: "2023-11-24T20:44:00.000Z",
      },
    ],
  },
};
