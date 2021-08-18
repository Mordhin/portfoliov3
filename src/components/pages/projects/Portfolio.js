import { Fade } from "react-awesome-reveal";
import { FaGlobe, FaCode } from "react-icons/fa";
import Tag from "../tags/Tag";

export const Portfolio = () => {
  return (
    <Fade duration={500}>
      <div className="project_header">
        <div>
          <h2>Portfolio</h2>
          <a href="#"><FaGlobe />Site</a>
          <a href="#"><FaCode />Code</a>
        </div>
        <p>
          Le site peut prendre plusieurs secondes à charger.
        </p>
      </div>
      <div className="project_grid">
        <div className="large_photo row2photo"></div>
        <div className="tags">
          <Tag>Front-End</Tag>
          <Tag>React/Redux</Tag>
          <Tag>Sass</Tag>
          <Tag>Responsive</Tag>
        </div>
        <div className="small_photo row4photo"></div>
        <div className="project_text row4text">
        <p>
          Cette application permet de rechercher un Pokémon et les informations
          qui le concerne.
          <br />
          L'objectif derrière ce projet était de me faire la main avec React et
          la gestion d'une API (
          <a href="https://pokeapi.co/" target="blank">
            PokeAPI.co
          </a>
          ). J'en ai également profité pour y intégrer un store Redux, afin
          d'expérimenter également cette bibliothèque.
          <br />
          J'ai fait le choix de PokeAPI car c'est une API gratuite et très riche
          en data. De plus la diversité colorée des pokémons m'a permis de me
          faire plaisir sur le style.
        </p>
        </div>
        <div className="project_text row5text">
        <p>
          J'ai développé ce projet sous React JS, Redux. J'ai géré le style avec
          la bibliothèque Styled-Components (CSS-in-JS).
        </p>
        </div>
        <div className="small_photo row5photo"></div>
        <div className="large_photo row6photo"></div>
      </div>
    </Fade>
  )
};