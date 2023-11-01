import Image from "next/image";
import { useState } from "react";

import Button from "../Button";
import Input from "../Input";

export type CreditPackageProps = {
  name: string;
  price: string;
  description: string;
  imageSrc: string;
  onBuy?: (volume?: number) => void;
  isCustom?: boolean;
  volume?: number;
};

const CreditPackage: React.FC<CreditPackageProps> = ({
  name,
  price,
  description,
  imageSrc,
  onBuy,
  isCustom,
}) => {
  const [inputValue, setInputValue] = useState<number>(0);
  return (
    <div className="flex min-h-[60px]  flex-row gap-10 rounded-lg border-2 border-gray-200 p-5 shadow-xl">
      <Image
        src={imageSrc}
        alt="coins"
        className="rounded-full shadow-lg"
        width={200}
        height={200}
      />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="text-4xl font-bold">{name}</div>
          <p>{description}</p>
          <h1>{price}</h1>
        </div>
        <div className="flex gap-5">
          {isCustom && (
            <Input
              type="number"
              onChange={(e) => setInputValue(parseFloat(e.target.value))}
            />
          )}

          <Button
            size="lg"
            className="h-full shadow-lg"
            onClick={() => {
              if (!onBuy) return;
              if (isCustom) {
                onBuy(inputValue);
              }
              onBuy();
            }}
          >
            Koupit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreditPackage;
