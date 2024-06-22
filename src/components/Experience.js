// src/components/Experience.js
import React from 'react';

const Experience = () => {
  return (
    <section className="bg-gray-800 text-white p-8 min-h-screen" id="experience">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <ul>
          <li>Tata Consultancy Services - Frontend Developer - 2021-Present</li>
          {/* <li>Company XYZ - Senior Frontend Developer - 2021-Present</li> */}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
