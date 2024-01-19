import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../swiper.css";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { heroSlider } from "../data";

const HeroSlider = () => {
  return (
    <Swiper
      className="heroSlider"
      navigation={true}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={true}
      loop={true}
      modules={[Pagination, Navigation, Autoplay]}
    >
      {heroSlider.map((slide, idx) => {
        const { title, subtitle, image, buttonText } = slide;
        return (
          <SwiperSlide key={idx}>
            <div className="grid grid-cols-1 lg:grid-cols-2 p-20 gap-10 lg:gap-0">
              <div className="flex flex-col text-center lg:text-left justify-center items-start gap-10 lg:max-w-[550px]">
                <h2 className="leading-[80px] text-7xl font-bold">{title}</h2>
                <p>{subtitle}</p>
                <button className="hover:bg-orange-hover px-5 py-4 bg-orange rounded-3xl text-white mx-auto lg:mx-0 mt-5">
                  {buttonText}
                </button>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <img src={image.type} alt="" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
