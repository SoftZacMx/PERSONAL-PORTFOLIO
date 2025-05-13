import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'; // Importar módulos

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Imágenes de tecnologías
import reactLogo from './assets/react.png';
import nodejsLogo from './assets/node.png';
import angularLogo from './assets/angular.png';
import mysqlLogo from './assets/mysql.png';
import awsLogo from './assets/aws.png';

const skills = [
  { name: 'React', logo: reactLogo, level: 55 },
  { name: 'Node.js', logo: nodejsLogo, level: 80 },
  { name: 'Angular', logo: angularLogo, level: 80 },
  { name: 'MySQL', logo: mysqlLogo, level: 80 },
  { name: 'AWS', logo: awsLogo, level: 50 },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>Technical Skills</h2>
      <p>Below is my current proficiency in various technologies, represented by a percentage of expertise:</p>
      
      <Swiper
        modules={[Autoplay, Navigation, Pagination]} // Asegurar módulos
        spaceBetween={30} 
        slidesPerView={3} 
        loop={true} 
        autoplay={{ 
          delay: 4500, // Tiempo en ms (2.5 segundos)
          disableOnInteraction: false // Evita que se detenga al interactuar
        }} 
        navigation 
        pagination={{ clickable: true }}
      >
        {skills.map((skill) => (
          <SwiperSlide key={skill.name} style={{ height: '180px' }}>
            <div className="skill">
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <span className="skill-name">{skill.name}</span>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${skill.level}%` }}>
                  {skill.level}%
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skills;
