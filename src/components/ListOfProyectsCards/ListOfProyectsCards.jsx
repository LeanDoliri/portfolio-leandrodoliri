import "./ListOfProyectsCards.css";
import TaskAppThumbnail from "../../assets/proyects/task-app.png";
import FavGifThumbnail from "../../assets/proyects/favgif-app.png";
import TaTeTiThumbnail from "../../assets/proyects/ta-te-ti-app.png";
import WebAcruThumbnail from "../../assets/proyects/web-acru.png";
import { ProyectCard } from "../ProyectCard/ProyectCard";

export function ListOfProyectsCards() {
  return (
    <div className="ListOfProyectsCards" id="Proyects">
      <ProyectCard
        img={FavGifThumbnail}
        title="FavGif"
        description="App para buscar y guardar gifs."
        link="https://favgif-app-leandrodoliri.netlify.app/"
        repo="https://github.com/LeanDoliri/favGif-app"
      />
      <ProyectCard
        img={TaskAppThumbnail}
        title="TaskApp"
        description="To-do app desarrollada con React."
        link="https://tasks-app-leandrodoliri.netlify.app/"
        repo="https://github.com/LeanDoliri/tasks-app"
      />
      <ProyectCard
        img={TaTeTiThumbnail}
        title="TaTeTi"
        description="Tic-tac-toe juego desarrollado con React."
        link="https://ta-te-ti-app-leandrodoliri.netlify.app/"
        repo="https://github.com/LeanDoliri/ta-te-ti-app"
      />
      <ProyectCard
        img={WebAcruThumbnail}
        title="Acru"
        description="Proyecto ficticio de página de artista."
        link="https://leandoliri.github.io/ACRU/"
        repo="https://github.com/LeanDoliri/ACRU"
      />
    </div>
  );
}
