import clsx from "clsx";
import React from "react";

type TagProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  color?: "primary" | "secondary" | "error";
};

const Tag = ({ children, className, onClick, color = "primary" }: TagProps) => {
  const handleClick = () => onClick && onClick();

  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    error: "bg-red-500 text-white",
  };

  const classes = clsx(
    "w-fit rounded-lg px-[10px] py-[5px] text-[14px] font-medium shadow-xl",
    variants[color],
    className
  );

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={classes} onClick={() => handleClick()}>
      {children}
    </div>
  );
};

export default Tag;
