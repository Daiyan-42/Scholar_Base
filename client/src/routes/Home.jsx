import React from 'react'
import Header from '../components/Header'
import Browser from '../components/Browser'
import FeaturedAuthors from '../components/FeaturedAuthors'
import FeaturedArticles from '../components/FeaturedArticles'
import Footer from '../components/Footer'
import AuxNavbar from '../components/auxNavBar'

const Home = () => {
  return (
    <div>
      <AuxNavbar/>
      <Browser/>
      <FeaturedAuthors/>
      <FeaturedArticles/>
      <Footer/>
    </div>
  )
}

export default Home
