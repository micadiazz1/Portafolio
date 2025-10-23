import React, { useState, useEffect } from 'react'
import { Menu, X } from "lucide-react"

export const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'proyects', 'contact'];
      // Ajuste dinámico: usa la mitad de la altura del viewport
      const offset = window.innerHeight / 3;
      const scrollPosition = window.scrollY + offset;

      // Encuentra la sección que está más visible en el viewport
      let currentSection = sections[0];
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          // Si el punto de scroll está dentro de esta sección
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Ejecutar al cargar para establecer la sección inicial
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false); // Cerrar el menú al hacer clic en una sección
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className='header'>
        <h1 className='logo'>ML</h1>
        
        {/* Botón hamburguesa para móvil */}
        <button className='menu-toggle' onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navegación */}
        <nav className={isMenuOpen ? 'nav-open' : ''}>
            <ul>
                <li>
                  <a 
                    onClick={() => scrollToSection('hero')}
                    className={activeSection === 'hero' ? 'active' : ''}
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('about')}
                    className={activeSection === 'about' ? 'active' : ''}
                  >
                    Sobre mi
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('skills')}
                    className={activeSection === 'skills' ? 'active' : ''}
                  >
                    Habilidades
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('proyects')}
                    className={activeSection === 'proyects' ? 'active' : ''}
                  >
                    Proyectos
                  </a>
                </li>
                <li>
                  <a 
                    onClick={() => scrollToSection('contact')}
                    className={activeSection === 'contact' ? 'active' : ''}
                  >
                    Contacto
                  </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}
