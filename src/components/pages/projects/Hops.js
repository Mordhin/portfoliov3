import { Fade } from "react-awesome-reveal";
import { FaGlobe, FaCode } from "react-icons/fa";
import Tag from "../tags/Tag";
import home from "../../../assets/hops/home.png";
import beerShow1 from "../../../assets/hops/beerShow1.png";
import beerShow2 from "../../../assets/hops/beerShow2.png";
import brewery1 from "../../../assets/hops/brewery1.png";
import brewery2 from "../../../assets/hops/brewery2.png";
import homeLarge from "../../../assets/hops/homeLarge.png";
import cellar from "../../../assets/hops/cellar.png";

export const Hops = () => {
  return (
    <>
      <div className="project_header">
        <Fade left>
          <div className="flex">
            <h2>Hops... I did it again!</h2>
            <a
              href="https://hops-505.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe />
              Site
            </a>
            <a
              href="https://github.com/adcousin/hops"
              target="_blank"
              rel="noreferrer"
            >
              <FaCode />
              Code
            </a>
          </div>
          <p className="discret">
            Le site peut prendre plusieurs secondes à charger.
          </p>
          <div className="tags">
            <Tag>Fullstack</Tag>
            <Tag>Ruby On Rails</Tag>
            <Tag>Responsive</Tag>
            <Tag>Scraping</Tag>
            <Tag>API</Tag>
            <Tag>Bootstrap</Tag>
          </div>
        </Fade>
      </div>
      <Fade left>
        <div className="project_grid">
          <div className="project_text">
            <p>
              Application Web (très orientée mobile) qui, tel un carnet de bord,
              permet de tracker sa consommation de bière.
            </p>
            <br />
            <p>
              Ainsi il est possible d'enregistrer (en scannant le code-barres)
              une bière que l'on vient de goûter. Aussitôt apparait la fiche du
              produit contenant une multitude d'informations (couleur, type,
              degré, origine, etc). La base de donnée contient des miliers de
              bières enregistrées grâce à du scraping.
              <br />
              Il est possible de "liker" ou de "disliker" la bière, mais aussi
              de la noter comme "à essayer". De ces actions résultent la mise à
              jour du "cellier" qui enregistre et tri toutes ces bières. Il y
              est même possible de créer une playlist de bière pour un évènement
              particulier par exemple.
              <br />
              L'utilisateur peut aussi avoir accès au producteur, son adresse et
              sa localisation sur une carte (grâce à une API), mais aussi à son
              catalogue de bière.
            </p>
            <br />
            <p>
              Ce projet a été développé en équipe de 4 développeurs fullstack,
              codé en Ruby on rails, javascript, HTML, Scss. La base donnée est
              gérée avec PostgreSQL.
            </p>
          </div>
          <div className="small_photo">
            <img src={home} alt="home page" />
          </div>
          <div className="small_photo">
            <img src={beerShow1} alt="beer show" />
          </div>
          <div className="small_photo">
            <img src={beerShow2} alt="beer show" />
          </div>
          <div className="large_photo">
            <img src={homeLarge} alt="home large screen" />
          </div>
          <div className="small_photo">
            <img src={brewery1} alt="brewery show" />
          </div>
          <div className="small_photo">
            <img src={brewery2} alt="brewery show" />
          </div>
          <div className="small_photo">
            <img src={cellar} alt="cellar" />
          </div>
        </div>
      </Fade>
    </>
  );
};
