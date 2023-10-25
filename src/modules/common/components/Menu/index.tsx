/* eslint-disable react/no-array-index-key */
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { Fragment } from "react";

export type MenuItemProps = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: (menu?: MenuItemProps) => void;
  className?: string;
  render?: (menu: MenuItemProps) => React.ReactNode;
};

type MenuProps = {
  className?: string;
  items: MenuItemProps[];
  children: React.ReactNode;
};

const Menu: React.FC<MenuProps> = ({ items, children, className }) => {
  const { push } = useRouter();

  const handleClick = (e: MenuItemProps) => {
    if (e.onClick) {
      e.onClick(e);
    }
    if (e.href) {
      push(e.href);
    }
  };

  return (
    <div className="relative">
      <HeadlessMenu as="div" className="relative inline-block text-left">
        <div>
          <HeadlessMenu.Button className={className || ""}>
            {children}
          </HeadlessMenu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <HeadlessMenu.Items className="mx-center absolute mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-1 ">
              {items.map((item, index) => {
                if (item.render) {
                  return item.render(item);
                }
                return (
                  <HeadlessMenu.Item key={index}>
                    {({ active }) => (
                      <button
                        onClick={() => handleClick(item)}
                        className={`${
                          active ? "bg-[#FFAD32] text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md p-2 text-sm`}
                      >
                        {item.label}
                      </button>
                    )}
                  </HeadlessMenu.Item>
                );
              })}
            </div>
          </HeadlessMenu.Items>
        </Transition>
      </HeadlessMenu>
    </div>
  );
};

export default Menu;
