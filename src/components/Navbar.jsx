import { Link } from "react-router-dom";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav>
      <Link to="/" className="logo">
        VY <span></span> LE
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label="Change theme"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {theme === "dark" ? (
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          ) : (
            <>
              <circle cx="12" cy="12" r="4"></circle>
              <line x1="12" y1="2" x2="12" y2="4"></line>
              <line x1="12" y1="20" x2="12" y2="22"></line>
              <line x1="4.2" y1="4.2" x2="5.6" y2="5.6"></line>
              <line x1="18.4" y1="18.4" x2="19.8" y2="19.8"></line>
              <line x1="2" y1="12" x2="4" y2="12"></line>
              <line x1="20" y1="12" x2="22" y2="12"></line>
              <line x1="4.2" y1="19.8" x2="5.6" y2="18.4"></line>
              <line x1="18.4" y1="5.6" x2="19.8" y2="4.2"></line>
            </>
          )}
        </svg>
      </button>
    </nav>
  );
}
