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
            <p>Sajjri Sawer</p>
            <p>Punjabi Junction</p>
            <p>Gallan with Sarpanch</p>
            <p>Sukhmani Sahib</p>
            <p>Mehfile Gazal</p>
            <p>Rehras Sahib</p>
            <p>Old Is Gold</p>
        </div>
        <div className='pres-container'>
            <p style={{fontSize: "x-large", textDecoration: "underline"}}>Presenter: </p>
            <p>Daljit</p>
            <p>Sarghi</p>
            <p>Sarpanch</p>
            <p>Live</p>
            <p>Aysha</p>
            <p>Live</p>
            <p>Balbir</p>
        </div>
    </div>
    <div className='sch-button'><button onClick={handleClick}>Go back</button></div>
    </div>
  )
}





 
 

 


