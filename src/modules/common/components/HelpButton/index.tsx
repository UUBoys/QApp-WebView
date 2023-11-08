/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Button from "../Button";

import Autocomplete, {
  AutocompleteItemProps,
} from "@/modules/common/components/Autocomplete";
import Input from "@/modules/common/components/Input";

const helpOptions: AutocompleteItemProps[] = [
  {
    label: "Nelze koupit kredity",
    value: "asdasda",
  },
  {
    label: "Vratime se mi kredity pri vraceni vstupenky",
    value: "asdasdasd",
  },
  {
    label: "test",
    value: "test",
  },
  {
    label: "ttttest",
    value: "ttttest",
  },
];

const HelpButton = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="fixed bottom-[20px] right-[20px] z-[30]">
      {isOpen && (
        <div className="mb-[30px] w-[300px] rounded-lg bg-white shadow-2xl">
          <div className="absolute right-[5px] top-[5px]">
            <CloseRoundedIcon
              sx={{ fontSize: "30px" }}
              onClick={() => setIsOpen((prev) => !prev)}
            />
          </div>
          <div className="w-full rounded-t-lg bg-primary px-[10px] py-[20px]">
            <p className="text-[30px] font-bold">
              {t("components.helpButton.header")}
            </p>
            <p className="py-[10px]">{t("components.helpButton.text")}</p>
          </div>
          <Autocomplete
            options={helpOptions}
            className="mt-[-20px] !h-[30px] w-full px-[15px]"
          />
          <div className="flex w-full flex-col gap-[20px] px-[10px] pt-[20px]">
            <Input
              placeholder={t("components.helpButton.form.name")}
              className="!w-[270px]"
            />
            <Input
              placeholder={t("components.helpButton.form.email")}
              className="!w-[270px]"
            />
            <Input
              placeholder={t("components.helpButton.form.phone")}
              className="!w-[270px]"
            />
            <Input
              type="textarea"
              placeholder={t("components.helpButton.form.message")}
              className="h-[70px] !w-[270px]"
              rows={4}
            />
            <Button className="my-[10px]">
              {t("components.helpButton.form.button")}
            </Button>
          </div>
        </div>
      )}

      <div
        className="flex max-w-[60px] rounded-full bg-primary p-[15px] shadow-2xl transition-all"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <CloseRoundedIcon sx={{ fontSize: "30px" }} />
        ) : (
          <ChatBubbleRoundedIcon sx={{ fontSize: "30px" }} />
        )}
      </div>
    </div>
  );
};

export default HelpButton;
