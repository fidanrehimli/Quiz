import React from 'react'
import "./footer.css"
import { CiHeart } from "react-icons/ci";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
    <div className='footerleft'>
        <ul>
            <li>Blog</li>
            <li>FAQ's</li>
            <li>Contact us</li> 
        </ul>
        <p>©2018 All Rights Reserverd. This template is made with  <CiHeart style={{color:"red",fontSize:"15px"}} />by <span style={{color:"red",fontWeight:"500"}} className='color'>Colorlib </span> </p>
    </div>
    <div className='icons'>
    <GrFacebookOption />
    <FaTwitter />
    <FaInstagram />
    <FaSkype />
    <FaPinterest />
    </div>
    </div>
  )
}

export default Footer