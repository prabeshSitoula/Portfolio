import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-secondary shadow-md z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-accent">Prabesh Sitoula</h1>
        <ul className="flex space-x-6">
          {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-accent transition duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
