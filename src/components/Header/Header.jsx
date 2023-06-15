import { ArtistaVerificadoIcon } from "../../assets/Icons";
import "./Header.css";

export function Header() {
  return (
    <header className="Header" id="Home">
      <div className="Header-filter">
        <div className="Header-artistaVerificado">
          <ArtistaVerificadoIcon />
          <p>Usuario verificado</p>
        </div>
        <h1>Leandro Doliri</h1>
        <h2>Full Stack Developer</h2>
      </div>
    </header>
  );
}
