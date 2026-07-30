import "./Projects.css";
import weather from "../../assets/weather.jpeg";
import Portfolio from "../../assets/Portfolio.jpeg";
import Ecommerce from "../../assets/Ecommerce.jpeg";
import Student from "../../assets/Student.jpeg";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      image: weather,
      description:
        "A real-time weather application built using React and the OpenWeather API.",
      technologies: ["React", "API", "CSS"],
      live: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      image: Portfolio,
      description:
        "A personal portfolio website showcasing my skills, projects, and contact information.",
      technologies: ["React", "JavaScript", "CSS"],
      live: "#",
      github: "#",
    },
    {
      id: 3,
      title: "E-commerce",
      image: Ecommerce,
      description:
        "A modern, full-stack e-commerce platform built with [Framework/Language], featuring secure checkout, real-time inventory management, and an admin dashboard.",
      technologies: ["React", "Local Storage"],
      live: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Student-Management",
      image: Student,
      description:
        "A comprehensive Student Management System built with [Framework/Language] to track student enrollment, attendance, grading, and course schedules.",
      technologies: ["React", "API"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>

        <p className="projects-subtitle">
          Here are some of the projects I have built using modern web
          technologies.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-btn"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;