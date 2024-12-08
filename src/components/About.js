import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto animate-fade-in">
        <h2 className="text-4xl font-bold mb-8 text-center text-accent">
          About Me
        </h2>
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <p>
            I'm a passionate Computer Applications student with proficiency in
            the MERN stack. I enjoy solving problems, learning new technologies,
            and contributing to impactful projects.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/prabesh-sitoula-937374334/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-accent hover:text-white transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/prabeshSitoula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-accent hover:text-white transition duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
