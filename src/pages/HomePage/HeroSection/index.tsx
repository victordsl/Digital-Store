import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/swiper-bundle.css'
import 'swiper/css/pagination'

import Banner from '@/components/Banner'

import purpleSneaker from '@/assets/purple-sneaker.png'
import whiteSneaker from '@/assets/white-sneaker.png'
import brownSneaker from '@/assets/brown-sneaker.png'
import blackSneaker from '@/assets/black-sneaker.png'

export const HeroSection = () => {
  const images = [purpleSneaker, whiteSneaker, brownSneaker, blackSneaker]

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Banner image={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
