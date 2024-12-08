import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      name: "Notes App",
      description: "User-friendly notes application with full CRUD features.",
      link: "#",
      repo: "https://github.com/prabeshSitoula/Notes_App.git",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary">
      <div className="container mx-auto animate-fade-in">
        <h2 className="text-4xl font-bold text-center text-accent mb-10">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-primary p-6 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-accent">
                {project.name}
              </h3>
              <p className="mt-2">{project.description}</p>
              <div className="flex space-x-4 mt-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-accent transition duration-300 flex items-center"
                  >
                    #
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-accent transition duration-300 flex items-center"
                  >
                    <FaGithub className="mr-1" /> Source Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
