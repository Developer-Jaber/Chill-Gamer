import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


import '../css/swiper.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const Carousel = () => {
  const progressCircle = useRef(null)
  const progressContent = useRef(null)
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
  }
  return (
    <div className='mx-auto w-9/12 h-[500px]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className='mySwiper'
      >
        <SwiperSlide><img src="https://i.ibb.co/3yGHMF1/game-Banner2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/FKcprrz/game-Banner1.jpg"  alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/GVBG1sX/banner5.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/SX4tjPZ/banner4.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/qdQdrxG/banner3.jpg" alt="" /></SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        <div className='autoplay-progress' slot='container-end'>
          <svg viewBox='0 0 48 48' ref={progressCircle}>
            <circle cx='24' cy='24' r='20'></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  )
}

export default Carousel
