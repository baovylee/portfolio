import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Projects from "../components/Projects.jsx";
import Footer from "../components/Footer.jsx";

export default function ProjectsPage({ theme, toggleTheme }) {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <div className="wrap">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>

      <Projects />

      <Footer />
    </>
  );
}
