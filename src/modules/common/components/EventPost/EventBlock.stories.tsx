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
    event: {
      uuid: "1a2b3c4d",
      author: {
        name: "Jan Novák",
        avatar:
          "https://img.freepik.com/premium-vector/bar-logo-lettering-design-vector-template_556845-66.jpg",
      },
      address: "Kulturni dum Barikadniku",
      title: "První událost",
      date: "2023-11-01T12:00:00Z",
      created: "2023-11-01T12:00:00Z",
    },
    className: "w-[500px]",
  },
};
