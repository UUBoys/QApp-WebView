import React from "react";
import Button from "./Button";

type CardProps = {
  title: string;
  imageSrc: string;
  description: string;
  price: number;
};

const Card: React.FC<CardProps> = ({ title, imageSrc, description, price }) => {
  return (
    <div className="bg-gray-900 max-w-[500px] rounded-xl overflow-hidden shadow-xl relative">
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-200">{title}</h2>
          <p className="text-lg text-gray-200">Entrance {price},- kč</p>
        </div>
        <p
          className="text-gray-400 overflow-hidden overflow-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>

        <div className="w-full flex flex-row-reverse">
          <Button className="rounded-full w-32">Buy!</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
