'use client';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { color } from '@/components/common/Theme'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
]



export default function ImageSlider() {
  return (
    <MainContainer>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        autoplay={{ delay: 2000 }}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <MainImage src={src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </MainContainer>
  );
}



const MainImage = styled.img`
  height: 600px;
  width: auto;
  object-fit: contain;
  display: block;
  border-radius: 12px;
`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
  width: 70vw;
  @media screen and (max-width: 1000px) {
    width: 90vw;
  }
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 400px;
    height: 600px;
    img {
      box-shadow: 0px 0px 20px -1px ${color.green};
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`