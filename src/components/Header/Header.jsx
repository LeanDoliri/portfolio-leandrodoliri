import { ArtistaVerificadoIcon } from "../../assets/icons";
import "./Header.css";

export function Header() {
  return (
    <header>
      <div className="ArtistaVerificado" id="Inicio">
        <ArtistaVerificadoIcon />
        <p>Artista verificado</p>
      </div>
      <h1>Leandro Doliri</h1>
      <h2>Full Stack Developer</h2>
    </header>
  );
}
