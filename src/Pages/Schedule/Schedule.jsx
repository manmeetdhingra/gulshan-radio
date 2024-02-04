import React from 'react'
import "./Schedule.css"
import { useNavigate } from 'react-router-dom'


export default function Schedule() {

  const navigate = useNavigate();

  const monday = () => {
    navigate("/schedule/monday")
  }
  
  const tuesday = () => {
    navigate("/schedule/tuesday")
  }

  const wednesday = () => {
    navigate("/schedule/wednesday")
  }

  const thursday = () => {
    navigate("/schedule/thursday")
  }

  const friday = () => {
    navigate("/schedule/friday")
  }

  const saturday = () => {
    navigate("/schedule/saturday")
  }

  const sunday = () => {
    navigate("/schedule/sunday")
  }

  return (
    <div className='background-img'>
    <div className='schedule-container'>
    <div className='schedulebtn-container'>
      <h2>Weekly Schedule:</h2>
      <button onClick={monday}>Monday</button>
      <button onClick={tuesday}>Tuesday</button>
      <button onClick={wednesday}>Wednesday</button>
      <button onClick={thursday}>Thursday</button>
      <button onClick={friday}>Friday</button>
      <button onClick={saturday}>Saturday</button>
      <button onClick={sunday}>Sunday</button>
    </div>
    </div>
    </div>
  )
}
