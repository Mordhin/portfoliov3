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
            <h2>Portfolio</h2>
            <div className="disabled">
              <FaGlobe />
              Site
            </div>
            <a href="https://github.com/Mordhin/portfoliov3" target="_blank">
              <FaCode />
              Code
            </a>
          </div>
          <p className="discret">
            Le site peut prendre plusieurs secondes à charger.
          </p>
          <div className="tags">
            <Tag>Front-End</Tag>
            <Tag>React/redux</Tag>
            <Tag>Responsive</Tag>
          </div>
        </Fade>
      </div>
      <Fade left>
        <div className="project_grid">
          <div className="project_text">
            <p>
              Je voulais un portfolio simple et efficace pour présenter mes projets. 
              <br/>
              Je me suis amusé à coder une navbar dynamique que l'on peut cacher et faire apparaitre à souhait, le tout bien évidemment responsive.
              Toutes les pages utilisent une css grid qui permet un affichage soigné et surtout facilite la responsivité.
              <br/>
              Dans l'onglet contact, j'ai implémenté un formulaire d'envoi de mail que je reçois directement sur ma boîte. 
            </p>
            <br />
            <p>
              J'ai développé ce projet sous React JS, Redux. J'ai codé le style
              Sass, comme pour la plupart de les projets.
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
