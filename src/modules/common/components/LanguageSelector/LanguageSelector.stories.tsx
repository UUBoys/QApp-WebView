import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import LanguageSelector from "@/modules/common/components/LanguageSelector";

const meta: Meta<typeof LanguageSelector> = {
  component: LanguageSelector,
  title: "Components/LanguageSelector",
};

export default meta;
type Story = StoryObj<typeof LanguageSelector>;

export const Default: Story = {};
