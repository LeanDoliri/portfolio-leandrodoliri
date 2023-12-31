import "./ListOfProjectsCards.css";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import WaveScopeThumbnail from "../../assets/projects/wavescope-app.png"
import TaskAppThumbnail from "../../assets/projects/task-app.png";
import FavGifThumbnail from "../../assets/projects/favgif-app.png";
import TaTeTiThumbnail from "../../assets/projects/ta-te-ti-app.png";
import WebAcruThumbnail from "../../assets/projects/web-acru.png";
import BootstrapIcon from "../../assets/skills/bootstrap-svgrepo-com.svg";
import CssIcon from "../../assets/skills/css-3-svgrepo-com.svg";
import HTMLIcon from "../../assets/skills/html-5-svgrepo-com.svg";
import JavaScriptIcon from "../../assets/skills/javascript-svgrepo-com.svg";
import ReactIcon from "../../assets/skills/react-svgrepo-com.svg";
import SassIcon from "../../assets/skills/sass-svgrepo-com.svg";
import ViteIcon from "../../assets/skills/vite-svgrepo-com.svg";
import TailwindIcon from "../../assets/skills/tailwind-svgrepo-com.svg";
import NodeJsIcon from "../../assets/skills/node-svgrepo-com.svg";

export function ListOfProjectsCards() {
  return (
    <div className="ListOfProjectsCards">
      <ProjectCard
        img={WaveScopeThumbnail}
        title="Wave Scope"
        description="App con tops y ranks de Spotify."
        link="https://wavescope-app-leandrodoliri.netlify.app/"
        repo="https://github.com/LeanDoliri/wave-scope"
      >
        <ul className="ProjectsSkills">
          <li><img src={ReactIcon} alt="ReactIcon" /></li>
          <li><img src={JavaScriptIcon} alt="JavaScriptIcon" /></li>
          <li><img src={TailwindIcon} alt="TailwindIcon" /></li>
          <li><img src={CssIcon} alt="CssIcon" /></li>
          <li><img src={HTMLIcon} alt="HTMLIcon" /></li>
          <li><img src={ViteIcon} alt="ViteIcon" /></li>
          <li><img src={NodeJsIcon} alt="NodeJsIcon" /></li>
        </ul>
      </ProjectCard>
      <ProjectCard
        img={FavGifThumbnail}
        title="FavGif"
        description="App para buscar y guardar gifs."
        link="https://favgif-app-leandrodoliri.netlify.app/"
        repo="https://github.com/LeanDoliri/favGif-app"
      >
        <ul className="ProjectsSkills">
          <li><img src={ReactIcon} alt="ReactIcon" /></li>
          <li><img src={JavaScriptIcon} alt="JavaScriptIcon" /></li>
          <li><img src={BootstrapIcon} alt="BootstrapIcon" /></li>
          <li><img src={CssIcon} alt="CssIcon" /></li>
          <li><img src={HTMLIcon} alt="HTMLIcon" /></li>
          <li><img src={ViteIcon} alt="ViteIcon" /></li>
          <li><img src={NodeJsIcon} alt="NodeJsIcon" /></li>
        </ul>
      </ProjectCard>
      <ProjectCard
        img={TaskAppThumbnail}
        title="Tasks App"
        description="To-do app desarrollada con React."
        link="https://tasks-app-leandrodoliri.netlify.app/"
        repo="https://github.com/LeanDoliri/tasks-app"
      >
        <ul className="ProjectsSkills">
          <li><img src={ReactIcon} alt="ReactIcon" /></li>
          <li><img src={JavaScriptIcon} alt="JavaScriptIcon" /></li>
          <li><img src={CssIcon} alt="CssIcon" /></li>
          <li><img src={HTMLIcon} alt="HTMLIcon" /></li>
          <li><img src={ViteIcon} alt="ViteIcon" /></li>
          <li><img src={NodeJsIcon} alt="NodeJsIcon" /></li>
        </ul>
      </ProjectCard>
      <ProjectCard
        img={TaTeTiThumbnail}
        title="TaTeTi"
        description="Tic-tac-toe juego desarrollado con React."
        link="https://ta-te-ti-app-leandrodoliri.netlify.app/"
        repo="https://github.com/LeanDoliri/ta-te-ti-app"
      >
        <ul className="ProjectsSkills">
          <li><img src={ReactIcon} alt="ReactIcon" /></li>
          <li><img src={JavaScriptIcon} alt="JavaScriptIcon" /></li>
          <li><img src={CssIcon} alt="CssIcon" /></li>
          <li><img src={HTMLIcon} alt="HTMLIcon" /></li>
          <li><img src={ViteIcon} alt="ViteIcon" /></li>
          <li><img src={NodeJsIcon} alt="NodeJsIcon" /></li>
        </ul>
      </ProjectCard>
      <ProjectCard
        img={WebAcruThumbnail}
        title="Acru"
        description="Proyecto ficticio de página de artista."
        link="https://leandoliri.github.io/ACRU/"
        repo="https://github.com/LeanDoliri/ACRU"
      >
        <ul className="ProjectsSkills">
          <li><img src={BootstrapIcon} alt="BootstrapIcon" /></li>
          <li><img src={SassIcon} alt="SassIcon" /></li>
          <li><img src={CssIcon} alt="CssIcon" /></li>
          <li><img src={HTMLIcon} alt="HTMLIcon" /></li>
        </ul>
      </ProjectCard>
    </div>
  );
}
