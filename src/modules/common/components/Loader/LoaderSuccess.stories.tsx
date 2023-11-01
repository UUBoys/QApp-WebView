// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import Lottie from "lottie-react";

import qUpLoaderSuccessAnimation from "../../../../../public/animations/qup-loader-success-animation.json";

import Loader from "@/modules/common/components/Loader";

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: "Components/Loader/success",
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Lottie
          animationData={qUpLoaderSuccessAnimation}
          loop={false}
          className="w-1/4 "
        />{" "}
      </>
    ),
  },
};
