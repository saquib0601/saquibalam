// src/components/Contact.js
import React, {useState} from 'react';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setFormStatus('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('There was an error. Please try again.');
      }
    } catch (error) {
      setFormStatus('There was an error. Please try again.');
    }
  };



  return (
    <section className="bg-gray-800 text-white p-8 min-h-screen" id="contact">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white">Name</label>
            <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded bg-gray-700 text-white" />
          </div>
          <div>
            <label className="block text-white">Email</label>
            <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded bg-gray-700 text-white" />
          </div>
          <div>
            <label className="block text-white">Message</label>
            <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded bg-gray-700 text-white"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send</button>
        </form>
        {formStatus && <p className="mt-4">{formStatus}</p>}
      </div>
    </section>
  );
}

export default Contact;
