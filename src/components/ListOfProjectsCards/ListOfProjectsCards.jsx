import "./ListOfProjectsCards.css";
import TaskAppThumbnail from "../../assets/projects/task-app.png";
import FavGifThumbnail from "../../assets/projects/favgif-app.png";
import TaTeTiThumbnail from "../../assets/projects/ta-te-ti-app.png";
import WebAcruThumbnail from "../../assets/projects/web-acru.png";
import { ProjectCard } from "../ProjectCard/ProjectCard";

export function ListOfProjectsCards() {
  return (
    <div className="ListOfProjectsCards" id="Projects">
      <ProjectCard
        img={FavGifThumbnail}
        title="FavGif"
        description="App para buscar y guardar gifs."
        link="https://favgif-app-leandrodoliri.netlify.app/"
        repo="https://github.com/LeanDoliri/favGif-app"
      />
      <ProjectCard
        img={TaskAppThumbnail}
        title="TaskApp"
        description="To-do app desarrollada con React."
        link="https://tasks-app-leandrodoliri.netlify.app/"
        repo="https://github.com/LeanDoliri/tasks-app"
      />
      <ProjectCard
        img={TaTeTiThumbnail}
        title="TaTeTi"
        description="Tic-tac-toe juego desarrollado con React."
        link="https://ta-te-ti-app-leandrodoliri.netlify.app/"
        repo="https://github.com/LeanDoliri/ta-te-ti-app"
      />
      <ProjectCard
        img={WebAcruThumbnail}
        title="Acru"
        description="Proyecto ficticio de página de artista."
        link="https://leandoliri.github.io/ACRU/"
        repo="https://github.com/LeanDoliri/ACRU"
      />
    </div>
  );
}
