import React, { useState } from 'react'
import "./LinkButton.css"
import { useNavigate } from 'react-router-dom';




export default function LinkButton({setIsOpen, destination, linkText}) {

    const [isActive, setIsActive] = useState(false);

    const navigate = useNavigate()


  return (
    <>
      <button className={`${isActive && 'active'}`} onClick={() => {setIsOpen(false); setIsActive(true); navigate(`${destination}`)}}>{linkText}</button>

    </>
  )
}
