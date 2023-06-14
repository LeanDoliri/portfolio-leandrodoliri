import "./App.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { Header } from "./components/Header/Header";
import { ListOfProyectsCards } from "./components/ListOfProyectsCards/ListOfProyectsCards";
import { ListOfSkillsCards } from "./components/ListOfSkillsCards/ListOfSkillsCards";
import { Navbar } from "./components/Navbar/Navbar";
import { SectionTitle } from "./components/SectionTitle/SectionTitle";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Header />
        <main>
          <section>
            <SectionTitle txt={"Skills"} />
            <ListOfSkillsCards />
          </section>
          <section>
            <SectionTitle txt={"Proyectos"} />
            <ListOfProyectsCards />
          </section>
          <section>
            <SectionTitle txt={"Sobre mí"} />
            <AboutMe />
          </section>
        </main>
        <footer>
            <hr />
            <p>Contact</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
