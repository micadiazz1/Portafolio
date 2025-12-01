import React from 'react'
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


export const Skills = () => {
   const skillCategories = [
    {
      name: 'Frontend',
      technologies: [
        { Component: Html5, name: 'HTML5' },
        { Component: Css3, name: 'CSS3' },
        { Component: Js, name: 'JavaScript' },
        { Component: ReactIcon, name: 'React' },
      ]
    },
    {
      name: 'Backend',
      technologies: [
        { Component: Java, name: 'Java' },
        { Component: Springboot, name: 'Spring Boot' },
        { Component: Php, name: 'PHP' },
        { Component: Mysql, name: 'MySQL' },
        { Component: Postgresql, name: 'PostgreSQL' },
        { Component: Mongodb, name: 'MongoDB' },
      ]
    },
    {
      name: 'Herramientas',
      technologies: [
        { Component: Docker, name: 'Docker' },
        { Component: Github, name: 'GitHub' },
        { Component: Postman, name: 'Postman' },
        { Component: Figma, name: 'Figma' },
      ]
    }
  ];

  return (
    <section id="skills" className='skill'>
      <h2>Habilidades</h2>
      <div className="skills-container">
      {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            {/* Título con líneas de gradiente */}
            <div className="skill-category-header">
              <div className="skill-gradient-line"></div>
              <h3 className="skill-category-title">{category.name}</h3>
              <div className="skill-gradient-line"></div>
            </div>

            {/* Tecnologías */}
            <div className="tech-icons">
              {category.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="tech-item">
                  <tech.Component className="tech-icon" />
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
        </div>
        ))}
      </div>
    </section>
  )
}
