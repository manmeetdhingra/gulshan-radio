import React from 'react'
import "./Footer.css"
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='text-container'>
        <a href="/GRprivacy-policy.pdf" download={"GRprivacy-policy.pdf"} style={{color: "white"}}><h3>Terms & Conditions</h3></a>
          <div >
            
          <a href="https://www.facebook.com/GulshanRadioWolverhampton" target='blank' style={{color: "white"}}>
            
            <IoLogoFacebook style={{paddingRight: "10px", fontSize: "25px"}}/>
            
            </a>
          <a href="https://www.instagram.com/gulshanradio/" target='blank' style={{color: "white"}}>
            
            <FaInstagramSquare style={{fontSize: "24px"}} />
            
            </a>
          </div>

        <h3>Created by <a href="https://manmeetdhingra.com" target='blank' style={{color: "white"}}>Manmeet Dhingra</a></h3>

      </div>
    </div>
  )
}
