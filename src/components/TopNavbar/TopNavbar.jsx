import CV from "../../assets/Cv-LeandroDoliri-FullStackDeveloper2023.pdf";
import "./TopNavbar.css";

export function TopNavbar() {
  return (
    <div className="TopNavbar">
      <a className="TopNavbar-btn" href={CV} target="_blank">
        Descargar CV
      </a>
    </div>
  );
}
