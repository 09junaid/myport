import React,{ useState } from "react";
import logicImage from "../assets/images/logic.png";
import pic from "../assets/images/mypic.png";
import portfolio from "../assets/images/portfolio.png";

export default function Home() {
  const skills = [
    {
      name: "HTML",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          {/* Replace with a JavaScript icon SVG */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 1.5C5.885 1.5 1.5 5.885 1.5 12S5.885 22.5 12 22.5 22.5 17.115 22.5 12 17.115 1.5 12 1.5z"
          />
        </svg>
      ),
    },
    {
      name: "CSS",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          {/* Replace with a JavaScript icon SVG */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 1.5C5.885 1.5 1.5 5.885 1.5 12S5.885 22.5 12 22.5 22.5 17.115 22.5 12 17.115 1.5 12 1.5z"
          />
        </svg>
      ),
    },
    {
      name: "Bootstrap",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          {/* Replace with a JavaScript icon SVG */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 1.5C5.885 1.5 1.5 5.885 1.5 12S5.885 22.5 12 22.5 22.5 17.115 22.5 12 17.115 1.5 12 1.5z"
          />
        </svg>
      ),
    },
   
    {
      name: "JavaScript",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          {/* Replace with a JavaScript icon SVG */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 1.5C5.885 1.5 1.5 5.885 1.5 12S5.885 22.5 12 22.5 22.5 17.115 22.5 12 17.115 1.5 12 1.5z"
          />
        </svg>
      ),
    },
    {
      name: "React",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          {/* Replace with a React icon SVG */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 1.5C5.885 1.5 1.5 5.885 1.5 12S5.885 22.5 12 22.5 22.5 17.115 22.5 12 17.115 1.5 12 1.5z"
          />
        </svg>
      ),
    },

    // Add more skills as needed
  ];
  const experiences = [
    {
      position: "React developer",
      company: "Asain Solutions",
      duration: "2024 - Internship",
      description:
        "Worked on developing and maintaining web applications using React and React Redux. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      // Replace with actual logo path
    },
  ];
  const education = [
    {
      degree: "Bachelor of Software Engineering",
      university: "Minhaj University Lahore",
      year: "2020 - 2024",
      cgpa: "3.52/4.0", // Add your CGPA
      fyp: "AI-Based Real-Time Object Detection", // Add your FYP title
      logo: "data:image/png;base64,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", // Replace with actual logo path
    },
  ];
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with React,Bootstrap and MUI, showcasing various projects.",
      image:
      portfolio, // Replace with your project image paths
      link: "https://by-junaid-portfolio.netlify.app", // Replace with your project link
    },
    {
      title: "Real-estate Website",
      description:
        "An Logic Builder platform with some of the most popular features like Tdodo list, Calculator, and Random Password Generator.",
      image: logicImage, // Replace with your project image paths
      link: "https://logicbuilder.netlify.app/", // Replace with your project link
    },
    // Add more projects as needed
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white scroll-smooth" >
      {/* Header */}
      <nav className="fixed w-full bg-gray-800 text-white p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Junaid Arshad <span className="text-blue-400 font-bold">.</span></h1>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <ul className={`md:hidden mt-4 ${isOpen ? 'block' : 'hidden'} space-y-4`}>
        <li><a href="#about" className="block hover:text-blue-400">About</a></li>
        <li><a href="#skills" className="block hover:text-blue-400">Skills</a></li>
        <li><a href="#experience" className="block hover:text-blue-400">Experience</a></li>
        <li><a href="#projects" className="block hover:text-blue-400">Projects</a></li>
        <li><a href="#contact" className="block hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
    
      {/* Hero Section */}
      <section
        
        className="pt-32 md:pt-40 container mx-auto px-4 py-20 flex flex-col md:flex-row items-center"
      >
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Junaid Arshad</h2>
          <h3 className="text-2xl md:text-3xl text-blue-400 mb-4">
            Frontend Developer (React)
          </h3>
          <p className="text-xl mb-6">
            Crafting responsive and user-friendly web experiences with modern
            technologies.
          </p>
          {/* <div className="flex space-x-4">
            <a
              href="./my_cv.pdf"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out flex items-center justify-center space-x-2"
              download={"my_cv.pdf"}
            >
              Download CV
            </a>

          </div> */}
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-blue-500 rounded-full z-[-1]  opacity-20 animate-pulse"></div>
            <img
              src={pic}
              alt="Junaid Arshad"
              className="rounded-full w-full h-full object-cover animate-pulse border-4 border-white shadow-lg border-opacity-50 animate-spin-slow animate-infinite animate-ease-in-out z-10" 
              
            />
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center p-6 bg-gray-700 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full mr-4">
                  {skill.svg}
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    {skill.name}
                  </p>
                  <p className="text-sm text-gray-300"></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-gray-900 text-white py-20">
        <h2 className="text-4xl text-center mb-12 font-bold">Education</h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-x-0 top-0 border-t-2 border-gray-700" />
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6 transition-transform transform hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={edu.logo}
                  alt={`${edu.university} logo`}
                  className="w-16 h-16 rounded-full border-2 border-blue-400 shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold hover:text-blue-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400">{edu.university}</p>
                  <p className="text-gray-500">{edu.year}</p>
                  <p className="text-gray-300">CGPA: {edu.cgpa}</p>
                  <p className="text-gray-300">FYP: {edu.fyp}</p>
                </div>
              </div>
              <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-blue-300 mx-4" />
            </div>
          ))}
          <div className="absolute inset-x-0 bottom-0 border-b-2 border-gray-700" />
        </div>
      </section>

      {/* Experience Section */}
      <section  id="experience" className="bg-gray-900 text-white py-20">
        <h2 className="text-4xl text-center mb-12 font-bold">Experience</h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-x-0 top-0 border-t-2 border-gray-700" />
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex items-start justify-between bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6 transition-transform transform hover:shadow-lg hover:-translate-y-1 relative"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold hover:text-blue-400 transition-colors">
                  {exp.position}
                </h3>
                <p className="text-gray-400">{exp.company}</p>
                <p className="text-gray-500">{exp.duration}</p>
                <p className="text-gray-300 mt-2">{exp.description}</p>
              </div>
              <div className="flex flex-col justify-between">
                <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-blue-300" />
                <div className="w-1 h-4 bg-gray-500" />
              </div>
            </div>
          ))}
          <div className="absolute inset-x-0 bottom-0 border-b-2 border-gray-700" />
        </div>
      </section>

      {/* Projects Section */}
      {/* <section id="projects" className="bg-gray-900 text-white py-20">
  <h2 className="text-4xl text-center mb-12 font-bold">Projects</h2>
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Preview
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section> */}

<section id="projects" className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
  <h2 className="text-5xl text-center mb-12 font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
    Projects
  </h2>
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          <h3 className="text-2xl font-semibold text-white mb-2 text-center transition-colors hover:text-purple-400">
            {project.title}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20" style={{ position: 'relative', zIndex: '1' }}>
      <div className="relative bg-gray-900 text-white py-12 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-8 text-gray-400">
          I'm always open to discussing new opportunities or collaborating on interesting projects!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="relative group">
            <div className="bg-gray-800 rounded-lg p-6 transition-transform transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2">Name</h4>
              <p className="text-sm">Junaid Arshad</p>
            </div>
            <span className="absolute inset-0 border border-blue-500 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          </div>

          <div className="relative group">
            <div className="bg-gray-800 rounded-lg p-6 transition-transform transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2">Email</h4>
              <p className="text-sm">junaidarshad8686@gmail.com</p>
            </div>
            <span className="absolute inset-0 border border-blue-500 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          </div>

          <div className="relative group">
            <div className="bg-gray-800 rounded-lg p-6 transition-transform transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2">Phone</h4>
              <p className="text-sm">+923223877270</p>
            </div>
            <span className="absolute inset-0 border border-blue-500 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          </div>

          <div className="relative group">
            <div className="bg-gray-800 rounded-lg p-6 transition-transform transform hover:scale-105">
              <h4 className="text-xl font-semibold mb-2">Location</h4>
              <p className="text-sm">Kasur,Near Raiwind Ward no:1 Raja Jang</p>
            </div>
            <span className="absolute inset-0 border border-blue-500 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
          </div>
        </div>

        <div className="mt-6 flex justify-center space-x-6 z-40" style={{ position: 'relative', zIndex: '1' }}>
          <a
            href="https://www.linkedin.com/in/junaid-arshad02/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.002 3h-14a3.001 3.001 0 00-3 3v14a3.001 3.001 0 003 3h14a3.001 3.001 0 003-3V6a3.001 3.001 0 00-3-3zm-9.002 14h-3v-8h3v8zm-1.5-9.037c-.967 0-1.75-.79-1.75-1.755s.783-1.755 1.75-1.755 1.75.79 1.75 1.755-.783 1.755-1.75 1.755zm10.002 9.037h-3v-4.125c0-.99-.019-2.265-1.378-2.265-1.376 0-1.585 1.065-1.585 2.171V17h-3s.04-6.5 0-7.25h3v1.025c.397-.61 1.104-1.479 2.674-1.479 1.283 0 2.245.845 2.245 2.664V17z" />
            </svg>
          </a>
          <a
            href="https://github.com/09junaid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.308 3.438 9.83 8.207 11.437.6.111.793-.261.793-.578 0-.285-.01-1.24-.015-2.241-3.338.727-4.045-1.61-4.045-1.61-.545-1.375-1.327-1.743-1.327-1.743-1.086-.74.083-.726.083-.726 1.203.085 1.836 1.235 1.836 1.235 1.068 1.827 2.8 1.297 3.475.993.107-.774.418-1.297.762-1.593-2.664-.302-5.465-1.332-5.465-5.93 0-1.311.467-2.385 1.235-3.22-.125-.302-.535-1.527.115-3.176 0 0 1.008-.322 3.3 1.228A11.496 11.496 0 0112 4.833c1.033.005 2.071.139 3.033.405 2.292-1.55 3.3-1.228 3.3-1.228.651 1.649.241 2.874.117 3.176.77.835 1.234 1.909 1.234 3.22 0 4.608-2.803 5.63-5.471 5.93.43.372.814 1.104.814 2.226 0 1.607-.014 2.91-.014 3.302 0 .32.187.694.798.578A12.014 12.014 0 0024 12.297c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
        {/* You can replace the above URL with your own image path */}
      </div>
    </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-4">
        <div className="container mx-auto text-center text-gray-400">
          &copy; 2024 Junaid Arshad. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
