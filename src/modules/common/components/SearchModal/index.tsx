import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useDebounce } from "usehooks-ts";

import Tabs, { TabItemProps } from "@/modules/common/components/Tabs";

import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

type SearchModalProps = {
  onClose?: () => void;
  defaultOpen?: boolean;
  defaultValue?: string;
  className?: string;
};

type SearchResult = {
  label: string;
  type: "event" | "club";
  thumbnail?: string;
};

const mockSearch: SearchResult[] = [
  {
    label: "Akce 1",
    type: "event",
    thumbnail: "https://picsum.photos/40/40",
  },
  {
    label: "Akce 2",
    type: "event",
    thumbnail: "https://picsum.photos/40/40",
  },
  {
    label: "Akce 3",
    type: "event",
    thumbnail: "https://picsum.photos/40/40",
  },
  {
    label: "Akce 4",
    type: "event",
    thumbnail: "https://picsum.photos/40/40",
  },
  {
    label: "Becher's bar",
    type: "club",
    thumbnail: "https://picsum.photos/40/40",
  },
  {
    label: "Hedwik's bar",
    type: "club",
    thumbnail: "https://picsum.photos/40/40",
  },
  {
    label: "Unico mexican bar",
    type: "club",
    thumbnail: "https://picsum.photos/40/40",
  },
  {
    label: "O2 arena",
    type: "club",
    thumbnail: "https://picsum.photos/40/40",
  },
  {
    label: "Hedwik's bar",
    type: "club",
    thumbnail: "https://picsum.photos/40/40",
  },
  {
    label: "Unico mexican bar",
    type: "club",
    thumbnail: "https://picsum.photos/40/40",
  },
  {
    label: "O2 arena",
    type: "club",
    thumbnail: "https://picsum.photos/40/40",
  },
];

export default function SearchModal({
  defaultOpen,
  defaultValue,
  onClose,
  className,
}: SearchModalProps) {
  const { t } = useTranslation();

  const searchTabs: TabItemProps[] = [
    {
      label: t("components.searchModal.all"),
      className: "px-8",
      value: "all",
    },
    {
      label: t("components.searchModal.clubs"),
      className: "px-8",
      value: "clubs",
    },
    {
      label: t("components.searchModal.events"),
      className: "px-8",
      value: "events",
    },
  ];

  const [open, setOpen] = useState<boolean>(defaultOpen || false);
  const [result, setResult] = useState<SearchResult[]>(mockSearch);

  const [query, setQuery] = useState<string>(defaultValue || "");
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const queryDebounce = useDebounce(query, 500);
  const [queryType, setQueryType] = useState<TabItemProps>(searchTabs[0]);

  const [showOptions, setShowOptions] = useState<{
    events: boolean;
    clubs: boolean;
  }>({ events: true, clubs: true });

  const handleClose = () => {
    if (onClose) onClose();
    setOpen(false);
  };

  const handleShowOptionsChange = (e: "clubs" | "events") => {
    setShowOptions((prev) => ({ ...prev, [e]: !prev[e] }));
  };

  useEffect(() => {
    if (query) {
      setResult(
        mockSearch.filter((item) =>
          item.label.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setResult(mockSearch);
    }
  }, [queryDebounce]);

  if (open)
    return (
      <div
        className={
          "w-full h-screen fixed bg-[#F0F0F0] top-0 left-0 overflow-y-auto"
        }
      >
        <div className={"absolute top-[30px] right-[30px]"}>
          <button
            className={"p-3 flex justify-center items-center text-gray-500"}
          >
            <CloseRoundedIcon
              sx={{ fontSize: "30px" }}
              onClick={() => handleClose()}
            />
          </button>
        </div>

        <div className={"w-full mt-[150px]"}>
          <div className={"px-[80px]"}>
            <input
              type={"text"}
              value={query}
              onChange={handleQueryChange}
              placeholder={t("components.searchModal.placeholder")}
              className={
                "text-[30px] bg-transparent border-none w-full outline-none text-gray-600 focus:border-none"
              }
            />
          </div>
          <div className={"my-[20px]"}>
            <div className={"px-[80px]"}>
              <Tabs
                tabs={searchTabs}
                defaultSelected={queryType}
                onChange={(e: TabItemProps) => setQueryType(e)}
              />
            </div>
          </div>
        </div>
        <div
          className={`w-full mt-[150px] ${
            queryType.value === "all" || queryType.value === "events"
              ? "block"
              : "hidden"
          } `}
        >
          <div
            className={
              "w-full flex justify-between items-center p-3 px-[80px] bg-gray-200"
            }
          >
            <p className={"text-gray-400 text-[20px] font-medium"}>
              {t("components.searchModal.events")}
            </p>
            <div
              className={"text-gray-400 cursor-pointer"}
              onClick={() => handleShowOptionsChange("events")}
            >
              {showOptions.events ? (
                <KeyboardArrowUpRoundedIcon />
              ) : (
                <KeyboardArrowDownRoundedIcon />
              )}
            </div>
          </div>
          <div
            className={
              "w-full px-[80px] mt-[50px] max-h-[400px] overflow-y-auto"
            }
          >
            {result.filter((e) => e.type === "event").length === 0 && (
              <div className={"text-[25px] text-center text-gray-300"}>
                {t("components.searchModal.notFound")}
              </div>
            )}
            {showOptions.events &&
              result
                .filter((e) => e.type === "event")
                .map((item, index) => (
                  <div
                    className={
                      "w-full flex items-center gap-[20px] hover:text-primary cursor-pointer text-gray-500 border-b border-b-gray-200 py-[20px]"
                    }
                    key={`events-search-${index}`}
                  >
                    {item.thumbnail ? (
                      <Image
                        src={item.thumbnail || ""}
                        alt={"search-result-thumbail"}
                        width={40}
                        height={40}
                      />
                    ) : (
                      <div className={"w-[40px] h-[40px] bg-transparent"} />
                    )}
                    <p className={""}>{item.label}</p>
                  </div>
                ))}
          </div>
        </div>

        <div
          className={`w-full mt-[150px] ${
            queryType.value === "all" || queryType.value === "clubs"
              ? "block"
              : "hidden"
          } `}
        >
          <div
            className={
              "w-full flex justify-between items-center p-3 px-[80px] bg-gray-200"
            }
          >
            <p className={"text-gray-400 text-[20px] font-medium"}>
              {t("components.searchModal.clubs")}
            </p>
            <div
              className={"text-gray-400 cursor-pointer"}
              onClick={() => handleShowOptionsChange("clubs")}
            >
              {showOptions.clubs ? (
                <KeyboardArrowUpRoundedIcon />
              ) : (
                <KeyboardArrowDownRoundedIcon />
              )}
            </div>
          </div>
          <div className={"w-full px-[80px] mt-[50px] max-h-[400px]"}>
            {result.filter((e) => e.type === "club").length === 0 && (
              <div className={"text-[25px] text-center text-gray-300"}>
                {t("components.searchModal.notFound")}
              </div>
            )}
            {showOptions.clubs &&
              result
                .filter((e) => e.type === "club")
                .map((item, index) => (
                  <div
                    className={
                      "w-full flex items-center gap-[20px] hover:text-primary cursor-pointer text-gray-500 border-b border-b-gray-200 py-[20px]"
                    }
                    key={`events-search-${index}`}
                  >
                    {item.thumbnail ? (
                      <Image
                        src={item.thumbnail || ""}
                        alt={"search-result-thumbail"}
                        width={40}
                        height={40}
                      />
                    ) : (
                      <div className={"w-[40px] h-[40px] bg-transparent"} />
                    )}
                    <p className={""}>{item.label}</p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    );
}
