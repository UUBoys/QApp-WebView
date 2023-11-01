/* eslint-disable react/no-unused-prop-types */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable consistent-return */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDebounce } from "usehooks-ts";

import Tabs, { TabItemProps } from "@/modules/common/components/Tabs";

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

const SearchModal = ({
  defaultOpen,
  defaultValue,
  onClose,
}: SearchModalProps) => {
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
      <div className="fixed left-0 top-0 h-screen w-full overflow-y-auto bg-[#F0F0F0]">
        <div className="absolute right-[30px] top-[30px]">
          <button className="flex items-center justify-center p-3 text-gray-500">
            <CloseRoundedIcon
              sx={{ fontSize: "30px" }}
              onClick={() => handleClose()}
            />
          </button>
        </div>

        <div className="mt-[150px] w-full">
          <div className="px-[80px]">
            <input
              type="text"
              value={query}
              onChange={handleQueryChange}
              placeholder={t("components.searchModal.placeholder")}
              className="no-outline w-full border-none bg-transparent text-[35px] text-gray-600 outline-none focus:border-none"
            />
          </div>
          <div className="my-[20px]">
            <div className="px-[80px]">
              <Tabs
                tabs={searchTabs}
                defaultSelected={queryType}
                onChange={(e: TabItemProps) => setQueryType(e)}
              />
            </div>
          </div>
        </div>
        <div
          className={`mt-[150px] w-full ${
            queryType.value === "all" || queryType.value === "events"
              ? "block"
              : "hidden"
          } `}
        >
          <div className="flex w-full items-center justify-between bg-gray-200 p-3 px-[80px]">
            <p className="text-[20px] font-medium text-gray-400">
              {t("components.searchModal.events")}
            </p>
            <div
              className="cursor-pointer text-gray-400"
              onClick={() => handleShowOptionsChange("events")}
            >
              {showOptions.events ? (
                <KeyboardArrowUpRoundedIcon />
              ) : (
                <KeyboardArrowDownRoundedIcon />
              )}
            </div>
          </div>
          <div className="mt-[50px] max-h-[400px] w-full overflow-y-auto px-[80px]">
            {result.filter((e) => e.type === "event").length === 0 && (
              <div className="text-center text-[25px] text-gray-300">
                {t("components.searchModal.notFound")}
              </div>
            )}
            {showOptions.events &&
              result
                .filter((e) => e.type === "event")
                .map((item, index) => (
                  <div
                    className="flex w-full cursor-pointer items-center gap-[20px] border-b border-b-gray-200 py-[20px] text-gray-500 hover:text-primary"
                    key={`events-search-${index}`}
                  >
                    {item.thumbnail ? (
                      <Image
                        src={item.thumbnail || ""}
                        alt="search-result-thumbail"
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                    ) : (
                      <div className="h-[40px] w-[40px] bg-transparent" />
                    )}
                    <p className="">{item.label}</p>
                  </div>
                ))}
          </div>
        </div>

        <div
          className={`mt-[150px] w-full ${
            queryType.value === "all" || queryType.value === "clubs"
              ? "block"
              : "hidden"
          } `}
        >
          <div className="flex w-full items-center justify-between bg-gray-200 p-3 px-[80px]">
            <p className="text-[20px] font-medium text-gray-400">
              {t("components.searchModal.clubs")}
            </p>
            <div
              className="cursor-pointer text-gray-400"
              onClick={() => handleShowOptionsChange("clubs")}
            >
              {showOptions.clubs ? (
                <KeyboardArrowUpRoundedIcon />
              ) : (
                <KeyboardArrowDownRoundedIcon />
              )}
            </div>
          </div>
          <div className="mt-[50px] max-h-[400px] w-full px-[80px]">
            {result.filter((e) => e.type === "club").length === 0 && (
              <div className="text-center text-[25px] text-gray-300">
                {t("components.searchModal.notFound")}
              </div>
            )}
            {showOptions.clubs &&
              result
                .filter((e) => e.type === "club")
                .map((item, index) => (
                  <div
                    className="flex w-full cursor-pointer items-center gap-[20px] border-b border-b-gray-200 py-[20px] text-gray-500 hover:text-primary"
                    key={`events-search-${index}`}
                  >
                    {item.thumbnail ? (
                      <Image
                        src={item.thumbnail || ""}
                        alt="search-result-thumbail"
                        width={40}
                        height={40}
                        className="rounded-lg"
                      />
                    ) : (
                      <div className="h-[40px] w-[40px] bg-transparent" />
                    )}
                    <p className="">{item.label}</p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    );
};

export default SearchModal;
