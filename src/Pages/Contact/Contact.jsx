import React from 'react'
import "./Contact.css"
import Lottie from 'lottie-react'
import animationData from '/Users/msingh/gulshan-radio/public/phone.json';
import animationData1 from '/Users/msingh/gulshan-radio/public/email.json';
import animationData2 from '/Users/msingh/gulshan-radio/public/location.json';


export default function Contact() {
  return (
    <div className='wolves-image'>
      <div className='form-container'>
        
       <h1>Let's Connect !</h1>
      <Lottie style={{width: "150px"}} animationData={animationData}/>
      <p>
        Mobile: +44 793 137 3613<br/><br/>
        Office: +44 1902 681 655<br/><br/>
        Studio: +44 1902 509 933<br/><br/>
      </p>
      <Lottie style={{width: "150px", marginTop: "30px"}} animationData={animationData1}/>

      <button className='contact-btn'>E-mail</button>
      <Lottie style={{width: "150px", marginTop: "30px"}} animationData={animationData2} />
      
      <p style={{width: "300px", marginTop: "30px", marginBottom: "30px"}}>Address: 715-C, Parkfield Road <br /> Wolverhampton, West Midlands, WV4 6EE</p>

      
    </div>
    </div>
  )
}
