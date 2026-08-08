import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import { useTheme } from "./hooks/useTheme.js";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
        <Route
          path="/projects"
          element={<ProjectsPage theme={theme} toggleTheme={toggleTheme} />}
        />
      </Routes>
    </HashRouter>
  );
}
