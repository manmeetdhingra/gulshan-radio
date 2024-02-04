import React from 'react'
import "../Days/Days.css"
import { useNavigate } from 'react-router-dom'

export default function Monday() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/schedule")
  }


  return (
    <div style={{height: "75vh"}}>
    <div className='sch-container'>
        <div className='time-container'>
            <p style={{fontSize: "x-large", textDecoration: "underline"}}>Time: </p>
            <p>8am to 10am</p>
            <p>10am to 12pm</p>
            <p>12pm to 2pm</p>
            <p>2pm to 4pm</p>
            <p>4pm to 6pm</p>
            <p>6pm to 7pm</p>
            <p>7pm to 9pm</p>
        </div>
        <div className='prog-container'>
            <p style={{fontSize: "x-large", textDecoration: "underline"}}>Programme: </p>
            <p>Happy Morning</p>
            <p>Mithdi Sawer</p>
            <p>Lehran</p>
            <p>App Ki Awaz</p>
            <p>Drive Time Show</p>
            <p>Rehras Sahib - Path</p>
            <p>Ek Shaam Mastani</p>
        </div>
        <div className='pres-container'>
            <p style={{fontSize: "x-large", textDecoration: "underline"}}>Presenter: </p>
            <p>Gulshan Dhingra</p>
            <p>Geet</p>
            <p>Deepa</p>
            <p>Lambaddar</p>
            <p>Heer</p>
            <p>Live</p>
            <p>Jeet Rattnam</p>
        </div>
    </div>
    <div className='sch-button'><button onClick={handleClick}>Go back</button></div>
    </div>
  )
}






 
 

 


