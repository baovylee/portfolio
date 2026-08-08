import Reveal from "./Reveal.jsx";
import { isVideoFile } from "../utils/media.js";

export default function ProjectCard({ project, index, onOpen }) {
  const idx = String(index + 1).padStart(2, "0");
  const isVideo = isVideoFile(project.media);

  return (
    <Reveal as="button" className="project-tile" onClick={onOpen}>
      <span className="project-tile-index">{idx}</span>

      {project.media ? (
        isVideo ? (
          <video
            className="project-tile-img"
            src={project.media}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={project.media}
            alt={project.title}
            className="project-tile-img"
          />
        )
      ) : (
        <div className="project-tile-placeholder">
          Add image/gif/video in projects.js
        </div>
      )}

      <span className="project-tile-overlay">
        <span className="project-tile-title">{project.title}</span>
        <span className="project-tile-cta">See details →</span>
      </span>
    </Reveal>
  );
}
