import React, { Component } from "react";
import {
  Route,
  BrowserRouter,
  NavLink
}
from "react-router-dom";
import logoburguer from "./assets/burguer.png"
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
 
class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div class="main">
          <ul className="header">
        <li><img class="logoburguer" src={logoburguer}></img></li>
          <li><NavLink className="color-black font-roboto-bold" to="/">Desayuno</NavLink></li>
          <li><NavLink className="color-black font-roboto-bold" to="/Stuff">Hamburguesas</NavLink></li>
          <li><NavLink className="color-black font-roboto-bold" to="/Contact">Bebidas</NavLink></li>
          <li><NavLink className="color-black font-roboto-bold" to="/Contact">Complementos</NavLink></li>
          </ul>
          <div class="content color-gray">
  <Route exact path="/" component={Home}/>
  <Route path="/stuff" component={Stuff}/>
  <Route path="/contact" component={Contact}/>
</div>
        </div>
        <div class="cuenta">
        <ul class="left-header">
          <li><NavLink className="color-black font-roboto-normal" to="/">Cant.</NavLink></li>
          <li><NavLink className="color-black font-roboto-normal" to="/Stuff">Producto</NavLink></li>
          <li><NavLink className="color-black font-roboto-normal" to="/Contact">Precio</NavLink></li>
          </ul>
        </div>
        </BrowserRouter>
    );
  }
}
 
export default Main;
