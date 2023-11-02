import Button from "../Button";

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
  price,
  description,
  volume,
  onBuy,
  variant = "standard",
}) => {
  const variantStyles = {
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
    <div className="flex max-w-[300px] flex-col rounded-lg bg-white shadow-xl">
      <div
        className={`${variantStyles[variant].background} relative mx-auto mt-[-20px] flex w-[80%] flex-col items-center justify-center gap-[5px] rounded-2xl py-[10px] text-white shadow-2xl`}
      >
        <p className="text-[20px] font-bold uppercase">{variant}</p>
        <p className="text-[18px] font-medium">{price}</p>
      </div>
      <div className="w-full py-4 text-center">
        <p className="text-[30px] text-gray-700">{volume} Kreditu</p>
      </div>

      <div className="w-full border-t border-gray-300">
        <div className="px-[20px] py-[30px] text-center text-gray-300">
          <p>{description}</p>
        </div>
      </div>

      <div className="mb-[30px] flex items-center justify-center">
        <Button
          onClick={() => onBuy && onBuy(volume)}
          className="h-[40px] w-[150px] rounded-xl uppercase"
          customBackground={variantStyles[variant].background}
        >
          Koupit
        </Button>
      </div>
    </div>
  );
};

export default CreditPackage;
