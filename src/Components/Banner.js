import React from 'react'
import '../CSS/Banner.css'
import {Link} from 'react-router-dom';

const Banner = () => {
  return (
    <section className="banner">
      <Link exact to="/"><img className="logo" src={require('../images/minerFinder-logo.png')}/></Link>
    </section>
  )
}

export default Banner
