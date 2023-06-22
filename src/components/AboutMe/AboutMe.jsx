import { SectionTitle } from "../SectionTitle/SectionTitle";
import "./AboutMe.css";

export function AboutMe() {
  return (
    <div className="AboutMeSection">
      <a name="AboutMe"></a>
      <SectionTitle txt={"About me"} />
      <div className="AboutMe">
        <div className="AboutMe-img">
          <div className="AboutMe-background">
            <h1>Leandro Doliri</h1>
            <h2>Full Stack Developer</h2>
            <div className="AboutMe-txt">
              <p>
                Soy una persona apasionada por la tecnología y el desarrollo
                web. Tengo experiencia en diseño sonoro y operación de sonido en
                artes escénicas. Actualmente, estoy enfocado en mi carrera como
                programador Full Stack, y he adquirido habilidades en
                herramientas como JavaScript, React, Node.js, Express, MongoDB,
                Firebase, SQL, Git, GitHub y HTML/CSS, entre otras. <br />
                <br />
              </p>
              <div className="AboutMe-moreTxt">
                <p>
                  Me encanta la creatividad y la resolución de problemas, y he
                  encontrado en la programación una forma de fusionar estas dos
                  pasiones. Creo que la combinación de mi experiencia en el arte
                  y mi interés en la tecnología me da una perspectiva única y
                  valiosa en cualquier proyecto en el que me involucre. <br />
                  <br />
                  Además, mi carrera musical y teatral me ha enseñado la
                  importancia del trabajo en equipo, la comunicación efectiva y
                  la gestión de proyectos. Estoy emocionado por seguir
                  aprendiendo y creciendo en ambos campos y aplicar mis
                  habilidades en proyectos desafiantes y emocionantes. <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
