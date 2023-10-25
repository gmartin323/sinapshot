import React from 'react'
import Header from './components/Header'
import PhotoContainer from './components/PhotoContainer'
import HorizontalScrollCarousel from './components/HorizontalScrollCarousel'

function App() {


  return (
    
      <main >
        <Header />
        <div className="">
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
        {/* <PhotoContainer /> */}
      </main>
  )
}

export default App
