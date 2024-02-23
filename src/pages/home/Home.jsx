import React from 'react'
import "./home.scss"
import HeroBanner from './homeBanner/HeroBanner.jsx'
import Trending from './trending/Trending.jsx'


const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <Trending/>
    </div>
  )
}

export default Home