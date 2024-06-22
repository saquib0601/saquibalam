// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gray-800 text-white p-8 min-h-screen" id="contact">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-white">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded bg-gray-700 text-white" />
          </div>
          <div>
            <label className="block text-white">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded bg-gray-700 text-white" />
          </div>
          <div>
            <label className="block text-white">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded bg-gray-700 text-white"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
