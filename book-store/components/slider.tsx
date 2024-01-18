import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../components/slider.module.css";

import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img className="banner" src="/banner_1.jpg" alt="Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner" src="/banner_2.jpg" alt="Banner 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="banner" src="/banner_3.jpg" alt="Banner 3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
