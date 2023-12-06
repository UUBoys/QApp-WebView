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
    ticket: {
      id: 1,
      amount: 250,
      name: "Ticket name",
      user_id: "1",
      event: {
        id: "c5de43e0-ef23-462e-8b2d-ad8aec305997",
        name: "Event name",
        start_date: "2021-09-25T12:00:00.000Z",
        establishment_id: 1,
        end_date: "2021-09-25T12:00:00.000Z",
        price: 250,
        image: "https://picsum.photos/300/150",
        description: "Event description",
        maximumCapacity: 1000,
      },
    },
  },
};
