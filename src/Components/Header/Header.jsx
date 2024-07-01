import React, { useState } from 'react'
import "./Header.css"
import { useNavigate, NavLink } from 'react-router-dom'
import LinkButton from '../LinkButton/LinkButton';
import Iframe from 'react-iframe'




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
        <button onClick={() => {setIsOpen(false); navigate("/privacy")}}>Privacy Policy</button>        

        <a onClick={() => setIsOpen(false)} href="/GR-MediaPack.pdf" download={"GR-MediaPack.pdf"}><button>Media Pack</button></a>
        </div>

        <Iframe url="https://cdn.voscast.com/player/player.php?host=s3.voscast.com&port=11510&mount=/stream&autoplay=true&icecast=false"
        height='30px'
        width='150px'
        styles={{display: 'flex', marginTop: '30px', margin: '35px 10px 0px 10px'}}

       />



        {/* <div className='live'><a onClick={() => setIsOpen(false)} href="https://station.voscast.com/6605402f68260/" target='blank'><button>Listen LIVE</button></a></div> */}

        <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => {setIsOpen(!isOpen)}}>
          <div className="bar">
          </div>
        </div>
    </div>
  )
}

