import {
  AboutMeIcon,
  HomeIcon,
  ProjectsIcon,
  SkillsIcon,
  SpotifyIcon,
} from "../../assets/Icons";
import LinkedInIcon from "../../assets/social-media/linkedin-svgrepo-com.svg";
import GithubIcon from "../../assets/social-media/github-svgrepo-com.svg";
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
      <footer className="nav-footer">
        <p>Contact</p>
        <div className="nav-footer-socialIcons">
          <a href="https://www.linkedin.com/in/leandro-doliri/" target="_blank">
            <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/LeanDoliri" target="_blank">
            <img src={GithubIcon} alt="Github" />
          </a>
        </div>
      </footer>
    </nav>
  );
}
