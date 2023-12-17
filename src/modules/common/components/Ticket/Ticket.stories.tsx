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
      ticket_id: "c6c6d90d-d74a-4fb3-a87d-0f15d864d9e5",
      bought_quantity: 250,
      user_id: "tefs",
      event_id: "1",
      price: 250,
      ticket_name: "VIP",
    },
  },
};
