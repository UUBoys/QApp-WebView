import React, { useState } from "react";

import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Input from "@/modules/common/components/Input";
import Autocomplete, {
  AutocompleteItemProps,
} from "@/modules/common/components/Autocomplete";
import Button from "../Button";
import { useTranslation } from "react-i18next";

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
    <div className={"fixed bottom-[20px] right-[20px] z-[30]"}>
      {isOpen && (
        <div className={"w-[250px] bg-white rounded-lg shadow-2xl mb-[30px]"}>
          <div className={"absolute right-[5px] top-[5px]"}>
            <CloseRoundedIcon
              sx={{ fontSize: "30px" }}
              onClick={() => setIsOpen((prev) => !prev)}
            />
          </div>
          <div className={"w-full bg-primary px-[10px] rounded-t-lg py-[20px]"}>
            <p className={"text-[30px] font-bold"}>
              {t("components.helpButton.header")}
            </p>
            <p className={"pt-[10px] pb-[10px]"}>
              {t("components.helpButton.text")}
            </p>
          </div>
          <Autocomplete
            options={helpOptions}
            className={"w-full !h-[30px] mt-[-20px] px-[15px]"}
          />
          <div
            className={"w-full flex flex-col px-[10px] pt-[20px] gap-[20px]"}
          >
            <Input
              placeholder={t("components.helpButton.form.name")}
              className={"!w-[230px]"}
            />
            <Input
              placeholder={t("components.helpButton.form.email")}
              className={"!w-[230px]"}
            />
            <Input
              placeholder={t("components.helpButton.form.phone")}
              className={"!w-[230px]"}
            />
            <Input
              type={"textarea"}
              placeholder={t("components.helpButton.form.message")}
              className={"!w-[230px] h-[70px]"}
              rows={4}
            />
            <Button className={"my-[10px]"}>
              {t("components.helpButton.form.button")}
            </Button>
          </div>
        </div>
      )}

      <div
        className={
          "bg-primary rounded-full flex p-[15px] transition-all max-w-[60px] shadow-2xl"
        }
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
