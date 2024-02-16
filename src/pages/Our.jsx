import React from 'react'
import styles from "../styles/our.module.css"

import {FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import assets_1 from "../assets/our_img1.png"
import assets_2 from "../assets/our_img2.png"
import assets_3 from "../assets/our_img3.png"
import assets_4 from "../assets/our_img4.png"
const Our = () => {
  return (
    <div>
      <div className={styles.recentt}>
            <h6>OUR TEAM</h6>
            <p>__________</p>
        </div>
    <div className={styles.mainOur}>
        <div className={styles.card}>
            <div className={styles.cards}>
                <img src={assets_1} alt="alt-text-2" />
            </div>
                <h1>RON SWANSON</h1>
                <p>Founder</p>
      </div> 
      <div className={styles.card}>
            <div className={styles.cards}>
                <img src={assets_2} alt="alt-text-2" />
            </div>
                <h1>JULIA DEPISH</h1>
                <p>Marketing</p>
      </div> 
      <div className={styles.card}>
            <div className={styles.cards}>
                <img src={assets_3} alt="alt-text-2" />
            </div>
            <h1>DANNY DEVRY</h1>
                <p>Designer</p>
      </div> 
      <div className={styles.card}>
            <div className={styles.cards}>
                <img src={assets_4} alt="alt-text-2" />
            </div>
                <h1>LISA SMITH</h1>
                <p>Developer</p>
                <div className={styles.icon}>
                    <i><FaTwitter /></i>
                    <i><MdEmail/></i>
                </div>
      </div> 
      </div>
    </div>
  )
}

export default Our
