import type { Meta, StoryObj } from "@storybook/react";

import Tag from "@/modules/common/components/Tag";

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "Components/Tag",
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "Tag Primary",
  },
};
export const Secondary: Story = {
  args: {
    children: "Tag Secondary",
    color: "secondary",
  },
};
export const Error: Story = {
  args: {
    children: "Tag Error",
    color: "error",
  },
};
