import type { Meta, StoryObj } from "@storybook/react";

import Ticket from "@/modules/common/components/Ticket";

const meta: Meta<typeof Ticket> = {
  component: Ticket,
  title: "Components/Ticket",
};

export default meta;
type Story = StoryObj<typeof Ticket>;

export const Default: Story = {
  args: {
    uuid: "2020202020",
    eventName: "Halloween Party",
    eventLocation: "The Club",
    clubName: "Becher's Bar",
    clubImage: "https://picsum.photos/40/40",
    clubUuid: "1234567890",
    eventDate: "2024-10-31T22:00:00.000Z",
  },
};
