import React from 'react'
const skillCaregories = [
  { name: 'Frontend', skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind'] },
  { name: 'Backend', skills: ['Java', 'Spring Boot', 'PHP'] },
  { name: 'Databases', skills: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { name: 'Tools', skills: ['Docker', 'GitHub', 'Postman', 'Figma'] },
];
export const Skills = () => {
  return (
    <section id="skills" className='skill'>
      <h2>Habilidades</h2>
      <div className="skills-container">
        {skillCaregories.map((category) => (
          <div key={category.name} className="skill-category">
            <h3>{category.name}</h3>
            <ul>
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>  
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
