import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const techLoop = [...project.techStack, ...project.techStack]; // 

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Đóng">
          ✕
        </button>

        <div className="modal-image">
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div className="project-image-placeholder">
              Add screenshot trong projects.js
            </div>
          )}
        </div>

        <div className="modal-body">
          <h3>{project.title}</h3>
          <p className="project-desc">{project.description}</p>

          <div className="marquee">
            <div className="marquee-track">
              {techLoop.map((tech, i) => (
                <span className="tech-pill" key={i}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-links">
            <a
              className="modal-link github"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub →
            </a>
            <a
              className="modal-link app"
              href={project.appLink}
              target="_blank"
              rel="noopener noreferrer"
            >
               App →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}