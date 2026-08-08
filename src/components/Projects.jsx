import { useState } from "react";
import Reveal from "./Reveal.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectModal from "./ProjectModal.jsx";
import { projectsData } from "../data/projects.js";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="projects" className="projects">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow static">SELECTED WORK</p>
          <h2>Projects</h2>
        </Reveal>

        <div className="project-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onOpen={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <ProjectModal
          project={projectsData[activeIndex]}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
}
