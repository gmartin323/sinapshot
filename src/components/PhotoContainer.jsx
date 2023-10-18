import React from 'react'
import { useHorizontalScroll } from '../hooks/useHorizontalScroll'

export default function PhotoContainer() {

  const scrollRef = useHorizontalScroll()

  return (
    <div ref={scrollRef} className="photo-container" >
      <div className="photo"></div>
      <div className="photo"></div>
      <div className="photo"></div>
      <div className="photo"></div>
      <div className="photo"></div>
    </div>
  )
}