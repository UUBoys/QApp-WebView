import type { Meta, StoryObj } from "@storybook/react";

import Card from "@/modules/common/components/Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Components/Card",
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla",
    imageSrc:
      "https://www.meatspace.cz/site/assets/files/6611/ku_club_bar-meatspace-_sk.jpg",
    price: 100,
    title: "Card title",
  },
};
