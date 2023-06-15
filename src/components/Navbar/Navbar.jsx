import { AboutMeIcon, HomeIcon, ProjectsIcon, SkillsIcon, SpotifyIcon } from "../../assets/Icons";
import "./Navbar.css";
export function Navbar() {
  return (
    <nav>
      <a href="#Home" className="nav-banner">
        <SpotifyIcon />
      </a>
      <ul className="nav-links">
        <li>
          <a href="#Home" className="nav-links-link">
            <HomeIcon />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#Skills" className="nav-links-link">
            <SkillsIcon />
            <span>Skills</span>
          </a>
        </li>
        <li>
          <a href="#Projects" className="nav-links-link">
            <ProjectsIcon />
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a href="#AboutMe" className="nav-links-link">
            <AboutMeIcon />
            <span>About me</span>
          </a>
        </li>
      </ul>
      <footer>
        <p>Contact</p>
      </footer>
    </nav>
  );
}
