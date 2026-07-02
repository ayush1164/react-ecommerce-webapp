import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero">
        <div className="hero-content">
            <h1>Everything you need <br /> All in One Place.</h1>
            <p>
                Discover the layest fashion, electronics, home essentials, and more at unbeatable prices. 
                <br />
                Shop smarter with fast delivery and secure checkout.
            </p>
            <button className='hero-btn'>
                Shop now
            </button>
        </div>
        <div className='hero-image'>
            <img src="/hero-image.jpg" alt="shopping banner" />
        </div>
    </section>
  )
}

export default HeroSection