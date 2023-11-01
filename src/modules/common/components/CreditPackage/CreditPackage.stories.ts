// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import CreditPackage from ".";

const meta: Meta<typeof CreditPackage> = {
  component: CreditPackage,
  title: "Components/CreditPackage",
};

export default meta;
type Story = StoryObj<typeof CreditPackage>;

export const Default: Story = {
  args: {
    description:
      "Je to základní balíček, který obsahuje 100 kreditů. Výborný pro začátek.",
    imageSrc:
      "https://files.oaiusercontent.com/file-9ZOoricGvql7FTboWGYEdvCT?se=2023-11-01T17%3A51%3A17Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Da37f6ee4-6a44-41c0-927f-68da81c9ab4e.webp&sig=eN/cnbFFXgRYuvVOvAUX/ao/EsDqwotH6fH8fnjQvec%3D",
    name: "Balíček 1",
    price: "100 Kč",
  },
};
