import { Fade } from "react-awesome-reveal";
import { FaGlobe, FaCode } from "react-icons/fa";
import Tag from "../tags/Tag";
import home1 from "../../../assets/trackmania/home1.png";
import home2 from "../../../assets/trackmania/home2.png";
import board from "../../../assets/trackmania/board.png";
import boardMobile from "../../../assets/trackmania/boardMobile.png";
import form from "../../../assets/trackmania/form.png";
import signin from "../../../assets/trackmania/signin.png";

export const Trackmania = () => {
  return (
    <>
      <div className="project_header">
        <Fade left>
          <div className="flex">
            <h2>Trackmania</h2>
            <a href="https://jctrackmania.herokuapp.com" target="_blank">
              <FaGlobe />
              Site
            </a>
            <a href="https://github.com/Mordhin/trackmania" target="_blank">
              <FaCode />
              Code
            </a>
          </div>
          <p className="discret">
            Le site peut prendre plusieurs secondes à charger.
          </p>
          <div className="tags">
            <Tag>Full-Stack(MERN)</Tag>
            <Tag>CRUD</Tag>
            <Tag>Authentication</Tag>
            <Tag>Form</Tag>
            <Tag>Responsive</Tag>
          </div>
        </Fade>
      </div>
      <Fade left>
        <div className="project_grid">
          <div className="project_text">
            <p>
              Je voulais me faire la main sur le back-end Node JS. J'ai donc
              développé cette application et sa base de donnée avec la stack
              MERN (MongoDB Express React NodeJS).
            </p>
            <br />
            <p>
              <ul>
                L'application se compose de 4 éléments remarquables :
                <li>
                  Tout d'abord une Landing Page, qui présente le produit et
                  "call to action".
                </li>
                <li>
                  Suite à cela l'utilisateur est invité à se connecter ou à se
                  créer un compte. Cette partie est gérée par soit JSON Web
                  Token (JWT), soit Google Oauth, au choix.
                </li>
                <li>
                  Connecté, l'utilisateur a accès à son board et à la gestion de
                  ses cartes qui représentent chacunes une séance de sport et
                  les performances associées.
                </li>
                <li>
                  Enfin un bouton "nouvelle séance" permet d'en créer une
                  nouvelle grâce à un formulaire dynamique et adaptatif,
                  construit avec les librairies Redux-form et React-DatePicker.
                </li>
              </ul>
            </p>
          </div>
          <div className="tablet_photo">
            <img src={home1} alt="home page" />
          </div>
          <div className="tablet_photo">
            <img src={home2} alt="home page bis" />
          </div>
          <div className="small_photo">
            <img src={signin} alt="signin page" />
          </div>
          <div className="large_photo">
            <img src={board} alt="board page" />
          </div>
          <div className="small_photo">
            <img src={boardMobile} alt="board mobile" />
          </div>
          <div className="tablet_photo">
            <img src={form} alt="new session form" />
          </div>
        </div>
      </Fade>
    </>
  );
};
