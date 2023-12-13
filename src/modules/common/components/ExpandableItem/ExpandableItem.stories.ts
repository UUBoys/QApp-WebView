// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import ExpandableItem from "@/modules/common/components/ExpandableItem";

const meta: Meta<typeof ExpandableItem> = {
  component: ExpandableItem,
  title: "Components/ExpandableItem",
};

export default meta;
type Story = StoryObj<typeof ExpandableItem>;

export const Default: Story = {
  args: {
    description: "Popis akce bla bla",
    end_date: "2023-11-25T02:38:00.000Z",
    establishment_id: "c6c6d90d-d74a-4fb3-a87d-0f15d864d9e5",
    image: "https://utfs.io/f/7e862802-7728-43b1-8831-26df6df46ea6-6mtux8.jpg",
    maximumCapacity: 150,
    name: "Halloween v Becheru",
    price: 100,
    start_date: "2023-11-24T20:44:00.000Z",
  },
};
