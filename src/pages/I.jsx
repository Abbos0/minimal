import React, { useRef, useState } from 'react';
import styles from "../styles/i.module.css"
import assets_1 from "../assets/i_img1.jpg"
import assets_logo from "../assets/learning.png"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../App.css';

// import required modules
import { Pagination } from 'swiper/modules';


const I = () => {
  return (
   
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className={styles.reviews}>
        
    <div className={styles.length}>
      <div className={styles.card}>
          <p>“I love these guys! They did a great job. I would recommend them to anyone.” </p>
            <img src={assets_1} alt="fdfd" />
          <h2>JULIUS VON UBERSTIEN</h2>
      </div>
    </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.reviews}>

    <div className={styles.length}>
      <div className={styles.card}>
          <p>“I love these guys! They did a great job. I would recommend them to anyone.” </p>
            <img src={assets_1} alt="fdfd" />
          <h2>JULIUS VON UBERSTIEN</h2>
      </div>
      </div>
    </div>
    </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    
  )
}

export default I
