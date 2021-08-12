import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ShrinkAction } from '../../actions/shrinkAction';

const Item = ({icon, label, to}) => {
  const dispatch = useDispatch();

  const autoShrinkMobile = () => {
    const screen = document.documentElement.clientWidth || window.innerWidth;
    if (screen < 800) dispatch(ShrinkAction());
  };

  return (
    <NavLink to={to} exact className="item" onClick={() => autoShrinkMobile()}>
      <div>{icon}</div>
      <div>{label}</div>
    </NavLink>
  )
}

export default Item
