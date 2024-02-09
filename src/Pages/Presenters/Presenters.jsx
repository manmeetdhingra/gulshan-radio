import React, { useState } from 'react'
import "./Presenters.css"
import PresenterCard from '../../Components/PresenterCard/PresenterCard';

export default function Presenters() {

  const [presenters, setPresenters] = useState([

    {id: 1, name: "Avneet", coverImg: "public/avneet.jpg"},
    {id: 2,name: "Aysha", coverImg: "public/Aysha.jpeg"},
    {id: 3,name: "Deepa", coverImg: "public/deepa.jpg"},
    {id: 4,name: "Geet Sangha", coverImg: "public/Geet-Sangha.jpg"},
    {id: 5,name: "Guddi", coverImg: "public/Guddi.jpeg"},
    {id: 6,name: "Harry", coverImg: "public/harry.jpg"},
    {id: 7,name: "Heer", coverImg: "public/heer.jpg"},
    {id: 8,name: "Jeet Rattnam", coverImg: "public/Jeet-Rattnam.jpg"},
    {id: 9,name: "Khushi", coverImg: "public/khushi.jpg"},
    {id: 10,name: "Kully Chana", coverImg: "public/kully-chana.jpg"},
    {id: 11,name: "Lamberdar", coverImg: "public/Lamberdar.jpg"},
    {id: 12,name: "Nindy", coverImg: "public/nindy.jpg"},
    {id: 13,name: "Raj Dhiman", coverImg: "public/raj-dhiman.jpg"},
    {id: 14,name: "Ruby", coverImg: "public/Ruby.jpg"},
    {id: 15,name: "Satty Cheema", coverImg: "public/Satty-Cheema-thumb.jpg"},
    {id: 16,name: "Savi", coverImg: "public/savi.jpg"},
    {id: 17,name: "Sarpanch", coverImg: "public/WhatsApp-Image-2022-09-09-at-13.28.25.jpeg"},

  ])



  return (
    <div>
      <PresenterCard presenters={presenters}/>
    </div>
  )
}
