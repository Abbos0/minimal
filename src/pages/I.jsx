import React from 'react'
import styles from "../styles/i.module.css"
import assets_1 from "../assets/i_img1.jpg"
import assets_logo from "../assets/learning.png"
const I = () => {
  return (
    <div className={styles.length}>
      <div className={styles.learning}>
        <img src={assets_logo} alt="learning" />
      </div>
      <div>
          <p>“I love these guys! They did a great job. I would recommend them to anyone.” </p>
          <img src={assets_1} alt="fdfd" />
          <h2>JULIUS VON UBERSTIEN</h2>
      </div>
    </div>
  )
}

export default I
