import React from 'react'
import styles from "../styles/let.module.css"

import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import {FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Let = () => {
  return (
    <div className={styles.let} id='let'>
        <div className={styles.recentt}>
            <h6>LET'S GET IN TOUCH</h6>
            <hr />
        </div>
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.cards}>
                    <i><IoLocationOutline /></i>
                    <h1>MEET US IN PERSON</h1>
                    <p>8776 Juniper Street</p>
                    <p>Unit #204</p>
                    <p>Merriweather, Ontorio</p>
                    <p>Canada</p> 
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cards}>
                    <i><MdOutlineMail /></i> 
                    <h1>THE TRADITIONAL WAY</h1>
                <div className={styles.email}>
                    <h3>Email us</h3>
                    <h4>contact@minimal.com</h4>
                    <p>Contact form</p>
                    <h4>Scroll down</h4>  
                </div>
                </div>
            </div>  
            <div className={styles.card}>
                <div className={styles.cards}>
                    <i><FaRegHeart /></i>
                </div>
                 <h1>LET'S GET SOCIAL</h1>
                <div className={styles.heart}>
                    <i><FaFacebookF/>  Facebook</i>
                    <i><FaTwitter/>  Twitter </i>
                    <i><FaLinkedinIn/>  LinkedinIn </i>  
                </div>
            </div>
        </div>
    </div>
  )
}
export default Let