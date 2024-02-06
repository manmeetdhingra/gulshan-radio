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
    <div >
    <div className='home-container' 
    
    // style={{display: "flex", flexDirection: "row-reverse", marginTop: "100px", justifyContent: "space-evenly"}}
    
    >
      <div  style={{height: "500px", width: "600px"}}>
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
