import Image from "next/image";
import { useState } from "react";

import Button from "../Button";
import Input from "../Input";

import LocalAtmRoundedIcon from "@mui/icons-material/LocalAtmRounded";

export type CreditPackageProps = {
  name: string;
  price: string;
  description: string;
  imageSrc: string;
  onBuy?: (volume?: number) => void;
  isCustom?: boolean;
  volume?: number;
  variant?: "standard" | "premium" | "vip";
};

const CreditPackage: React.FC<CreditPackageProps> = ({
  name,
  price,
  description,
  imageSrc,
  volume,
  onBuy,
  isCustom,
  variant = "standard",
}) => {
  const variant_styles = {
    standard: {
      background: "bg-gray-300",
    },
    premium: {
      background: "bg-secondary",
    },
    vip: {
      background: "bg-primary",
    },
  };

  return (
    <div className="flex flex-col rounded-lg bg-white shadow-xl max-w-[300px]">
      <div
        className={`${variant_styles[variant].background} w-[80%] py-[10px] mx-auto flex flex-col items-center justify-center gap-[5px] rounded-2xl relative mt-[-20px] shadow-2xl`}
      >
        <p className={"text-[20px] uppercase font-bold"}>{variant}</p>
        <p className={"text-[18px] font-medium"}>{price}</p>
      </div>
      <div className={"w-full py-4 text-center"}>
        <p className={"text-gray-700 text-[30px]"}>{volume} Kreditu</p>
      </div>

      <div className={"border-t border-gray-300 w-full"}>
        <div className={"text-gray-300 px-[20px] text-center py-[30px]"}>
          <p>{description}</p>
        </div>
      </div>

      <div className={"flex items-center justify-center mb-[30px]"}>
        <Button
          onClick={() => onBuy && onBuy(volume)}
          className={`rounded-xl w-[150px] h-[40px] uppercase`}
          customBackground={variant_styles[variant].background}
        >
          Koupit
        </Button>
      </div>
    </div>
  );
};

export default CreditPackage;
