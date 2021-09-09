import photo from "../../../assets/pp.jpg";
import { Language } from "./Language";
import { FaGraduationCap, FaLaptop, FaPencilAlt } from "react-icons/fa";
import {
  SiReact,
  SiRedux,
  SiJavascript,
  SiRuby,
  SiHtml5,
  SiCss3,
  SiNodeDotJs,
} from "react-icons/si";
import { Fade } from "react-awesome-reveal";

export const Presentation = () => {
  return (
    <Fade>
      <div className="presentationGrid">
        <div className="photo">
          <img src={photo} alt="moi" />
        </div>
        <div className="presentationText">
          <h2>Bonjour, je suis Julien !</h2>
          <h3>Développeur Front-End junior</h3>
          <p>
            Je suis passionné par le développement web et j'aime créer des UIs{" "}
            <strong>dynamiques</strong>, <strong>responsives</strong> et{" "}
            <strong>intuitives</strong>.
            <br />
            Vous trouverez dans le portfolio des projets web personnels, ou
            auxquels j'ai participé en tant que webdev.
            <br />
            Basé dans le <strong>Nord de la France</strong>, je suis également
            disponible partout ailleurs, en <strong>remote</strong>.{" "}
          </p>
          <p>
            Je recherche des opportunités pour dépasser mes limites et gagner en
            expérience.
          </p>
        </div>
        <div className="languages card">
          <h3>
            <FaLaptop />
            Langages
          </h3>
          <div className="language_tags">
            <Language label="React.js">
              <SiReact />
            </Language>
            <Language label="Redux">
              <SiRedux />
            </Language>
            <Language label="JS">
              <SiJavascript />
            </Language>
            <Language label="HTML">
              <SiHtml5 />
            </Language>
            <Language label="CSS">
              <SiCss3 />
            </Language>
            <Language label="Node.js">
              <SiNodeDotJs />
            </Language>
            <Language label="Rails">
              <SiRuby />
            </Language>
          </div>
        </div>
        <div className="skills card">
          <h3>
            <FaPencilAlt />
            Compétences
          </h3>
          <ul>
            <li>
              <strong>Versioning</strong> avec Git/GitHub.
            </li>
            <li>
              <strong>Design</strong> avec Figma.
            </li>
            <li>
              <strong>Database design</strong>.
            </li>
            <li>
              <strong>Méthode agile</strong> et{" "}
              <strong>travail d'équipe</strong>.
            </li>
          </ul>
        </div>
        <div className="pathway card">
          <h3>
            <FaGraduationCap />
            Mon parcours
          </h3>
          <ul>
            <li>
              Formation <i>Modern React with Redux</i> par Stephen Grider,
              Udemy.
            </li>
            <li>Formation FullStack à Le Wagon, Lille.</li>
            <li>Licence de Psychologie & maîtrise MEEF.</li>
            <li>Bac Scientifique.</li>
          </ul>
        </div>
      </div>
    </Fade>
  );
};
