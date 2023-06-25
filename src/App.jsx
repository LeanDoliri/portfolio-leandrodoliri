import "./App.css";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { FollowSection } from "./components/FollowSection/FollowSection";
import { GetInTouch } from "./components/GetInTouch/GetInTouch";
import { Header } from "./components/Header/Header";
import { ListOfProjectsCards } from "./components/ListOfProjectsCards/ListOfProjectsCards";
import { ListOfSkillsCards } from "./components/ListOfSkillsCards/ListOfSkillsCards";
import { MainFooter } from "./components/MainFooter/MainFooter";
import { Navbar } from "./components/Navbar/Navbar";
import { SectionTitle } from "./components/SectionTitle/SectionTitle";
import { TopNavbar } from "./components/TopNavbar/TopNavbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <a name="Home"></a>
        <TopNavbar />
        <Header />
        <main>
          <section>
            <FollowSection />
          </section>
          <section>
            <a name="Skills"></a>
            <SectionTitle txt={"Skills"} />
            <ListOfSkillsCards />
          </section>
          <section>
            <a name="Projects"></a>
            <SectionTitle txt={"Projects"} />
            <ListOfProjectsCards />
          </section>
          <section className="PersonalSection">
            <AboutMe />
            <GetInTouch />
          </section>
        </main>
        <footer>
          <MainFooter />
        </footer>
      </div>
    </div>
  );
}

export default App;
