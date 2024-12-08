import React from "react";
import profileImage from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center gradient-bg"
    >
      <div className="text-center space-y-6 animate-fade-in">
        <img
          src={profileImage}
          alt="Prabesh Sitoula"
          className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg"
        />
        <h1 className="text-5xl font-bold">
          Hi, I'm <span className="text-accent">Prabesh Sitoula</span>
        </h1>
        <p className="text-lg">Web Developer | MERN Stack Enthusiast</p>
        <a
          href="#contact"
          className="px-6 py-3 mt-4 inline-block bg-accent text-black font-semibold rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
