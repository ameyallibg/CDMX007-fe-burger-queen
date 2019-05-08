import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => (
  <div className="nav">
    <ul className="nav-menu">
        <li><NavLink className="nav-menu__link" exact to="/">Home</NavLink></li>
        <li><NavLink className="nav-menu__link" to="/breakfast">Desayuno</NavLink></li>
        <li><NavLink className="nav-menu__link" to="/burgers">Hamburguesas</NavLink></li>  
        <li><NavLink className="nav-menu__link" to="/drinks">Bebidas</NavLink></li>
        <li><NavLink className="nav-menu__link" to="/complements">Complementos</NavLink></li>     
    </ul>
  </div>
);

export default Navbar;

