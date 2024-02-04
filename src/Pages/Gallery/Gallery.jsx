import React from 'react'
import "./Gallery.css"
import ReactImageGallery from 'react-image-gallery'

const images = [
  {
    original: "public/Ammy.jpg",
    thumbnail: "public/Ammy.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "public/Anmol.jpg",
    thumbnail: "public/Anmol.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "public/Dilpreet.jpg",
    thumbnail: "public/Dilpreet.jpg",
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
    original: "public/Gulshan.jpg",
    thumbnail: "public/Gulshan.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "public/Hard-Kaur.jpg",
    thumbnail: "public/Hard-Kaur.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "public/Jasbir.jpg",
    thumbnail: "public/Jasbir.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "public/Jenny-Johal.jpg",
    thumbnail: "public/Jenny-Johal.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  
  {
    original: "public/Lakhwinder-Wadali.jpg",
    thumbnail: "public/Lakhwinder-Wadali.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "public/Malkit Singh.jpg",
    thumbnail: "public/Malkit Singh.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "public/Mankirat.jpg",
    thumbnail: "public/Mankirat.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "public/Ninja.jpg",
    thumbnail: "public/Ninja.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "public/Roshan-prince.jpg",
    thumbnail: "public/Roshan-prince.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  
  {
    original: "public/Sharry-Mann.jpg",
    thumbnail: "public/Sharry-Mann.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "public/Surinder-Shinda.jpg",
    thumbnail: "public/Surinder-Shinda.jpg",
    originalHeight: "400px",
    thumbnailHeight: "65px"
  },
  {
    original: "public/Surjit Khan.jpg",
    thumbnail: "public/Surjit Khan.jpg",
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
