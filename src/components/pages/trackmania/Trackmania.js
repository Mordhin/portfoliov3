import { Fade } from "react-awesome-reveal";
import { FaGlobe, FaCode } from "react-icons/fa";
import Tag from "../tags/Tag";

export const Trackmania = () => {
  return (
    <Fade>
      <div className="project_header">
        <div>
          <h2>Trackmania</h2>
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
          <Tag>Fullstack</Tag>
          <Tag>MERN</Tag>
          <Tag>Responsive</Tag>
          <Tag>Redux-Form</Tag>
        </div>
        <div className="small_photo row4photo"></div>
        <div className="project_text row4text">
        <p>
          Application Web qui, tel un carnet de bord, permet de tracker sa
          consommation de bière.
          <br />
          Ainsi il est possible d'enregistrer (en scannant le code-barres) une
          bière que l'on vient de goûter, indiquer si elle nous a plu, obtenir
          une multitude d'informations concernant le produit mais aussi le
          producteur.
        </p>
        </div>
        <div className="project_text row5text">
        <p>
          Nous avons développé ce projet en équipe de 4 développeurs fullstack,
          codé en Ruby on rails, javascript, html, css.
        </p>
        </div>
        <div className="small_photo row5photo"></div>
        <div className="large_photo row6photo"></div>
      </div>
    </Fade>
  )
};