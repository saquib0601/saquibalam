// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-800 text-white p-8 min-h-screen" id="about">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Bio</h3>
          <p>
            I have thrived as a Frontend developer, contributing my skills and expertise to the development of dynamic and engaging web applications. My journey began with a solid foundation in ReactJS which enabled me to swiftly grasp complex concepts and build responsive user interfaces. I honed my proficiency in component-based architecture, class-based components, state management, and Hooks, allowing me to develop responsive, scalable, and optimized user interfaces.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <ul className="list-disc list-inside">
            <li>Completed Matriculation from T Raja High School</li>
            <li>Completed Intermediate from Satyam International</li>
            <li>Completed B.Tech in Information Technology from Techno Main Saltlake</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Hobbies</h3>
          <ul className="list-disc list-inside">
            <li>Coding</li>
            <li>Designing</li>
            <li>Travelling</li>
            <li>Organizing Events</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
