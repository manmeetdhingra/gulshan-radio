import React from 'react'
import "./Footer.css"
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='text-container'>
        <h3>Gulshan Radio ©</h3>
          <div >
          <IoLogoFacebook style={{paddingRight: "10px", fontSize: "25px"}}/>
          <FaInstagramSquare style={{fontSize: "24px"}} />
          </div>

        <h3>Created by Manmeet Dhingra</h3>

      </div>
    </div>
  )
}
