// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import Lottie from "lottie-react";

import qUpLoaderAnimation from "../../../../../public/animations/qup-loader-animation.json";

import Loader from "@/modules/common/components/Loader";

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: "Components/Loader",
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Lottie
          animationData={qUpLoaderAnimation}
          loop
          className="w-1/4 invert "
        />{" "}
        <div className="mt-[-70px] bg-gradient-to-b from-[#ff8b56] to-[#fe592b] !bg-clip-text text-[20px] font-bold text-transparent md:text-[60px]">
          Načítání...
        </div>
      </>
    ),
  },
};
