import React, { useState } from 'react'
import "./Presenters.css"
import PresenterCard from '../../Components/PresenterCard/PresenterCard';

export default function Presenters() {

  const [presenters, setPresenters] = useState([

    {id: 1, name: "Avneet", coverImg: "/avneet.jpg"},
    {id: 2,name: "Aysha", coverImg: "/Aysha.jpeg"},
    {id: 3,name: "Deepa", coverImg: "/deepa.jpg"},
    {id: 4,name: "Geet Sangha", coverImg: "/Geet-Sangha.jpg"},
    {id: 5,name: "Guddi", coverImg: "/Guddi.jpeg"},
    {id: 6,name: "Harry", coverImg: "/harry.jpg"},
    {id: 7,name: "Heer", coverImg: "/heer.jpg"},
    {id: 8,name: "Jeet Rattnam", coverImg: "/Jeet-Rattnam.jpg"},
    {id: 9,name: "Khushi", coverImg: "/khushi.jpg"},
    {id: 10,name: "Kully Chana", coverImg: "/kully-chana.jpg"},
    {id: 11,name: "Lamberdar", coverImg: "/Lamberdar.jpg"},
    {id: 12,name: "Nindy", coverImg: "/nindy.jpg"},
    {id: 13,name: "Raj Dhiman", coverImg: "/raj-dhiman.jpg"},
    {id: 14,name: "Ruby", coverImg: "/Ruby.jpg"},
    {id: 15,name: "Satty Cheema", coverImg: "/Satty-Cheema-thumb.jpg"},
    {id: 16,name: "Savi", coverImg: "/savi.jpg"},
    {id: 17,name: "Sarpanch", coverImg: "/WhatsApp-Image-2022-09-09-at-13.28.25.jpeg"},
  ])



  return (
    <div>
      <PresenterCard presenters={presenters}/>
    </div>
  )
}
