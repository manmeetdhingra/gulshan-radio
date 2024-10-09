import React from 'react'
import './Volunteer.css'

export default function About() {
  return (
    <div style={{display: "flex", flexDirection: "column", textAlign: "center"}}>
    <h2 style={{fontSize: "45px",  }}>Volunteer</h2>
    <div className='volunteer-container'>
      <img src="./Volunteer.jpg" alt="radio-volunteer" />
      <p>At Gulshan Radio, we rely on the passion and energy of volunteers from our local community. Whether you're interested in being on the air or helping behind the scenes, there’s a place for you!<br /><br />We offer exciting on-air opportunities, such as co-hosting shows, sharing local news, or spinning your favorite tracks. If you prefer working off the mic, you can assist with off-air roles like event planning, managing social media, helping with technical setup, or supporting fundraising efforts.<br /><br />Volunteering with us is a fun way to learn new skills, connect with like-minded people, and make a difference in your community. Come be a part of the heartbeat of Gulshan Radio!<br /><br />Click the Volunteer button below and send us your details now!</p>
      <a className='volunteer-btn' href='mailto:info@gulshanradio.co.uk'>Volunteer!</a>
    </div>
    </div>
  )
}
