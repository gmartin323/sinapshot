import React from 'react'
import HorizontalScrollCarousel from '../components/HorizontalScrollCarousel'

export default function Home() {
  return (
    <div className="page-container">
      <div className="span-container">
        <span>
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="span-container">
        <span>
          Scroll up
        </span>
      </div>
    </div>
  )
}