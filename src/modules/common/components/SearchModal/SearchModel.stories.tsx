import type { Meta, StoryObj } from "@storybook/react";

import SearchModal from "@/modules/common/components/SearchModal";

const meta: Meta<typeof SearchModal> = {
  component: SearchModal,
  title: "Components/SearchModal",
};

export default meta;
type Story = StoryObj<typeof SearchModal>;

export const Default: Story = {
  args: {
    defaultOpen: true,
  },
};
