import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import AirplayOutlinedIcon from "@mui/icons-material/AirplayOutlined";
import DoorBackOutlinedIcon from "@mui/icons-material/DoorBackOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import type { Meta, StoryObj } from "@storybook/react";

import Tabs, { TabItemProps } from "@/modules/common/components/Tabs";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "Components/Tabs",
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const tabs: TabItemProps[] = [
  {
    label: "Item 1",
    value: 1,
  },
  {
    label: "Item 2",
    value: 2,
  },
  {
    label: "Item 2",
    value: 3,
  },
  {
    label: "Item 4",
    value: 4,
  },
];
const tabs2: TabItemProps[] = [
  {
    icon: <HomeOutlinedIcon />,
    value: 1,
  },
  {
    icon: <DoorBackOutlinedIcon />,
    value: 2,
  },
  {
    icon: <AddBoxOutlinedIcon />,
    value: 3,
  },
  {
    icon: <AirplayOutlinedIcon />,
    value: 4,
  },
];
const tabs3: TabItemProps[] = [
  {
    label: "Item 1",
    icon: <HomeOutlinedIcon />,
    value: 1,
  },
  {
    label: "Item 2",
    icon: <DoorBackOutlinedIcon />,
    value: 2,
  },
  {
    label: "Item 3",
    icon: <AddBoxOutlinedIcon />,
    value: 3,
  },
  {
    label: "Item 4",
    icon: <AirplayOutlinedIcon />,
    value: 4,
  },
];

export const Default: Story = {
  args: {
    tabs: tabs3,
  },
};

export const Icons: Story = {
  args: {
    tabs: tabs2,
  },
};
export const Text: Story = {
  args: {
    tabs,
  },
};
