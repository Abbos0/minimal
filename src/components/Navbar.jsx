
import React, { useEffect, useState } from 'react'

import Logo from "../assets/yulbars.png"

import { FaInstagram, FaTelegram , FaBars } from "react-icons/fa";

import styles from "../styles/navbar.module.css"

const Navbar = () => {
    const [toggle,setToggle] = useState(true)

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
            <p onClick={()=>setToggle(true)}><a href='#send'>Minimal</a></p>
        </div>
      <div className={toggle ? styles.navItems : styles.toggle}>
        <ul>
            <li onClick={()=>setToggle(true)}><a href='#how'>PROCESS</a></li>
            <li onClick={()=>setToggle(true)}><a href='#recent'>PROJECTS</a></li>
            <li onClick={()=>setToggle(true)}><a href='#our'>TEAM</a></li>
            <li onClick={()=>setToggle(true)}><a href='#let'>CONTACT</a></li>
        </ul>
      </div>
      <div className={styles.icon}>
        <i><a href="https://t.me/boss0_002"><FaTelegram/></a></i>
        <i><a href="https://www.instagram.com/abbos_boss002"><FaInstagram /></a></i>
      </div>
    </div>
  </div>
  )
}
export default Navbar