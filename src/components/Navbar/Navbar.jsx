import { AboutMeIcon, HomeIcon, ProyectsIcon, SkillsIcon, SpotifyIcon } from "../../assets/icons";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import "./Navbar.css";
export function Navbar() {
  return (
    <nav>
      <a href="" className="nav-banner">
        <SpotifyIcon />
      </a>
      <ul className="nav-links">
        <li>
          <a href="" className="nav-links-link">
            <HomeIcon />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="" className="nav-links-link">
            <SkillsIcon />
            <span>Skills</span>
          </a>
        </li>
        <li>
          <a href="" className="nav-links-link">
            <ProyectsIcon />
            <span>Proyects</span>
          </a>
        </li>
        <li>
          <a href="" className="nav-links-link">
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
