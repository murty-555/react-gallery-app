import React from 'react'
import CarouselSection from './carousel-section/CarouselSection'
import Gallery from './Gallery'

const Home = ({galleryData}) => {
  return (
    <>
        <header>
        <CarouselSection />
      </header>
      <main>
        <h2 className="main-section-heading">Choose from the pool of ocean</h2>
        <Gallery galleryData={galleryData} />
      </main>
    </>
  )
}

export default Home