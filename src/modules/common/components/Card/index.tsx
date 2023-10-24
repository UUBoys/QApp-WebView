import React from "react";

import Button from "../Button";

type CardProps = {
  title: string;
  imageSrc: string;
  description: string;
  price: number;
};

const Card: React.FC<CardProps> = ({ title, imageSrc, description, price }) => {
  return (
    <div className="relative max-w-[500px] overflow-hidden rounded-xl bg-gray-900 shadow-xl">
      <img className="h-48 w-full object-cover" src={imageSrc} alt={title} />
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-200">{title}</h2>
          <p className="text-lg text-gray-200">Entrance {price},- kč</p>
        </div>
        <p
          className="overflow-hidden text-ellipsis text-gray-400"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>

        <div className="flex w-full flex-row-reverse">
          <Button className="w-32 rounded-full">Buy!</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
