import "./App.css";
import { Header } from "./components/Header/Header";
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
            <SectionTitle txt={"Proyects"} />
          </section>
          <section>
            <SectionTitle txt={"About me"} />
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
