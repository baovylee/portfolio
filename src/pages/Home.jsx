import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import ParticleField from "../components/ParticleField.jsx";
import Typewriter from "../components/Typewriter.jsx";
import SocialLinks from "../components/SocialLinks.jsx";
import Footer from "../components/Footer.jsx";
import { profile } from "../data/profile.js";

export default function Home({ theme, toggleTheme }) {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <header className="hero hero-profile">
        <ParticleField />

        <div className="hero-content hero-content-centered">
          <div className="profile-photo">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.name} />
            ) : (
              <div className="profile-photo-placeholder">
                Thêm ảnh trong profile.js
              </div>
            )}
          </div>

          <h1>{profile.name}</h1>
          <p className="eyebrow center">
            <Typewriter lines={profile.roles} />
          </p>

          <p className="bio-text">{profile.bio}</p>

          <div className="hero-actions">
            <Link to="/projects" className="cta">
              Projects →
            </Link>
          </div>

          <SocialLinks />
        </div>
      </header>

      <Footer />
    </>
  );
}
