/* eslint-disable import/no-unresolved */

"use client";

import { NextPage } from "next";
// Import Swiper styles
import "swiper/css";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Ticket from "@/modules/common/components/Ticket";
import { useUserAdditionalDataStore } from "@/modules/common/stores/user-aditional-data-store";

const MyTickets: NextPage = () => {
  const { userOwnedTickets } = useUserAdditionalDataStore((set) => ({
    userOwnedTickets: set.userOwnedTickets,
  }));

  return (
    <div className="flex min-h-[100vh] w-full flex-col items-center justify-center gap-20 p-20 pt-52">
      <p className="flex  text-6xl font-semibold">
        Moje <div className="text-primary-500">Lístky</div>
      </p>
      <div className="flex w-full flex-col justify-center gap-6 rounded-xl bg-white  shadow-xl">
        <Swiper
          effect="cards"
          grabCursor
          modules={[EffectCards]}
          className="w-full"
        >
          {userOwnedTickets.map((ticket) => (
            <SwiperSlide>
              <Ticket className="!scale-[.7]" ticket={ticket} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MyTickets;
