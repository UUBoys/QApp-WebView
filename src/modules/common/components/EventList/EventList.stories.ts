/* eslint-disable sonarjs/no-duplicate-string */
// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import EventList from "@/modules/common/components/EventList";

const meta: Meta<typeof EventList> = {
  component: EventList,
  title: "Components/EventList",
};

export default meta;
type Story = StoryObj<typeof EventList>;

export const Default: Story = {
  args: {
    events: [
      {
        address: "Kolbenova 123/456, Praha 9, 400 08",
        content:
          "Bechers bar akce číslo 1! Přijďte si užít skvělou atmosféru a výborné drinky!",
        title: "Bechers bar",
        date: "12. 5. 2021",
        imageSrc:
          "https://media.istockphoto.com/id/501387734/cs/fotografie/tan%C4%8D%C3%ADc%C3%AD-p%C5%99%C3%A1tel%C3%A9.jpg?s=612x612&w=0&k=20&c=WyInUbbqdQuoj8efMtDrnJbnghE5JyvkGqC09T5gMRY=",
        price: "150 Kč",
      },
      {
        address: "Kolbenova 123/456, Praha 9, 400 08",
        content:
          "Bechers bar akce číslo 1! Přijďte si užít skvělou atmosféru a výborné drinky!",
        title: "Bechers bar",
        date: "12. 5. 2021",
        imageSrc:
          "https://media.istockphoto.com/id/501387734/cs/fotografie/tan%C4%8D%C3%ADc%C3%AD-p%C5%99%C3%A1tel%C3%A9.jpg?s=612x612&w=0&k=20&c=WyInUbbqdQuoj8efMtDrnJbnghE5JyvkGqC09T5gMRY=",
        price: "150 Kč",
      },
      {
        address: "Kolbenova 123/456, Praha 9, 400 08",
        content:
          "Bechers bar akce číslo 1! Přijďte si užít skvělou atmosféru a výborné drinky!",
        title: "Bechers bar",
        date: "12. 5. 2021",
        imageSrc:
          "https://media.istockphoto.com/id/501387734/cs/fotografie/tan%C4%8D%C3%ADc%C3%AD-p%C5%99%C3%A1tel%C3%A9.jpg?s=612x612&w=0&k=20&c=WyInUbbqdQuoj8efMtDrnJbnghE5JyvkGqC09T5gMRY=",
        price: "150 Kč",
      },
    ],
  },
};
