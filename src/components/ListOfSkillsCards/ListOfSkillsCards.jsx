import "./ListOfSkillsCards.css";
import BootstrapIcon from "../../assets/bootstrap-svgrepo-com.svg";
import CssIcon from "../../assets/css-3-svgrepo-com.svg";
import ExpressIcon from "../../assets/express-svgrepo-com.svg";
import GitIcon from "../../assets/git-svgrepo-com.svg";
import HTMLIcon from "../../assets/html-5-svgrepo-com.svg";
import JavaScriptIcon from "../../assets/javascript-svgrepo-com.svg";
import MongoDBIcon from "../../assets/mongo-svgrepo-com.svg";
import NodeIcon from "../../assets/node-svgrepo-com.svg";
import ReactIcon from "../../assets/react-svgrepo-com.svg";
import SassIcon from "../../assets/sass-svgrepo-com.svg";
import SQLIcon from "../../assets/sql-database-generic-svgrepo-com.svg";
import { SkillCard } from "../../components/SkillCard/SkillCard";

export function ListOfSkillsCards() {
  return (
    <div className="ListOfCards">
      <SkillCard img={ReactIcon} title="React Js" />
      <SkillCard img={NodeIcon} title="Node Js" />
      <SkillCard img={ExpressIcon} title="Express" />
      <SkillCard img={MongoDBIcon} title="MongoDB" />
      <SkillCard img={SQLIcon} title="SQL" />
      <SkillCard img={JavaScriptIcon} title="JavaScript" />
      <SkillCard img={GitIcon} title="Git" />
      <SkillCard img={SassIcon} title="Sass" />
      <SkillCard img={BootstrapIcon} title="Bootstrap" />
      <SkillCard img={CssIcon} title="CSS" />
      <SkillCard img={HTMLIcon} title="HTML" />
    </div>
  );
}
