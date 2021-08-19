import { Fade } from "react-awesome-reveal";
import { FaGlobe, FaCode } from "react-icons/fa";
import Tag from "../tags/Tag";
import presentation from "../../../assets/portfolio/presentation.png";
import presentationMobile1 from "../../../assets/portfolio/presentationMobile1.png";
import presentationMobile2 from "../../../assets/portfolio/presentationMobile2.png";
import pokedex from "../../../assets/portfolio/pokedex.png";
import contactMobile from "../../../assets/portfolio/contactMobile.png";

export const Portfolio = () => {
  return (
    <>
      <div className="project_header">
        <Fade left>
          <div className="flex">
            <h2>Pokedex</h2>
            <a href="https://jcpokedex.herokuapp.com" target="_blank">
              <FaGlobe />
              Site
            </a>
            <a href="https://github.com/Mordhin/pokedex" target="_blank">
              <FaCode />
              Code
            </a>
          </div>
          <p className="discret">
            Le site peut prendre plusieurs secondes à charger.
          </p>
          <div className="tags">
            <Tag>Front-End</Tag>
            <Tag>React/Redux</Tag>
            <Tag>Responsive</Tag>
            <Tag>Styled-Components</Tag>
            <Tag>API</Tag>
          </div>
        </Fade>
      </div>
      <Fade left>
        <div className="project_grid">
          <div className="project_text">
            <p>
              Cette application permet de rechercher un Pokémon et les
              informations qui le concerne. L'objectif derrière ce projet était
              de me faire la main avec React et la gestion d'une API
              (PokeAPI.co). J'en ai également profité pour y intégrer un store
              Redux, afin d'expérimenter également cette bibliothèque. J'ai fait
              le choix de PokeAPI car c'est une API gratuite et très riche en
              data. De plus la diversité colorée des pokémons m'a permis de me
              faire plaisir sur le style.
            </p>
            <br />
            <p>
              J'ai développé ce projet sous React JS, Redux. J'ai géré le style
              avec la bibliothèque Styled-Components (CSS-in-JS).{" "}
            </p>
          </div>
          <div className="large_photo">
            <img src={presentation} alt="home page" />
          </div>
          <div className="small_photo">
            <img src={presentationMobile1} alt="presentationMobile" />
          </div>
          <div className="small_photo">
            <img src={presentationMobile2} alt="presentationMobile" />
          </div>
          <div className="large_photo">
            <img src={pokedex} alt="pokedex show" />
          </div>
          <div className="small_photo">
            <img src={contactMobile} alt="contactMobile show" />
          </div>
        </div>
      </Fade>
    </>
  );
};
