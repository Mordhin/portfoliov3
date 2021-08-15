import photo from "../../../assets/pp.jpg";
import { Language } from "./Language";
import { FaLaptop } from "react-icons/fa";

export const Presentation = () => {
  return (
    <div className="presentationGrid">
      <div className="photo">
        <img src={photo} alt="moi" />
      </div>
      <div className="presentationText">
        <h2>Bonjour, je suis Julien !</h2>
        <h3>Développeur Front-End junior</h3>
        <p>Je suis passionné par le développement web et j'aime créer des UIs <strong>dynamiques</strong>, <strong>responsives</strong> et <strong>intuitives</strong>.
        <br/>Vous trouverez dans le portfolio des projets web personnels, ou auxquels j'ai participé en tant que webdev.
        <br/>Basé dans le <strong>Nord de la France</strong>, je suis également disponible partout ailleurs, en <strong>remote</strong>. </p>
        <p>Je recherche des opportunités pour dépasser mes limites et gagner en expérience.</p>
      </div>
      <div className='languages'>
        <h3><FaLaptop />Langages</h3>
        <div className='language_tags'>
          <Language label='React'></Language>
          <Language label='Redux'></Language>
          <Language label='JS'></Language>
          <Language label='Rails'></Language>
          <Language label='HTML'></Language>
          <Language label='CSS'></Language>
        </div>
      </div>
      <div className="skills">skills</div>
      <div className="pathway">pathway</div>
    </div>
  )
};