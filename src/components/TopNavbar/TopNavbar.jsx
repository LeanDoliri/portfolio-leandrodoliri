import CV from "../../assets/Cv-LeandroDoliri-FullStackDeveloper2023.pdf";
import "./TopNavbar.css"

export function TopNavbar() {
  return (
    <div className="TopNavbar">
      <a className="TopNavbar-btn" href={CV} download >Descargar CV</a>
    </div>
  );
}
