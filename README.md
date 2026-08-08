# Vy Le — Portfolio

A personal portfolio built with React + Vite + React Router. I build this website to show my projects, skills and experience.

Deployed: 

## Getting Started

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal (usually `http://localhost:5173`).

## Build for Deployment

```bash
npm run build
```

The production build will be generated in the `dist/` directory.

This project uses `HashRouter` (URLs such as `your-domain.com/#/projects`), so **no additional redirect or rewrite configuration is required** when deploying to Vercel, Netlify, or GitHub Pages. Simply deploy the `dist/` directory, and the application will work correctly, including when users refresh the `/projects` page.

## Where to Edit Content

| What you want to change                                     | File                                            |
| ----------------------------------------------------------- | ----------------------------------------------- |
| Profile image, name, role, bio, LinkedIn/GitHub/Email links | `src/data/profile.js`                           |
| Project descriptions, tech stack, images, and links         | `src/data/projects.js`                          |
| Homepage layout                                             | `src/pages/Home.jsx`                            |
| Projects page layout                                        | `src/pages/ProjectsPage.jsx`                    |
| Colors and fonts                                            | `index.css` (`:root` and `[data-theme="dark"]`) |

For images (profile picture and project screenshots), place the image files in the `public/` directory, then reference them using paths such as `/filename.png` in `profile.js` or `projects.js`.

## Project Structure

```text
vy-le-portfolio/
├── public/              # Static assets (favicon, profile image, project screenshots)
├── src/
│   ├── pages/           # Home.jsx and ProjectsPage.jsx
│   ├── components/      # Navbar, ProjectCard, ProjectModal, Projects,
│   │                     # SocialLinks, Typewriter, ParticleField, Reveal, Footer
│   ├── data/            # profile.js and projects.js
│   ├── hooks/           # useTheme (dark/light), useReveal (scroll animation)
│   └── App.jsx          # Application routing (HashRouter)
├── index.html
├── main.jsx
├── index.css
└── package.json
```
