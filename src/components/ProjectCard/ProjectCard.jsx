import "./ProjectCard.css";
import GitHubIcon from "../../assets/social-media/github-svgrepo-com.svg";
import { PlayIcon } from "../../assets/Icons";

export function ProjectCard({ img, title, description, link, repo }) {
  return (
    <a href={link} target="_blank">
      <div className="ProjectCard">
        <div>
          <a href={repo} target="_blank" className="ProjectCard-repo">
            <img src={GitHubIcon} alt="RepoOnGithub" />
          </a>
          <a href={link} target="_blank" className="ProjectCard-play">
            <PlayIcon />
          </a>
          <img src={img} alt={title} className="ProjectCard-thumbnail" />
        </div>
        <p className="ProjectCard-title">{title}</p>
        <p className="ProjectCard-description">{description}</p>
      </div>
    </a>
  );
}
