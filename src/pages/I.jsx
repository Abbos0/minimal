import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from "../styles/i.module.css"
import assets_1 from "../assets/i_img1.jpg"
import assets_2 from "../assets/i_img2.jpg"
import assets_3 from "../assets/i_img3.jpg"
import assets_4 from "../assets/i_img4.jpg"
import assets_5 from "../assets/i_img5.jpg"
import assets_6 from "../assets/i_img6.jpg"

import 'swiper/css/pagination';

import '../App.css'

import { Pagination } from 'swiper/modules';

const I= () =>  {
  return (  <> <Swiper pagination={{dynamicBullets: true,}} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className={styles.card}>
              <p>“I love these guys! They did a great job. I would recommend them to anyone.” </p>
              <img src={assets_1} alt="fdfd" />
              <h2>JULIUS VON UBERSTIEN</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <p>“Elexis Corp. has grown immensely with the help of Minimal.” </p>
              <img src={assets_2} alt="fdfd" />
              <h2>RACHEL STAMOS</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <p>“I'm working with these guys from now on!”</p>
              <img src={assets_3} alt="fdfd" />
              <h2>JOHN SMITH</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <p>“Top-notch job. Couldn't have asked for better design and photography.”</p>
              <img src={assets_4} alt="fdfd" />
              <h2>PHIL JOHNSON</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <p>“Top-notch job. Couldn't have asked for better design and photography.”</p>
              <img src={assets_5} alt="fdfd" />
              <h2>Leonardo DiCaprio</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <p>“Top-notch job. Couldn't have asked for better design and photography.”</p>
              <img src={assets_6} alt="fdfd" />
              <h2>Eva Elfia</h2>
            </div>
          </SwiperSlide>
      </Swiper>
    </>
  );
}

export default I
