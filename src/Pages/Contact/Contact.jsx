import React from 'react'
import "./Contact.css"
import Lottie from 'lottie-react'
import animationData from '../../Data/phone.json';
import animationData1 from '../../Data/email.json';
import animationData2 from '../../Data/location.json';


export default function Contact() {
  return (
    <div className='wolves-image'>
      <div className='form-container'>
        
       <h1>Let's Connect!</h1>
      <Lottie style={{width: "120px"}} animationData={animationData}/>
      <p>
        Mobile: +44 793 137 3613<br/><br/>
        Office: +44 1902 681 655<br/><br/>
        Studio: +44 1902 509 933<br/><br/>
      </p>
      <Lottie style={{width: "120px", marginTop: "30px"}} animationData={animationData1}/>

      <a className='contact-btn' href='mailto:info@gulshanradio.co.uk'>E-mail</a>
      <Lottie style={{width: "120px", marginTop: "30px"}} animationData={animationData2} />
      
      <p style={{width: "300px", marginTop: "30px", marginBottom: "30px"}}>Address: 715-C, Parkfield Road <br /> Wolverhampton, West Midlands, WV4 6EE</p>

      
    </div>
    </div>
  )
}
