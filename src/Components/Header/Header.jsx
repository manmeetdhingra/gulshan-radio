import React, { useState } from 'react'
import "./Header.css"
import { useNavigate, NavLink } from 'react-router-dom'
import LinkButton from '../LinkButton/LinkButton';




export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate()

  return (
    <div style={{display: "flex", justifyContent: "space-between", width: 'auto'}} className='header-container'>
        <div><img src='/GulshanRadio-UPDATE3-03(1).png' onClick={() => navigate("/")} style={{cursor: "pointer", marginLeft: "5px"}}/></div>
        <div className={`button-container ${isOpen && "open"}`} >
        <button onClick={() => {setIsOpen(false); navigate("/")}}>Home</button>
        <button onClick={() => {setIsOpen(false); navigate("/schedule")}}>Schedule</button>
        <button onClick={() => {setIsOpen(false); navigate("/presenters")}}>Presenters</button>
        <button onClick={() => {setIsOpen(false); navigate("/gallery")}}>Gallery</button>
        <button onClick={() => {setIsOpen(false); navigate("/about")}}>About Us</button>
        <button onClick={() => {setIsOpen(false); navigate("/contact")}}>Contact Us</button>

        <a onClick={() => setIsOpen(false)} href="/GR-MediaPack.pdf" download={"GR-MediaPack.pdf"}><button>Media Pack</button></a>
        </div>

        <div className='live'><a onClick={() => setIsOpen(false)} href="https://radio-live-uk.com/gulshan" target='blank'><button>Listen LIVE</button></a></div>

        <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => {setIsOpen(!isOpen)}}>
          <div className="bar">
          </div>
        </div>
    </div>
  )
}

