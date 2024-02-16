import React from 'react'
import styles from "../styles/recent.module.css"
import assets_1 from "../assets/recent_img1.jpeg"
import assets_2 from "../assets/recent_img2.jpeg"
import assets_3 from "../assets/recent_img3.jpg"
import assets_4 from "../assets/recent_img4.jpg"
import assets_5 from "../assets/recent_img5.jpg"
import assets_6 from "../assets/recent_img6.jpg"
import assets_7 from "../assets/recent_img7.jpg"
import assets_8 from "../assets/recent_img8.jpg"
import assets_9 from "../assets/recent_img9.jpg"
const Recent = () => {
  return (
    <div className={styles.recent}>
        <div className={styles.recentt}>
            <h6>RECENT PROJECTS</h6>
            <p>__________</p>
        </div>
    <div className={styles.mainRecent}>
        <div className={styles.card}>
            <div className={styles.cards}>
                <img src={assets_1} alt="alt-text-2" />
            </div>
                <h1>PATH</h1>
                <p>Photography</p>
      </div> 
      <div className={styles.card}>
            <div className={styles.cards}>
                <img src={assets_2} alt="alt-text-2" />
            </div>
            <h1>DARKNESS</h1>
                <p>Photography</p>
      </div> 
      <div className={styles.card}>
            <div className={styles.cards}>
                <img src={assets_3} alt="alt-text-2" />
            </div>
            <h1>WAVES</h1>
                <p>Photography</p>
      </div> 
      <div className={styles.card}>
            <div className={styles.cards}>
                <img src={assets_4} alt="alt-text-2" />
            </div>
            <h1>DROPS</h1>
            <p>Photography</p>
      </div> 
      <div className={styles.card}>
            <div className={styles.cards}>
                <img src={assets_5} alt="alt-text-2" />
            </div>
            <h1>OCEAN</h1>
                <p>Photography</p>
      </div> 
      <div className={styles.card}>
            <div className={styles.cards}>
                <img src={assets_6} alt="alt-text-2" />
            </div>
            <h1>TOWN</h1>
                <p>Photography</p>
      </div> 
      <div className={styles.card}>
            <div className={styles.cards}>
                <img src={assets_7} alt="alt-text-2" />
            </div>
            <h1>MOUNTAIN</h1>
            <p>Photography</p>
      </div> 
      <div className={styles.card}>
            <div className={styles.cards}>
                <img src={assets_8} alt="alt-text-2" />
            </div>
            <h1>CAMERA</h1>
            <p>Photography</p>
      </div> 
      <div className={styles.card}>
            <div className={styles.cards}>
                <img src={assets_9} alt="alt-text-2" />
            </div>
            <h1>WOODS</h1>
            <p>Photography</p>
      </div> 
    </div>
    </div>
  )
}

export default Recent
