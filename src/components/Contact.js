import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto text-center animate-fade-in">
        <h2 className="text-4xl font-bold text-accent mb-6">Contact Me</h2>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-accent" />
            <p>prabesh.sitoula@gmail.com</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-accent" />
            <p>+977 9843545142</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-accent" />
            <p>Mulpani, Kathmandu, Nepal</p>
          </div>
        </div>
        <form className="max-w-lg mx-auto mt-10">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-3 rounded bg-secondary text-white focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 rounded bg-secondary text-white focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 p-3 rounded bg-secondary text-white focus:outline-none focus:ring-2 focus:ring-accent transition duration-300"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
