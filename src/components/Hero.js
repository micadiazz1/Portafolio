import React from 'react'
import fotoPersonal from '../img/fotoPersonal.jpeg'

export const Hero = () => {
  return (
    <section id="hero" className='hero'>
      <div className="hero-container">
        <div className="hero-content">
          {/* Profile Image */}
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <img 
              className='hero-image' 
              src={fotoPersonal} 
              alt="Micaela Linares" 
            />
          </div>

          {/* Text Content */}
          <div className="hero-text">
            <h1 className="hero-title">Micaela Linares</h1>
            <p className="hero-subtitle">Desarrolladora Full Stack</p>
            <p className="hero-description">
              Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas 
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
