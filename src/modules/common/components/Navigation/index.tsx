/* eslint-disable react/no-array-index-key */
/* eslint-disable tailwindcss/no-contradicting-classname */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

export type NavigationLinkProps = {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: (item: NavigationLinkProps) => void;
  className?: string;
  image?: string;
};

type NavigationProps = {
  links: NavigationLinkProps[];
  seperateLinks?: boolean;
  className?: string;
};

const Navigation = ({
  links,
  className,
  seperateLinks = false,
}: NavigationProps) => {
  const { push } = useRouter();

  const handleLinkClick = (link: NavigationLinkProps) => {
    if (link.href) return push(link.href);
    if (link.onClick) return link.onClick(link);
    return null;
  };

  return (
    <div className={clsx("flex flex-col gap-[10px]", className)}>
      {links.map((link, index) => (
        <div
          key={index}
          onClick={() => handleLinkClick(link)}
          className={clsx(
            "flex w-full cursor-pointer items-center gap-[8px] border-gray-400 p-[10px] text-gray-400 transition-all  hover:border-primary-400 hover:text-primary-400",
            link.className,
            "rounded-xl hover:bg-gray-300 hover:text-gray-700",
            seperateLinks && "border-b"
          )}
        >
          {link.icon && !link.image && link.icon}
          {link.image && (
            <div className="h-[30px] w-[30px]">
              <Image
                src={link.image}
                width={30}
                height={30}
                alt="icon"
                className="rounded-full"
              />
            </div>
          )}
          <p>{link.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
