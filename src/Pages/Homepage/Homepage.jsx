import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import "./Homepage.css"
import "react-image-gallery/styles/css/image-gallery.css";
import Lottie from 'lottie-react';
import animationData from '../../Data/radio.json';

const images = [
  {
    original: "/Actor.jpg",
    thumbnail: "/Actor.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "/Gurdas-Mann.jpg",
    thumbnail: "/Gurdas-Mann.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "/Sartaj.jpg",
    thumbnail: "/Sartaj.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  
  {
    original: "/Saleem.jpg",
    thumbnail: "/Saleem.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "/Nimrat.jpg",
    thumbnail: "/Nimrat.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  }

  
]

export default function Homepage() {
  return (
    <div >
    <div className='home-container' >
      <div className='reactIMG-container'>
      <ReactImageGallery items={images} showBullets={true} showThumbnails={true} showPlayButton={false} showFullscreenButton={false}/>
      </div>
      <div className='main-container'>
      <h1>Gulshan Radio 106.9FM</h1>
      <h2>Live from the heart of Wolverhampton - <br />Bridging communities with a voice for Punjabi, English, Hindi and Urdu speakers in West Midlands and Beyond</h2>
      <Lottie className='Lottie' animationData={animationData}/>
      </div>


    </div>
    <div className='goals-container'>
      <h2>Our Goals</h2>
      <div className='card-container' style={{display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
      <p>Informative Content: <br/><br/>Committed to ensuring our audience stays well-informed by delivering up-to-the-minute news, information regarding local events, precise weather forecasts, and insightful coverage of community affairs.</p>
      <p>Entertainment and Cultural Representation: <br/><br/> Offering diverse programming that reflects the local culture, interests, and tastes of the community while providing entertainment, music, and content that resonates with local listeners.</p>
      <p>Community Engagement: <br/><br/> Fostering a sense of community by promoting local events, supporting local causes, and providing a platform for community members to share their stories and voices.</p>
      <p>Supporting Local Businesses: <br/><br/> Promoting and championing the growth of local businesses through strategic advertising, mutually beneficial partnerships, and community-focused initiatives that drive economic vitality and sustainability.</p>
      </div>
    </div>
  </div>
  )
}
