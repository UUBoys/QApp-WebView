import type { Meta, StoryObj } from "@storybook/react";

import Ticket from "@/modules/common/components/Ticket";

const meta: Meta<typeof Ticket> = {
  component: Ticket,
  title: "Components/Ticket",
};

export default meta;
type Story = StoryObj<typeof Ticket>;

export const Default: Story = {
  args: {},
};
