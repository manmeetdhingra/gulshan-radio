import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import "./Homepage.css"
import "react-image-gallery/styles/css/image-gallery.css";
import Lottie from 'lottie-react';
import animationData from '/Users/msingh/gulshan-radio/public/radio.json';

const images = [
  {
    original: "public/Actor.jpg",
    thumbnail: "public/Actor.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "public/Gurdas-Mann.jpg",
    thumbnail: "public/Gurdas-Mann.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "public/Sartaj.jpg",
    thumbnail: "public/Sartaj.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  
  {
    original: "public/Saleem.jpg",
    thumbnail: "public/Saleem.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "public/Nimrat.jpg",
    thumbnail: "public/Nimrat.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  }

  
]

export default function Homepage() {
  return (
    <>
    <div style={{display: "flex", flexDirection: "row-reverse", marginTop: "100px", justifyContent: "space-evenly"}}>
      <div style={{height: "500px", width: "600px"}}>
      <ReactImageGallery items={images} showBullets={true} showThumbnails={true} showPlayButton={false} showFullscreenButton={false}/>
      </div>
      <div className='main-container'>
      <h1>Gulshan Radio 106.9FM</h1>
      <h2>Live from the heart of Wolverhampton - <br />Bridging communities with a voice for Punjabi, English, Hindi and Urdu speakers in West Midlands and Beyond</h2>
      <Lottie style={{width: "250px", marginLeft: "100px"}} animationData={animationData}/>
      </div>


    </div>
    <div className='goals-container'>
      <h2>Our Goals</h2>
      <div style={{display: "flex", justifyContent: "space-evenly"}}>
      <p>Informative Content: <br/><br/>Delivering accurate, timely news, updates, and information about local events, weather, traffic, and community affairs to keep listeners informed.</p>
      <p>Entertainment and Cultural Representation: <br/><br/> Offering diverse programming that reflects the local culture, interests, and tastes of the community while providing entertainment, music, and content that resonates with local listeners.</p>
      <p>Community Engagement: <br/><br/> Fostering a sense of community by promoting local events, supporting local causes, and providing a platform for community members to share their stories and voices.</p>
      
      </div>
    </div>
  </>
  )
}
