// src/components/Hero.js
import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaFileDownload } from 'react-icons/fa';
import profile from '../assets/profile.jpg';

const Hero = () => {
  const [animatedText, setAnimatedText] = useState('');
  const text = "Frontend Developer | ReactJS Enthusiast";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setAnimatedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100); // Adjust the interval (in milliseconds) for desired speed

    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures effect runs only once on mount

  // Function to trigger download of resume (dummy link)
  const downloadResume = () => {
    const resumePath = process.env.PUBLIC_URL + '/assets/Saquib_alam_3yrs_frontend.pdf';
    window.open(resumePath, '_blank');
  };

  // Function to open email client with pre-filled details
  const sendEmail = () => {
    window.location.href = "mailto:your.email@example.com";
  };

  return (
    <section className="bg-gray-800 h-screen flex items-center justify-center text-center relative">
      <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
      <div className="relative z-10">
        <img 
          src={profile} 
          alt="Saquib Alam" 
          className="w-60 h-60 rounded-full mx-auto mb-4 border-4 border-white"
        />
        <h2 className="text-4xl font-bold text-white mb-4">Hi, I'm Saquib Alam</h2>
        <p className="text-xl text-white mb-8" style={{ transition: 'opacity 0.3s ease' }}>{animatedText}</p>
        <div className="flex justify-center space-x-4 mb-4">
          {/* <button 
            onClick={downloadResume}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center"
          >
            <FaFileDownload className="mr-2" /> Download Resume
          </button> */}
          {/* Download Resume Button */}
          <a
            href={process.env.PUBLIC_URL + '/assets/Saquib_alam_3yrs_frontend.pdf'}
            download="Saquib_alam_3yrs_frontend.pdf"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center"
          >
            <FaFileDownload className="mr-2" /> Download Resume
          </a>
          <button 
            onClick={sendEmail}
            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded flex items-center"
          >
            <FaEnvelope className="mr-2" /> Email Me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
