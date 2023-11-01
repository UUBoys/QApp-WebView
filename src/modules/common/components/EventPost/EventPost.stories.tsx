/* eslint-disable sonarjs/no-duplicate-string */
import type { Meta, StoryObj } from "@storybook/react";

import EventPost from "@/modules/common/components/EventPost";

const meta: Meta<typeof EventPost> = {
  component: EventPost,
  title: "Components/EventPost",
};

export default meta;
type Story = StoryObj<typeof EventPost>;

export const Default: Story = {
  args: {
    club: {
      name: "Becher's Bar Praha",
      avatar:
        "https://img.freepik.com/premium-vector/bar-logo-lettering-design-vector-template_556845-66.jpg",
      address: "Kulturni dum Barikadniku",
    },
    event: {
      uuid: "31413413",
      address: "Kulturni dum Barikadniku",
      title: "První událost",
      date: "2023-11-01T12:00:00Z",
      created: "2023-11-01T12:00:00Z",
    },
    className: "w-[500px]",
  },
};

export const MultipleEvents: Story = {
  args: {
    club: {
      name: "Becher's Bar Praha",
      avatar:
        "https://img.freepik.com/premium-vector/bar-logo-lettering-design-vector-template_556845-66.jpg",
      address: "Kulturni dum Barikadniku",
    },
    event: [
      {
        uuid: "1231414214",
        address: "Kulturni dum Barikadniku",
        title: "První událost",
        date: "2023-11-01T12:00:00Z",
        created: "2023-11-01T12:00:00Z",
      },
      {
        uuid: "sad1d1331",
        address: "Kulturni dum Barikadniku",
        title: "První událost",
        date: "2023-11-01T12:00:00Z",
        created: "2023-11-01T12:00:00Z",
      },
      {
        uuid: "5g35g3242",
        address: "Kulturni dum Barikadniku",
        title: "První událost",
        date: "2023-11-01T12:00:00Z",
        created: "2023-11-01T12:00:00Z",
      },
      {
        uuid: "12d12d31a",
        address: "Kulturni dum Barikadniku",
        title: "První událost",
        date: "2023-11-01T12:00:00Z",
        created: "2023-11-01T12:00:00Z",
      },
      {
        uuid: "234r24g42g24",
        address: "Kulturni dum Barikadniku",
        title: "První událost",
        date: "2023-11-01T12:00:00Z",
        created: "2023-11-01T12:00:00Z",
      },
      {
        uuid: "aas4aw412412",
        address: "Kulturni dum Barikadniku",
        title: "První událost",
        date: "2023-11-01T12:00:00Z",
        created: "2023-11-01T12:00:00Z",
      },
    ],
    className: "w-[500px]",
  },
};
