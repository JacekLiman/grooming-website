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
            <div className="grid grid-cols-1 lg:grid-cols-2 p-20 pb-32  gap-20 lg:gap-0">
              <div className="flex flex-col gap-10 justify-center items-center lg:items-start text-center lg:text-left">
                <h2 className="lg:leading-[75px]  text-5xl lg:text-7xl font-bold">
                  {title}
                </h2>
                <p className="">{subtitle}</p>

                <button className="hover:bg-orange-hover px-5 py-4 bg-orange rounded-3xl text-white">
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
