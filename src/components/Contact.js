import React from 'react'
import { Mail, MapPin, Download, Linkedin, Github, Send } from "lucide-react"

export const Contact = () => {
  return (
    <section id="contact" className='contact'>
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-header">
            <h2>Hablemos</h2>
            <p>Estoy disponible para nuevos proyectos y colaboraciones</p>
          </div>

          <div className="contact-grid">
            <div className="card email-card">
              <div className="icon-box gradient-dark">
                <Mail className="icon" />
              </div>
              <div className="card-content">
                <h3>Email</h3>
                <p>La mejor forma de contactarme para proyectos y oportunidades</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=micaelaexactas1@gmail.com" 
                target="_blank"
                className="contact-link">
                  micaelaexactas1@gmail.com
                  <Send className="send-icon" />
                </a>
              </div>
            </div>
            <div className="card location-card">
              <div className="icon-box dark">
                <MapPin className="icon" />
              </div>
              <h3>Ubicación</h3>
              <p>Argentina</p>
            </div>
            <a
              href="https://linkedin.com/in/micaela-linares-88b818313/"
              target="_blank"
              rel="noopener noreferrer"
              className="card linkedin-card"
            >
              <div className="icon-box light">
                <Linkedin className="icon" />
              </div>
              <h3>LinkedIn</h3>
              <p>Conectemos profesionalmente</p>
            </a>
            <a
              href="https://github.com/micadiazz1"
              target="_blank"
          
              className="card github-card"
            >
              <div className="icon-box light">
                <Github className="icon" />
              </div>
              <h3>GitHub</h3>
              <p>Revisa mis proyectos</p>
            </a>

            {/* CV Download - Tarjeta destacada */}
            <div className="card cv-card">
              <div className="icon-box gradient-dark">
                <Download className="icon" />
              </div>
              <h3>Curriculum</h3>
              <p>Descarga mi CV completo</p>
              <a href="/cv-micaela-linares.pdf" download className="btn">
                Descargar PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
