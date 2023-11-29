/* eslint-disable sonarjs/no-duplicate-string */
import type { Meta, StoryObj } from "@storybook/react";

import ClubCard from ".";

const meta: Meta<typeof ClubCard> = {
  component: ClubCard,
  title: "Components/ClubCard",
};

export default meta;
type Story = StoryObj<typeof ClubCard>;

export const Default: Story = {
  args: {
    club: {
      id: 8,
      profileImage:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      coverImage:
        "https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      description:
        "Tohle je bechers bar. Nejlepší bar v teplicích,Tohle je bechers bar. Nejlepší bar v teplicích,Tohle je bechers bar. Nejlepší bar v teplicích,Tohle je bechers bar. Nejlepší bar v teplicích",
      name: "BechersBar",
      city: "Teplice",
      country: "Czech Republic",
      street: "Kašparova 1844/12",
      events: [],
    },
  },
};
