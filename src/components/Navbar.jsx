

import React, { useEffect, useState } from 'react'
import Logo from "../assets/logo.jfif"
import { FaInstagram, FaTelegram , FaBars } from "react-icons/fa";
import styles from "../styles/navbar.module.css"




const Navbar = () => {
    const [toggle,setToggle] = useState(true)
    console.log(toggle);

    const [scroll, setScroll] = useState(true)


    const handleScroll = () => {
      const scrollPosition = window.scrollY; 
      console.log(scrollPosition);
      if(scrollPosition > 200){
        setScroll(true)
      }
      else{
        setScroll(false)
      }
    };


    useEffect(()=> {
      handleScroll();
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll)
      };
    },[])

  return (


    <div className={styles.nav}>
      <div className={scroll ? styles.navbar : styles.navbarScroll}>
        <div className={styles.logo}>
            <img src={Logo} alt='Logo'/>
            <br/>
            <p>Minimal</p>
        </div>
        
      <div className={toggle ? styles.navItems : styles.toggle}>
        <ul>
            <li><a href='#' >PROCESS</a></li>
            <li><a href='#' >PROJECTS</a></li>
            <li><a href='#' >TEAM</a></li>
            <li><a href='#' >CONTACT</a></li>
        </ul>
      </div>

        <div className={styles.icon}>
          <i><FaInstagram /></i>
          <i><FaTelegram /></i>
          <i className={styles.bar} onClick={()=>setToggle(!toggle)}><FaBars /></i>
      </div>
    </div>
    </div>
  )
}

export default Navbar
