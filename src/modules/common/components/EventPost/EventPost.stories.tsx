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
      id: "c6c6d90d-d74a-4fb3-a87d-0f15d864d9e5",
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
    event: {
      description: "Popis akce bla bla",
      end_date: "2023-11-25T02:38:00.000Z",
      establishment_id: "c6c6d90d-d74a-4fb3-a87d-0f15d864d9e5",
      image:
        "https://utfs.io/f/7e862802-7728-43b1-8831-26df6df46ea6-6mtux8.jpg",
      maximumCapacity: 150,
      name: "Halloween v Becheru",
      id: "1",
      price: 100,
      start_date: "2023-11-24T20:44:00.000Z",
    },
    className: "w-[500px]",
  },
};

export const MultipleEvents: Story = {
  args: {
    club: {
      id: "c6c6d90d-d74a-4fb3-a87d-0f15d864d9e5",
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
    event: [
      {
        description: "Popis akce bla bla",
        end_date: "2023-11-25T02:38:00.000Z",
        establishment_id: "c6c6d90d-d74a-4fb3-a87d-0f15d864d9e5",
        image:
          "https://utfs.io/f/7e862802-7728-43b1-8831-26df6df46ea6-6mtux8.jpg",
        maximumCapacity: 150,
        name: "Halloween v Becheru",
        id: "1",
        price: 100,
        start_date: "2023-11-24T20:44:00.000Z",
      },
      {
        description: "Popis akce bla bla",
        end_date: "2023-11-25T02:38:00.000Z",
        establishment_id: "c6c6d90d-d74a-4fb3-a87d-0f15d864d9e5",
        image:
          "https://utfs.io/f/7e862802-7728-43b1-8831-26df6df46ea6-6mtux8.jpg",
        maximumCapacity: 150,
        name: "Halloween v Becheru",
        id: "1",
        price: 100,
        start_date: "2023-11-24T20:44:00.000Z",
      },
      {
        description: "Popis akce bla bla",
        end_date: "2023-11-25T02:38:00.000Z",
        establishment_id: "c6c6d90d-d74a-4fb3-a87d-0f15d864d9e5",
        image:
          "https://utfs.io/f/7e862802-7728-43b1-8831-26df6df46ea6-6mtux8.jpg",
        maximumCapacity: 150,
        name: "Halloween v Becheru",
        id: "1",
        price: 100,
        start_date: "2023-11-24T20:44:00.000Z",
      },
      {
        description: "Popis akce bla bla",
        end_date: "2023-11-25T02:38:00.000Z",
        establishment_id: "c6c6d90d-d74a-4fb3-a87d-0f15d864d9e5",
        image:
          "https://utfs.io/f/7e862802-7728-43b1-8831-26df6df46ea6-6mtux8.jpg",
        maximumCapacity: 150,
        name: "Halloween v Becheru",
        id: "1",
        price: 100,
        start_date: "2023-11-24T20:44:00.000Z",
      },
    ],
    className: "w-[500px]",
  },
};
