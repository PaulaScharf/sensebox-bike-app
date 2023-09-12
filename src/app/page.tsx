"use client";
import ConnectionSelection from "@/components/Home/ConnectionSelection";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Welcome from "@/components/Wizard/Welcome";
import OpenSenseMapLogin from "@/components/Wizard/OpenSenseMapLogin";
import SelectDevice from "@/components/Wizard/SelectDevice";
import { useState } from "react";

export default function Home() {
  const [boxes, setBoxes] = useState([]);

  return (
    <Swiper
      spaceBetween={50}
      modules={[Navigation]}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="flex text-center h-full justify-center"
    >
      <SwiperSlide>
        <Welcome />
      </SwiperSlide>
      <SwiperSlide>
        <OpenSenseMapLogin />
      </SwiperSlide>
      <SwiperSlide>
        <SelectDevice />
      </SwiperSlide>
      <SwiperSlide>
        <ConnectionSelection />
      </SwiperSlide>
    </Swiper>
  );
}
