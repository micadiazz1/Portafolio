import React, { useRef } from 'react'
import sensePatagonia from '../img/sensePatagonia.png'
import numberblocks from '../img/numberblocks.png'
import gamehub from '../img/gamehub.png'
import enLinea from '../img/4enLinea.png'

const proyects = [
  { 
    title: 'Sense Patagonia', 
    description: 'Proyecto freelance de diseño web para una empresa de excursiones en la Patagonia. Creé la identidad visual y la estructura del sitio, que permitirá reservar excursiones de forma online. Actualmente sigue en desarrollo.', 
    url: '#', 
    img: sensePatagonia,
    badges: ['Diseño UX/UI','Figma'] 
  },
  { 
    title: 'Number Blocks', 
    description: 'Proyecto de la facultad donde implementé un efecto parallax con JavaScript para crear una experiencia visual dinámica.', 
    url: '#', 
    img: numberblocks,
    badges: ['HTML','CSS','JavaScript','Parallax'] 
  },
  { 
    title: 'Game Hub', 
    description: 'Sitio web desarrollado como práctica universitaria, donde integré distintos minijuegos aplicando lógica y diseño responsivo.', 
    url: '#',
    img: gamehub,
    badges: ['HTML','CSS','JavaScript'] 
  },
  { 
    title: '4 en linea', 
    description: 'Juego de la facultad en el que utilicé Canvas para manejar el renderizado del tablero y la interacción entre jugadores.', 
    url: '#',
    img: enLinea,
    badges: ['HTML','CSS','JavaScript','Canvas'] 
  },
];

export const Proyect = () => {
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="proyects" className='project'>
      <div className="container">
        <h2>Proyectos</h2>
        <div className='projects-grid'>
          {proyects.map((proyect, index) => (
            <div 
              className='project-card' 
              key={proyect.title}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img src={proyect.img} alt={proyect.title} />
              <div className="content">
                <h3>{proyect.title}</h3>
                <p>{proyect.description}</p>
                  <div className='tags-and-button'> 
                    <div className="tags">
                      {proyect.badges.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <button className='btn'> Ver Proyecto</button>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
