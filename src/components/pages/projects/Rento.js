import { Fade } from "react-awesome-reveal";
import { FaGlobe, FaCode } from "react-icons/fa";
import Tag from "../tags/Tag";
import home1 from "../../../assets/rento/home1.png";
import home2 from "../../../assets/rento/home2.png";
import home3 from "../../../assets/rento/home3.png";
import mobile1 from "../../../assets/rento/mobile1.png";
import mobile2 from "../../../assets/rento/mobile2.png";

export const Rento = () => {
  return (
    <>
      <div className="project_header">
        <Fade left>
          <div className="flex">
            <h2>Rento</h2>
            <a
              href="https://jcrento.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaGlobe />
              Site
            </a>
            <a
              href="https://github.com/Mordhin/Rento"
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
            <Tag>Front-End</Tag>
            <Tag>React</Tag>
            <Tag>Responsive</Tag>
            <Tag>Scss</Tag>
            <Tag>Landing Page</Tag>
          </div>
        </Fade>
      </div>
      <Fade left>
        <div className="project_grid">
          <div className="project_text">
            <p>
              Landing page développée sous React.js et Scss. Je me suis amusé à
              faire des transitions/transformations sur les différents
              boutons/liens. Ainsi qu'un carousel fait maison.
              <br />
              Les SVGs viennent des sites unDraw.co et haikei.app.
            </p>
          </div>
          <div className="large_photo">
            <img src={home1} alt="home page" />
          </div>
          <div className="small_photo">
            <img src={mobile1} alt="mobile format" />
          </div>
          <div className="large_photo">
            <img src={home2} alt="home page" />
          </div>
          <div className="large_photo">
            <img src={home3} alt="home page" />
          </div>
          <div className="small_photo">
            <img src={mobile2} alt="mobile format" />
          </div>
        </div>
      </Fade>
    </>
  );
};
