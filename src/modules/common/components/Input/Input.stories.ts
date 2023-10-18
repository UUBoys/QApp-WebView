// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import Input from "@/modules/common/components/Input";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Components/Input",
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};
