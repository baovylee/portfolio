import { profile } from "../data/profile.js";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href={profile.github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href={`mailto:${profile.email}`}>Email</a>
    </div>
  );
}
