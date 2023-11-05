import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import HelpButton from "@/modules/common/components/HelpButton";

const meta: Meta<typeof HelpButton> = {
  component: HelpButton,
  title: "Components/HelpButton",
};

export default meta;
type Story = StoryObj<typeof HelpButton>;

export const Default: Story = {};
