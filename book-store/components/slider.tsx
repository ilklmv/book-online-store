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
          <img src="/cart-icon.png" alt="Cart Icon" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cart-icon.png" alt="Cart Icon" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cart-icon.png" alt="Cart Icon" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
