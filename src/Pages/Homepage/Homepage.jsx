import React from 'react'
import ReactImageGallery from 'react-image-gallery'
import "./Homepage.css"
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "public/Actor.jpg",
    thumbnail: "public/Actor.jpg",
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
    original: "public/Gurdas-Mann.jpg",
    thumbnail: "public/Gurdas-Mann.jpg",
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
    <div style={{display: "flex", flexDirection: "row-reverse", marginTop: "100px", justifyContent: "space-evenly"}}>
      <div style={{height: "500px", width: "600px"}}>
      <ReactImageGallery items={images} showBullets={true} showThumbnails={true} showPlayButton={false} showFullscreenButton={false}/>
      </div>
      <div>
      <h1>Gulshan Radio 106.9FM</h1>
      <h2>Live from the heart of Wolverhampton</h2>
      </div>
    </div>
  )
}
