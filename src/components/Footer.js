// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/saquib0601" className="text-white"><FaGithub size={30} /></a>
          <a href="https://in.linkedin.com/in/saquib-alam-a21291199" className="text-white"><FaLinkedin size={30} /></a>
          <a href="https://facebook.com/" className="text-white"><FaFacebook size={30} /></a>
          <a href="https://instagram.com/saquib_mallik" className="text-white"><FaInstagram size={30} /></a>
          <a href="https://t.me/saquib060198" className="text-white"><FaTelegram size={30} /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Saquib Alam. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
