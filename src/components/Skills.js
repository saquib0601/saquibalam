// src/components/Skills.js
import React from 'react';

const skills = [
  'ReactJS', 'Redux', 'JavaScript', 'HTML', 'CSS', 'MaterialUI',
  'Bootstrap', 'TailwindCSS', 'Postman', 'Jest', 'Unit Testing',
  'Git', 'Responsive Design'
];

const Skills = () => {
  return (
    <section className="bg-gray-800 text-white p-8 min-h-screen" id="skills">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <ul className="flex flex-wrap">
          {skills.map((skill, index) => (
            <li key={index} className="bg-blue-500 text-white m-2 p-2 rounded">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
