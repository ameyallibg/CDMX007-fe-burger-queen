
import React, { Component } from "react";
import {
  Route,
  BrowserRouter,
  NavLink
}
from "react-router-dom";

import logoburguer from "./assets/burguer.png"
import desayunos from "./desayunos";
import home from "./home";
import bebidas from "./bebidas";
import complementos from "./complementos";
 
class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div class="main">
          <ul className="header">
        <li><img class="logoburguer" src={logoburguer}></img></li>
          <li><NavLink className="color-black font-roboto-bold" to="/desayunos">Desayuno</NavLink></li>
          <li><NavLink className="color-black font-roboto-bold" to="/">Hamburguesas</NavLink></li>
          <li><NavLink className="color-black font-roboto-bold" to="/bebidas">Bebidas</NavLink></li>
          <li><NavLink className="color-black font-roboto-bold" to="/complementos">Complementos</NavLink></li>
          </ul>
          <div class="content color-gray">
  <Route  path="/desayunos" component={bebidas}/>
  <Route exact  path ="/" component={bebidas}/>
  <Route path="/bebidas" component={bebidas}/>
  <Route path="/complementos" component={bebidas}/>
</div>
        </div>
        <div class="cuenta">
        <ul class="left-header">
          <li><NavLink className="color-black font-roboto-normal" to="/">Cant.</NavLink></li>
          <li><NavLink className="color-black font-roboto-normal" to="/Stuff">Producto</NavLink></li>
          <li><NavLink className="color-black font-roboto-normal" to="/bebidas">Precio</NavLink></li>
          </ul>
        </div>
        </BrowserRouter>
    );
  }
}
 
export default Main;
