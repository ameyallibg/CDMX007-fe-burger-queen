
import React, { Component } from "react";
import {
  Route,
  BrowserRouter,
  NavLink
}

from "react-router-dom";
import {AppContextProvider, AppContext} 
from './appContext';


import logoburguer from "./assets/burguer.png"
import bebidas from "./bebidas";
import Ticket from "./tickets";

bebidas.contextType = AppContext;
Ticket.contextType = AppContext;
 
class Main extends Component {
  render() {
    return (
      <AppContextProvider>
       
      
      <BrowserRouter>
        <div className="main">
          <ul className="header">
        <li><img className="logoburguer" src={logoburguer} alt=""></img></li>
          <li><NavLink className="color-black font-roboto-bold" to="/desayunos">Desayuno</NavLink></li>
          <li><NavLink className="color-black font-roboto-bold" to="/">Hamburguesas</NavLink></li>
          <li><NavLink className="color-black font-roboto-bold" to="/bebidas">Bebidas</NavLink></li>
          <li><NavLink className="color-black font-roboto-bold" to="/complementos">Complementos</NavLink></li>
          </ul>
          <div className="content color-gray">
  <Route  path="/desayunos" component={bebidas}/>
  <Route exact  path ="/" component={bebidas}/>
  <Route path="/bebidas" component={bebidas}/>
  <Route path="/complementos" component={bebidas}/>
</div>
        </div>
        <div className="cuenta">
        <ul className="left-header">
          <li><NavLink className="color-black font-roboto-normal" to="/">Cant.</NavLink></li>
          <li><NavLink className="color-black font-roboto-normal" to="/Stuff">Producto</NavLink></li>
          <li><NavLink className="color-black font-roboto-normal" to="/bebidas">Precio</NavLink></li>
          </ul>
          <Ticket/>
        </div>
        </BrowserRouter>
        </AppContextProvider>
    );
  }
}
 
export default Main;
