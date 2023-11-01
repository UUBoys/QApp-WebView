// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import Lottie from "lottie-react";

import qUpLoaderFailedAnimation from "../../../../../public/animations/qup-loader-fail-animation.json";

import Loader from "@/modules/common/components/Loader";

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: "Components/Loader/failed",
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    children: (
      <Lottie
        animationData={qUpLoaderFailedAnimation}
        loop={false}
        className="w-1/4 "
      />
    ),
  },
};
