import type { Meta, StoryObj } from "@storybook/react";

import Tabs, { TabItemProps } from "@/modules/common/components/Tabs";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DoorBackOutlinedIcon from '@mui/icons-material/DoorBackOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import AirplayOutlinedIcon from '@mui/icons-material/AirplayOutlined';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "Components/Tabs",
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const tabs: TabItemProps[] = [
  {
    label:"Item 1",
  },
  {
    label:"Item 2",
  },
  {
    label:"Item 2",
  }, 
  {
    label:"Item 4",
  }
]
const tabs2: TabItemProps[] = [
  {
    icon: <HomeOutlinedIcon />
  },
  {
    icon: <DoorBackOutlinedIcon />
  },
  {
    icon: <AddBoxOutlinedIcon />
  }, 
  {
    icon: <AirplayOutlinedIcon />
  }
]
const tabs3: TabItemProps[] = [
  {
    label:"Item 1",
    icon: <HomeOutlinedIcon />
  },
  {
    label:"Item 2",
    icon: <DoorBackOutlinedIcon />
  },
  {
    label:"Item 3",
    icon: <AddBoxOutlinedIcon />
  }, 
  {
    label:"Item 4",
    icon: <AirplayOutlinedIcon />
  }
]

export const Default: Story = {
  args: {
    tabs: tabs3
  },
};

export const Icons: Story = {
  args:{
    tabs: tabs2
  }
}
export const Text: Story = {
  args:{
    tabs: tabs
  }
}
