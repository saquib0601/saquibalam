// src/components/Projects.js
import React from "react";

const projects = [
  {
    name: "NetFlixGPT",
    description: "",
    link: "#",
    logo: "logo1.png",
  },
  {
    name: "Food_Villa",
    description: "",
    link: "#",
    logo: "logo2.png",
  },
  {
    name: "Fifteen_Puzzle_Game",
    description:
      "A web-based implementation of the classic Fifteen Puzzle game, built using React. The game allows users to shuffle, move tiles, and solve the puzzle. It also includes features like timer, move counter, and a 'Help Me' button for assistance.",
    link: "https://fifteen-puzzle-app.vercel.app/",
    logo: "logo3.png",
  },
  {
    name: "Book_Tracker_App",
    description: "The Book Tracker App is a web application that allows users to track their books. Users can sign up, sign in, sign out, search for books, and manage their personal book list using drag-and-drop functionality. The app leverages Firebase for authentication and Firestore for data storage. The frontend is built with React, Redux, and Tailwind CSS, and incorporates Material-UI (MUI) for some components.",
    link: "https://book-trackig-app.vercel.app/login",
    logo: "logo4.png",
  },
  {
    name: "File_Explorer",
    description: "This is a simple file explorer project built with React,CSS and TypeScript.",
    link: "https://file-explorer-one.vercel.app/",
    logo: "logo5.png",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-800 text-white p-8 min-h-screen" id="projects">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <img
                src={project.logo}
                alt={`${project.name} logo`}
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="text-blue-500">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
