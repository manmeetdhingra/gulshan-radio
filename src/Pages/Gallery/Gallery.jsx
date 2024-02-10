import React from 'react'
import "./Gallery.css"
import ReactImageGallery from 'react-image-gallery'

const images = [
  {
    original: "/Ammy.jpg",
    thumbnail: "/Ammy.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "/Anmol.jpg",
    thumbnail: "/Anmol.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "/Dilpreet.jpg",
    thumbnail: "/Dilpreet.jpg",
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
    original: "/Gulshan.jpg",
    thumbnail: "/Gulshan.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "/Hard-Kaur.jpg",
    thumbnail: "/Hard-Kaur.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "/Jasbir.jpg",
    thumbnail: "/Jasbir.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "/Jenny-Johal.jpg",
    thumbnail: "/Jenny-Johal.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  
  {
    original: "/Lakhwinder-Wadali.jpg",
    thumbnail: "/Lakhwinder-Wadali.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "/Malkit Singh.jpg",
    thumbnail: "/Malkit Singh.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "/Mankirat.jpg",
    thumbnail: "/Mankirat.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "/Ninja.jpg",
    thumbnail: "/Ninja.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "/Roshan-prince.jpg",
    thumbnail: "/Roshan-prince.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  
  {
    original: "/Sharry-Mann.jpg",
    thumbnail: "/Sharry-Mann.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "/Surinder-Shinda.jpg",
    thumbnail: "/Surinder-Shinda.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "/Surjit Khan.jpg",
    thumbnail: "/Surjit Khan.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
]

export default function Gallery() {
  return (
    <div className='gallery-container'>
      <ReactImageGallery items={images} showBullets={true} showThumbnails={true} showPlayButton={false} showFullscreenButton={false}/>
    </div>
  )
}
