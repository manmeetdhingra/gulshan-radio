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
            <p>Vasde Vehde</p>
            <p>Healthy Tips</p>
            <p>Friday Fever</p>
            <p>Drive time Show</p>
            <p>Rehras Sahib - Path</p>
            <p>Mehfil Mittran Di</p>
        </div>
        <div className='pres-container'>
            <p style={{fontSize: "x-large", textDecoration: "underline"}}>Presenter: </p>
            <p>Gulshan Dhingra</p>
            <p>Avneet Kaur/Heer</p>
            <p>Kully Chana</p>
            <p>Raj Dhiman</p>
            <p>Jagdeep</p>
            <p>Live</p>
            <p>Khushi</p>
        </div>
    </div>
    <div className='sch-button'><button onClick={handleClick}>Go back</button></div>
    </div>
  )
}







 
 

 


