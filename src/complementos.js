import React, { Component } from "react";
import tomate from "./assets/tomate.png"
import pepinillo from "./assets/pepinillo.png" 
import cebolla from "./assets/cebolla.png"
import lechuga from "./assets/lechuga.png";
import catsup from "./assets/catsup.png" 
import mostaza from "./assets/mostaza.png"
import mayonesa from "./assets/mayonesa.png";
class complementos extends Component {
    render() {
      return (
        <div class="container-cond">
          <div class="div-condimentos">
            <img class="condimentos" src={tomate}></img>
          </div>
          <div class="div-condimentos">
          <img class="condimentos" src={pepinillo}></img>
          </div>
          <div class="div-condimentos">
          <img class="condimentos" src={cebolla}></img>
          </div>
          <div class="div-condimentos">
          <img class="condimentos" src={lechuga}></img>
          </div>
          <div class="div-condimentos">
          <img class="condimentos" src={catsup}></img>
          </div>
          <div class="div-condimentos">
          <img class="condimentos" src={mostaza}></img>
          </div>
          <div class="div-condimentos">
          <img class="condimentos" src={mayonesa}></img>
          </div>
        </div>
        );
    }
  }      
export default complementos;