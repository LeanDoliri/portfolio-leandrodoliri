import { AboutMeIcon, HomeIcon, ProyectsIcon, SkillsIcon, SpotifyIcon } from "../../assets/Icons";
import "./Navbar.css";
export function Navbar() {
  return (
    <nav>
      <a href="#Inicio" className="nav-banner">
        <SpotifyIcon />
      </a>
      <ul className="nav-links">
        <li>
          <a href="#Inicio" className="nav-links-link">
            <HomeIcon />
            <span>Inicio</span>
          </a>
        </li>
        <li>
          <a href="#Skills" className="nav-links-link">
            <SkillsIcon />
            <span>Skills</span>
          </a>
        </li>
        <li>
          <a href="#Proyectos" className="nav-links-link">
            <ProyectsIcon />
            <span>Proyectos</span>
          </a>
        </li>
        <li>
          <a href="#SobreMi" className="nav-links-link">
            <AboutMeIcon />
            <span>Sobre mí</span>
          </a>
        </li>
      </ul>
      <footer>
        <p>Contact</p>
      </footer>
    </nav>
  );
}
