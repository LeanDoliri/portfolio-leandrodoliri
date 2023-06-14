import "./ProyectCard.css";
import GitHubIcon from "../../assets/social-media/github-svgrepo-com.svg";
import { PlayIcon } from "../../assets/Icons";

export function ProyectCard({ img, title, description, link, repo }) {
  return (
    <a href={link} target="_blank">
      <div className="ProyectCard">
        <div>
          <a href={repo} target="_blank" className="ProyectCard-repo">
            <img src={GitHubIcon} alt="RepoOnGithub" />
          </a>
          <a href={link} target="_blank" className="ProyectCard-play">
            <PlayIcon />
          </a>
          <img src={img} alt={title} className="ProyectCard-thumbnail" />
        </div>
        <p className="ProyectCard-title">{title}</p>
        <p className="ProyectCard-description">{description}</p>
      </div>
    </a>
  );
}
