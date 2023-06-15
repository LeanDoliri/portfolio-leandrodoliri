import "./GetInTouch.css";
import LinkedInIcon from "../../assets/social-media/linkedin-svgrepo-com.svg";
import GithubIcon from "../../assets/social-media/github-svgrepo-com.svg";
import MailIcon from "../../assets/social-media/mail-svgrepo-com.svg";
import CVIcon from "../../assets/social-media/cv-svgrepo-com.svg";
import CV from "../../assets/Cv-LeandroDoliri-FullStackDeveloper2023.pdf";
import { SectionTitle } from "../SectionTitle/SectionTitle";

export function GetInTouch() {
  return (
    <div className="GetInTouch">
      <SectionTitle txt={"Get in touch"} />
      <ul className="GetInTouch-icons">
        <li>
          <a
            href="https://www.linkedin.com/in/leandro-doliri/"
            target="_blank"
            className="GetInTouch-icon"
          >
            <img src={LinkedInIcon} alt="linkedin" />
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://github.com/LeanDoliri"
            target="_blank"
            className="GetInTouch-icon"
          >
            <img src={GithubIcon} alt="github" />
            Github
          </a>
        </li>
        <li>
          <a
            href="mailto:leandoliri@gmail.com"
            target="_blank"
            className="GetInTouch-icon"
          >
            <img src={MailIcon} alt="github" />
            Correo
          </a>
        </li>
        <li>
          <a
            href={CV}
            download
            className="GetInTouch-icon"
          >
            <img src={CVIcon} alt="github" />
            Descargar CV
          </a>
        </li>
      </ul>
    </div>
  );
}
