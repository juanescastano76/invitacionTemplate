"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Props {}

function Slider(props: Props) {
  const {} = props;

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="/location/finca1.JPG"
            alt="Finca Los Pinos"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="/location/finca2.JPG"
            alt="Finca Los Pinos"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="/location/finca3.JPG"
            alt="Finca Los Pinos"
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
