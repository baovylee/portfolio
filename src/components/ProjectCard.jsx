import Reveal from "./Reveal.jsx";

export default function ProjectCard({ project, index, onOpen }) {
  const idx = String(index + 1).padStart(2, "0");

  return (
    <Reveal as="button" className="project-tile" onClick={onOpen}>
      <span className="project-tile-index">{idx}</span>

      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="project-tile-img"
        />
      ) : (
        <div className="project-tile-placeholder">
          Thêm ảnh trong projects.js
        </div>
      )}

      <span className="project-tile-overlay">
        <span className="project-tile-title">{project.title}</span>
        <span className="project-tile-cta">See details →</span>
      </span>
    </Reveal>
  );
}
