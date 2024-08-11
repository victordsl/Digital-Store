import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Thumbs, FreeMode } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/pagination'

import { IProductCard } from '@/interface'

const Gallery: React.FC<Pick<IProductCard, 'image'>> = ({ image }) => {
  const thumbsSwiper = useRef<any>(null)

  const bgColors = [
    'bg-productBg',
    'bg-productBg1',
    'bg-productBg2',
    'bg-productBg3',
    'bg-productBg4',
  ]

  return (
    <div className="flex flex-col w-full h-full gap-2">
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        thumbs={{ swiper: thumbsSwiper.current }}
        modules={[Pagination, Navigation, Thumbs]}
        className="flex items-center justify-center w-full"
      >
        {bgColors.map((bgColor, index) => (
          <SwiperSlide
            key={index}
            className={`flex items-center justify-center w-full h-full max-h-[500px] ${bgColor}`}
          >
            <img
              className="w-3/4 max-h-full object-contain cursor-pointer"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={(swiper) => (thumbsSwiper.current = swiper)}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="flex items-center justify-center w-full h-full max-h-[100px]"
      >
        {bgColors.map((bgColor, index) => (
          <SwiperSlide
            key={index}
            className={`flex items-center justify-center w-full h-full ${bgColor}`}
          >
            <img
              className="w-3/4 max-h-full object-contain cursor-pointer"
              src={image}
              alt={`Thumbnail ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Gallery
