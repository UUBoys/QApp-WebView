// Button.stories.ts|tsx

import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import WindowRoundedIcon from "@mui/icons-material/WindowRounded";
import type { Meta, StoryObj } from "@storybook/react";

import Navigation, {
  NavigationLinkProps,
} from "@/modules/common/components/Navigation";

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  title: "Components/Navigation",
};

export default meta;
type Story = StoryObj<typeof Navigation>;

const links: NavigationLinkProps[] = [
  {
    label: "Link 1",
    icon: <HomeRoundedIcon />,
  },
  {
    label: "Link 2",
    icon: <WindowRoundedIcon />,
  },
  {
    label: "Link 2",
    icon: <ApartmentRoundedIcon />,
  },
];

const linksTextOnly: NavigationLinkProps[] = [
  {
    label: "Link 1",
  },
  {
    label: "Link 2",
  },
  {
    label: "Link 2",
  },
];

export const Default: Story = {
  args: {
    links,
    className: "max-w-[500px]",
  },
};

export const LabelOnly: Story = {
  args: {
    links: linksTextOnly,
    className: "max-w-[500px]",
  },
};
