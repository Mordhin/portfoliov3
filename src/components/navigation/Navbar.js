import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShrinkAction } from '../../actions/shrinkAction';
import { FaBars, FaRunning, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { VscPreview } from "react-icons/vsc";
import { IoBeer } from 'react-icons/io5'
import { CgPokemon } from 'react-icons/cg'
import { ImBook } from 'react-icons/im'
import { MdContactMail } from 'react-icons/md'
import pp from "../../assets/pp.jpg";
import Item from './Item';

export const Navbar = () => {
  const dispatch = useDispatch();
  const shrink = useSelector(state => state.Shrink);

  const handleShrink = () => {
    dispatch(ShrinkAction());
  }

    return (
      <div className={`navbar ${shrink ? "shrink" : ""}`}>
        <div className="top_menu">
          <div className="hamburger" onClick={() => handleShrink()}><FaBars /></div>
          <div className="header">
            <img src={pp} alt="me" />
            <div className={`title ${shrink ? "shrink" : ""}`}>
              <div>Julien Corion</div>
              <div>Développeur Front-End</div>
            </div>
          </div>
        </div>
        <div className={`main_menu ${shrink ? "shrink" : ""}`}>
          <Item to="/" icon={<VscPreview />} label="Présentation" />
          <Item to="/hops" icon={<IoBeer />} label="Hops... I did it again!" />
          <Item to="/trackmania" icon={<FaRunning />} label="Trackmania" />
          <Item to="/pokedex" icon={<CgPokemon />} label="Pokedex" />
          <Item to="/portfolio" icon={<ImBook />} label="Portfolio" />
          <Item to="/contact" icon={<MdContactMail />} label="Contact" />
        </div>
        <div className={`footer ${shrink ? "shrink" : ""}`}>
          <a href=""><FaLinkedin/></a>
          <a href="https://github.com/Mordhin"><FaGithubSquare/></a>
          
        </div>
      </div>
    )
  }
