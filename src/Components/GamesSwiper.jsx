import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import '../css/swiper2.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules'
import BestRatedGameCard from './BestRatedGameCard'

const GamesSwiper = ({ data }) => {
  return (
    <div className='mx-auto w-[90%]'>
      <div className='bg-base-100 mt-14 hero'>
        <div className='text-center hero-content'>
          <div className='max-w-xl'>
            <h1 className='font-bold text-2xl md:text-3xl'>Top-Rated Games</h1>
            <p className='py-6'>
            Experience the pinnacle of gaming with our Top-Rated Games section. Here, you’ll find the highest-rated games as voted by our community, showcasing exceptional gameplay, stunning graphics, and captivating stories. Dive into the best of the best and discover your next favorite game.
            </p>
          </div>
        </div>
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='my-10 mySwiper swiper-padding'
      >
        {data.map((card, index) => (
          <SwiperSlide key={index}>
            <BestRatedGameCard data={card}></BestRatedGameCard>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-5.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-6.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-7.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-8.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://swiperjs.com/demos/images/nature-9.jpg' />
        </SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default GamesSwiper
