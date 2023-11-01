/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from "clsx";
import { useEffect, useState } from "react";

type TabProps = {
  tabs: TabItemProps[];
  defaultSelected?: TabItemProps;
  onChange?: (e: TabItemProps) => void;
  className?: string;
};

export type TabItemProps = {
  label?: string;
  value?: any;
  className?: string;
  icon?: React.ReactNode;
};

const Tabs = ({
  tabs,
  defaultSelected,
  onChange,
  className = "",
}: TabProps) => {
  const [selected, setSelected] = useState<TabItemProps | undefined>(
    defaultSelected || undefined
  );

  useEffect(() => {
    if (selected && onChange) onChange(selected);
  }, [selected]);

  const handelTabChange = (e: TabItemProps) => {
    if (e !== selected) {
      setSelected(e);
      if (onChange) onChange(e);
    }
  };

  return (
    <div
      className={clsx(
        "flex w-fit items-center justify-center gap-[10px] rounded-[14px] bg-white p-3 shadow-2xl",
        className
      )}
    >
      {tabs.map((tab, index) => (
        <div
          className={clsx(
            "flex h-full cursor-pointer flex-col items-center justify-center rounded-[12px] bg-white p-3 transition-all",
            tab.className,
            selected && selected.value === tab.value
              ? "bg-[rgba(255,173,50,0.31)]  text-primary"
              : "text-black"
          )}
          key={index}
          onClick={() => handelTabChange(tab)}
        >
          {tab.icon}
          {tab.label && (
            <p className={clsx("text-[12px]  font-medium")}>{tab.label}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
