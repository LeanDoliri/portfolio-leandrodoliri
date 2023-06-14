import "./ListOfSkillsCards.css";
import BootstrapIcon from "../../assets/skills/bootstrap-svgrepo-com.svg";
import CssIcon from "../../assets/skills/css-3-svgrepo-com.svg";
import ExpressIcon from "../../assets/skills/express-svgrepo-com.svg";
import GitIcon from "../../assets/skills/git-svgrepo-com.svg";
import HTMLIcon from "../../assets/skills/html-5-svgrepo-com.svg";
import JavaScriptIcon from "../../assets/skills/javascript-svgrepo-com.svg";
import MongoDBIcon from "../../assets/skills/mongo-svgrepo-com.svg";
import NodeIcon from "../../assets/skills/node-svgrepo-com.svg";
import ReactIcon from "../../assets/skills/react-svgrepo-com.svg";
import SassIcon from "../../assets/skills/sass-svgrepo-com.svg";
import SQLIcon from "../../assets/skills/sql-database-generic-svgrepo-com.svg";
import ViteIcon from "../../assets/skills/vite-svgrepo-com.svg";
import WebpackIcon from "../../assets/skills/webpack-svgrepo-com.svg";
import { SkillCard } from "../../components/SkillCard/SkillCard";

export function ListOfSkillsCards() {
  return (
    <div className="ListOfSkillsCards" id="Skills">
      <SkillCard img={ReactIcon} title="React Js" />
      <SkillCard img={NodeIcon} title="Node Js" />
      <SkillCard img={ExpressIcon} title="Express" />
      <SkillCard img={MongoDBIcon} title="MongoDB" />
      <SkillCard img={SQLIcon} title="SQL" />
      <SkillCard img={ViteIcon} title="Vite" />
      <SkillCard img={WebpackIcon} title="Webpack" />
      <SkillCard img={JavaScriptIcon} title="JavaScript" />
      <SkillCard img={GitIcon} title="Git" />
      <SkillCard img={SassIcon} title="Sass" />
      <SkillCard img={BootstrapIcon} title="Bootstrap" />
      <SkillCard img={CssIcon} title="CSS" />
      <SkillCard img={HTMLIcon} title="HTML" />
    </div>
  );
}
