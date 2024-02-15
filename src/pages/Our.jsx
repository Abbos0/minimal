import React from 'react'
import styles from "../styles/our.module.css"



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
                <h1>WOODS</h1>
                <p>Photography</p>
      </div> 
      <div className={styles.card}>
            <div className={styles.cards}>
                <img src={assets_2} alt="alt-text-2" />
            </div>
                <h1>WOODS</h1>
                <p>Photography</p>
      </div> 
      <div className={styles.card}>
            <div className={styles.cards}>
                <img src={assets_3} alt="alt-text-2" />
            </div>
                <h1>WOODS</h1>
                <p>Photography</p>
      </div> 
      <div className={styles.card}>
            <div className={styles.cards}>
                <img src={assets_4} alt="alt-text-2" />
            </div>
                <h1>WOODS</h1>
                <p>Photography</p>
      </div> 
      </div>
    </div>
  )
}

export default Our
