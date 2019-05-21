import React from "react";
import { NavLink } from "react-router-dom";
import logoBurger from "../assets/ic_launcher.png";
import "../css/navbar.css";

const Navbar = props => (
  <div className="nav">
    <div className="nav-menu">
      <ul className="menu-list">
        {/* <li><NavLink className="nav-menu__link" exact to="/">Home</NavLink></li> */}
        <img className="logo-burger " src={logoBurger} />
        <li>
          <NavLink className="nav-menu__link" to="/breakfast">
            Desayuno
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-menu__link" to="/burgers">
            Hamburguesas
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-menu__link" to="/drinks">
            Bebidas
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-menu__link" to="/complements">
            Complementos
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="ticket-nav">
      <ul className="ticket-descri">
        <li className="space-cant">Cant.</li>
        <li className="space-product">Producto</li>
        <li>Precio</li>
      </ul>
    </div>
  </div>
);

export default Navbar;