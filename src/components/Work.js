import React from 'react';

const skills = [
  'ReactJS', 'React Hooks', 'Redux', 'JavaScript', 'ES6', 'Context API', 'HTML', 'CSS', 'MaterialUI',
  'Bootstrap', 'TailwindCSS', 'Sass', 'Postman', 'Jest', 'Unit Testing', 'UI Robot Testing', 'Web Pack', 'Typescript', 'JAVA',
  'Git', 'Responsive Design', 'Data structure and Algorithm', ' Problem solving', 'Rest API', 'JSON'
];

const projects = [
  {
    name: "NetFlixGPT",
    description: "",
    link: "https://github.com/saquib0601/netflix-gpt",
    logo: "logo1.png",
  },
  {
    name: "Food_Villa",
    description: "",
    link: "https://github.com/saquib0601/Namaste-react/tree/episode-11",
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

const Work = () => {
  return (
    <section className="bg-gray-800 text-white min-h-screen">
      <div className="container mx-auto py-16">
        
        {/* Experience Section */}
        <div id="experience">
          <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg mb-8">
            <h3 className="text-2xl font-bold">Software Developer</h3>
            <p className="font-semibold">Tata Consultancy Services</p>
            <p>08/2021 - Present</p>
            <p>
              Working as a Frontend Developer for Apple TV and Johnson & Johnson Client.
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Developed 10+ UI screens using React, JavaScript, TypeScript HTML, and CSS.</li>
              <li>Collaborated closely with designers and back-end developers to develop responsive web solutions.</li>
              <li>Strong experience in developing Dynamic, Responsive, Scalable, and optimized web pages using ReactJS, Redux, and React hooks.</li>
              <li>Proficiently implemented React Dom routing for improved user experience and site navigation.</li>
              <li>Enhanced app performance through the strategic use of custom hooks, lazy loading, and optimization techniques.</li>
              <li>Experience working with Agile model, APIs using Postman, Unit testing Using Jest and Robot Testing for Frontend UI Changes.</li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16" id="skills">
          <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
          <ul className="flex flex-wrap justify-center">
            {skills.map((skill, index) => (
              <li key={index} className="bg-blue-500 text-white m-2 p-2 rounded">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Section */}
        <div className="mb-16" id="projects">
          <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <img
                  src={project.logo}
                  alt={`${project.name} logo`}
                  className="h-16 mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-400 hover:underline">
                  Learn more
                </a>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Work;
