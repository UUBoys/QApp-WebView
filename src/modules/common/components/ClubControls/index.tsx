/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import InsertPhotoRoundedIcon from "@mui/icons-material/InsertPhotoRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
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

const ClubControls = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {isOpen && (
        <>
          <div className="fixed bottom-[170px] right-[30px] z-[30] flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-secondary shadow-2xl transition-all">
            <EventNoteRoundedIcon />
          </div>
          <div className="fixed bottom-[140px] right-[80px] z-[30] flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-secondary shadow-2xl transition-all">
            <InfoRoundedIcon />
          </div>
          <div className="fixed bottom-[80px] right-[80px] z-[30] flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-secondary shadow-2xl transition-all">
            <InsertPhotoRoundedIcon />
          </div>
        </>
      )}
      <div className="fixed bottom-[100px] right-[20px] z-[30]">
        <div
          className="flex max-w-[60px] cursor-pointer rounded-full bg-primary p-[15px] shadow-2xl transition-all"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <CloseRoundedIcon sx={{ fontSize: "30px" }} />
          ) : (
            <SettingsRoundedIcon sx={{ fontSize: "30px" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default ClubControls;
