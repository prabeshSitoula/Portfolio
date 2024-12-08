import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-4xl text-yellow-300" />,
    },
    { name: "React", icon: <FaReact className="text-4xl text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-4xl text-gray-500" /> },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-4xl text-green-600" />,
    },
    { name: "Git", icon: <FaGitAlt className="text-4xl text-red-500" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="container mx-auto animate-fade-in">
        <h2 className="text-4xl font-bold text-center text-accent mb-10">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 bg-secondary rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              <div className="flex justify-center">{skill.icon}</div>
              <p className="mt-2 font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
