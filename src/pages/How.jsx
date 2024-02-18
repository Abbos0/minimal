import React from 'react';
import styles from "../styles/how.module.css";
import assets_1 from "../assets/how.img1.png"
import assets_2 from "../assets/how.img2.png"
import assets_3 from "../assets/how.img3.png"
const How = () => {
  return (
    <div className={styles.mainhow} id='how'>
      <div className={styles.how}>
        <h6>HOW WE MAKE BRANDS THRIVE</h6>
        <p>__________</p>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cards}>
            <img src={assets_1} alt="alt-text-1" />
          </div>
            <h1>SET A TARGET</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cards}>
            <img src={assets_2} alt="alt-text-2" />
          </div>
            <h1>DESIGN A SOLUTION</h1>
            <p>Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. </p>
        </div>  
        <div className={styles.card}>
          <div className={styles.cards}>
            <img src={assets_3} alt="alt-text-3" />
          </div>
            <h1>TRACK THE PROGRESS</h1>
            <p>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
        </div>
      </div>
    </div>
  );
}

export default How;