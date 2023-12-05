"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Tabs, { TabItemProps } from "@/modules/common/components/Tabs";

const UserSettings = () => {
  const { t } = useTranslation();

  const profileTabs: TabItemProps[] = [
    {
      label: t("pages.settings.tabs.account"),
      value: "account",
    },
    {
      label: t("pages.settings.tabs.payment"),
      value: "payments",
    },
  ];

  const [selectedTab, setSelectedTab] = useState<TabItemProps>(profileTabs[0]);
  return (
    <div>
      <div className="mt-[180px] flex items-center justify-center">
        <div className="w-[80%] max-w-[1500px]">
          <Tabs
            tabs={profileTabs}
            defaultSelected={selectedTab}
            onChange={(e: TabItemProps) => setSelectedTab(e)}
          />

          {/* CONTENT */}
          <div className="mt-[80px] rounded-xl bg-white px-[20px] py-[40px] shadow-2xl">
            {selectedTab.value === "account" && <div />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
