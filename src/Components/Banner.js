import React from 'react'
import '../CSS/Banner.css'

const Banner = () => {
  return (
    <section className="banner">
      <img className="logo" src={require('../images/minerFinder-logo.png')}/>
    </section>
  )
}

export default Banner
