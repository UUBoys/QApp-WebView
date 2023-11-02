import React from "react";
import { useRouter } from "next/router";
import clsx from "clsx";

export type NavigationLinkProps = {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: (item: NavigationLinkProps) => void;
  className?: string;
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
  };

  return (
    <div className={clsx("flex flex-col gap-[10px]", className)}>
      {links.map((link, index) => (
        <div
          key={index}
          onClick={() => handleLinkClick(link)}
          className={clsx(
            "flex gap-[5px] w-full text-gray-400 hover:text-primary-400 hover:border-primary-400 cursor-pointer transition-all  border-gray-400 py-[10px] px-[10px]",
            link.className,
            "hover:bg-gray-300 hover:text-gray-700 rounded-xl",
            seperateLinks && "border-b"
          )}
        >
          {link.icon && link.icon}
          <p>{link.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
