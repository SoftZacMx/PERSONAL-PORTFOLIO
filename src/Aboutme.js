import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me fade-in">
      <img src="/profile.jpeg" alt="Profile" className="profile-img" />
      <h2>Hi, I'm Brayan Rodriguez</h2>
      <p>
      I am a web developer with experience in Node.js, React, Angular, and MySQL. My focus is on creating scalable and efficient solutions, with a strong emphasis on developing customized ERPs and integrating AI to optimize business processes.

With a deep passion for technology and innovation, I specialize in designing intuitive and dynamic systems, always striving to deliver real value to users and clients. My goal is to continue growing professionally and contribute with creative, high-impact solutions.
      </p>
      <a href="#contact" className="cta-button">
        Contact Me
      </a>
    </div>
  );
};

export default AboutMe;
