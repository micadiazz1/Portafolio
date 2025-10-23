import React, { useEffect, useRef } from 'react'
import { ReactComponent as Css3 } from '../svg/css3.svg'
import { ReactComponent as Html5 } from '../svg/html5.svg'
import { ReactComponent as ReactIcon } from '../svg/react.svg'
import { ReactComponent as Js } from '../svg/js.svg'
import { ReactComponent as Docker } from '../svg/docker.svg'
import { ReactComponent as Github } from '../svg/github.svg'
import { ReactComponent as Mysql } from '../svg/mysql.svg'
import { ReactComponent as Mongodb } from '../svg/mongodb.svg'
import { ReactComponent as Postman } from '../svg/postman.svg'
import { ReactComponent as Php } from '../svg/php.svg'
import { ReactComponent as Springboot } from '../svg/springboot.svg'
import { ReactComponent as Java } from '../svg/java.svg'
import { ReactComponent as Figma } from '../svg/figma.svg'
import { ReactComponent as Postgresql } from '../svg/postgresql.svg'

export const About = () => {
  const iconsRef = useRef([]);

  const technologies = [
    { Component: Html5, name: 'HTML5' },
    { Component: Css3, name: 'CSS3' },
    { Component: Js, name: 'JavaScript' },
    { Component: ReactIcon, name: 'React' },
    { Component: Java, name: 'Java' },
    { Component: Springboot, name: 'Spring Boot' },
    { Component: Php, name: 'PHP' },
    { Component: Mysql, name: 'MySQL' },
    { Component: Postgresql, name: 'PostgreSQL' },
    { Component: Mongodb, name: 'MongoDB' },
    { Component: Docker, name: 'Docker' },
    { Component: Github, name: 'GitHub' },
    { Component: Postman, name: 'Postman' },
    { Component: Figma, name: 'Figma' },
  ];

  useEffect(() => {
    const icons = iconsRef.current;
    
    // Inicializar posiciones y velocidades aleatorias para cada icono
    icons.forEach((icon, index) => {
      if (!icon) return;
      
      // Posición inicial aleatoria
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      
      // Velocidad y dirección aleatoria
      const speedX = (Math.random() - 0.3) * 0.3;
      const speedY = (Math.random() - 0.3) * 0.3;
      
      icon.style.left = `${startX}%`;
      icon.style.top = `${startY}%`;
      
      // Almacenar datos de movimiento en el elemento
      icon.dataset.x = startX;
      icon.dataset.y = startY;
      icon.dataset.speedX = speedX;
      icon.dataset.speedY = speedY;
    });

    // Animar los íconos
    const animateIcons = () => {
      icons.forEach((icon) => {
        if (!icon) return;
        
        let x = parseFloat(icon.dataset.x);
        let y = parseFloat(icon.dataset.y);
        let speedX = parseFloat(icon.dataset.speedX);
        let speedY = parseFloat(icon.dataset.speedY);
        
        // Actualizar posición
        x += speedX;
        y += speedY;
        
        // Rebotar en los bordes
        if (x <= 0 || x >= 95) {
          speedX *= -1;
          x = x <= 0 ? 0 : 95;
        }
        if (y <= 0 || y >= 95) {
          speedY *= -1;
          y = y <= 0 ? 0 : 95;
        }
        
        // Actualizar elemento
        icon.style.left = `${x}%`;
        icon.style.top = `${y}%`;
        icon.dataset.x = x;
        icon.dataset.y = y;
        icon.dataset.speedX = speedX;
        icon.dataset.speedY = speedY;
      });
      
      requestAnimationFrame(animateIcons);
    };

    const animationId = requestAnimationFrame(animateIcons);
    
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="about" className='about'>
      
      <div className="floating-icons">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            ref={(el) => (iconsRef.current[index] = el)}
            className="floating-icon">
            <tech.Component />
          </div>
        ))}
      </div>
      <div className="about-container">
        <h2>Sobre Mí</h2>
        <div className="about-content">
          <p>
            ¡Hola! Soy una desarrolladora apasionada por crear experiencias digitales 
            increíbles. Me especializo en desarrollo web full-stack, combinando diseño 
            moderno con código limpio y eficiente.
          </p>
          <p>
            Con experiencia en tecnologías como React, Java, Spring Boot y bases de datos, 
            me encanta enfrentar nuevos desafíos y aprender constantemente. Mi objetivo es 
            crear soluciones que no solo funcionen bien, sino que también brinden una 
            experiencia excepcional al usuario.
          </p>
          <p>
            Cuando no estoy programando, disfruto explorando nuevas tecnologías, 
            contribuyendo a proyectos open source y manteniéndome actualizada con 
            las últimas tendencias en desarrollo web.
          </p>
        </div>
      </div>
    </section>
  )
}
