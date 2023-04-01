import React from "react";

import { Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
const HomeSlider = () => {
  return (
    <>
      {" "}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log()}
        onSwiper={(swiper) => console.log()}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="https://onemg.gumlet.io/73bedd08-8ec0-47ce-a68e-c5d3dfda0e4b_1672651378.png?w=1013&h=250&format=auto"
            alt="0"
            width="100%"
            height={{
              base: "112px",
              md: "150px",
              lg: "212px",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="https://onemg.gumlet.io/5f1c29c8-9d81-4240-9458-fe18de1000af_1665467859.png?w=1013&h=250&format=auto"
            alt="0"
            width="100%"
            height={{
              base: "112px",
              md: "150px",
              lg: "212px",
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/69fafdfb-41ab-400d-8707-454a8e976205.png"
            alt="0"
            width="100%"
            height={{
              base: "112px",
              md: "150px",
              lg: "212px",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/290b5970-99ed-4022-b29e-095ad9b40199.png"
            alt="0"
            width="100%"
            height={{
              base: "112px",
              md: "150px",
              lg: "212px",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/56d71eb8-f343-417c-b3ea-7a9717e7303f.png"
            alt="0"
            width="100%"
            height={{
              base: "112px",
              md: "150px",
              lg: "212px",
            }}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/49a3b635-a507-45a4-a54b-0b791e19e536.png"
            alt="0"
            width="100%"
            height={{
              base: "112px",
              md: "150px",
              lg: "212px",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
