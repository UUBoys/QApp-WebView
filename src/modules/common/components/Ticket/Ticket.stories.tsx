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
      ticket_id: 1,
      amount: 250,
      name: "Ticket name",
      user_id: 1,
      event_id: "1",
    },
  },
};
