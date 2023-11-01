import { useEffect, useState } from "react";
import clsx from "clsx";

type TabProps = {
  tabs: TabItemProps[];
  defaultSelected?: TabItemProps;
  onChange?: (e: TabItemProps | undefined) => void;
  className?: string;
};

export type TabItemProps = {
  label?: string;
  value?: any;
  className?: string;
  icon?: React.ReactNode;
};

export default function Tabs({
  tabs,
  defaultSelected,
  onChange,
  className = "",
}: TabProps) {
  const [selected, setSelected] = useState<TabItemProps | undefined>(
    defaultSelected || undefined
  );

  useEffect(() => {
    if (onChange) onChange(selected);
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
        "w-fit flex items-center justify-center bg-white shadow-2xl p-3 rounded-[14px] gap-[10px]",
        className
      )}
    >
      {tabs.map((tab, index) => (
        <div
          className={clsx(
            "flex flex-col justify-center items-center bg-white p-3 transition-all cursor-pointer rounded-[12px] h-full",
            tab.className,
            selected === tab
              ? "bg-[rgba(255,173,50,0.3)]  text-primary"
              : "text-black"
          )}
          key={index}
          onClick={() => handelTabChange(tab)}
        >
          {tab.icon}
          {tab.label && (
            <p className={clsx("font-medium  text-[12px]")}>{tab.label}</p>
          )}
        </div>
      ))}
    </div>
  );
}
