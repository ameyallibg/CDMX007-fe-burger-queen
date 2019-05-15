import React, { Component } from "react";
import burguerSencilla from "./assets/burguerSencilla.png"
import burguerDoble from "./assets/burguerDoble.png" 
import queso from "./assets/queso.png"
import huevo from "./assets/huevo.png"
class home extends Component {
  render() {
    return (
      <div class="container">
      <div class="container-flex-izq">
      <div class="marco-bloque">
        <div class="bloque bloque-der">
        <div class="bloque-img"><img class="img-comida" src={burguerSencilla}></img></div>
        
        </div>
        <div class="bloque bloque-centro">
        <p class="title-container">Sencilla Res</p>
        </div>
        <div class="bloque bloque-izq">
        <p class="precio">$40</p>
        </div>
        </div>
        <div class="marco-bloque">
        <div class="bloque bloque-der">
        <div class="bloque-img"><img class="img-comida" src={burguerSencilla}></img></div>
        </div>
        <div class="bloque bloque-centro">
        <p class="title-container">Sencilla Pollo</p>
        </div>
        <div class="bloque bloque-izq">
        <p class="precio">$40</p>
        </div>
        </div>
        <div class="marco-bloque">
        <div class="bloque bloque-der">
        <div class="bloque-img"><img class="img-comida" src={burguerSencilla}></img></div>
        </div>
        <div class="bloque bloque-centro">
        <p class="title-container">Sencilla Vegetariana</p>
        </div>
        <div class="bloque bloque-izq">
        <p class="precio">$40</p>
        </div>
        </div>
        <div class="marco-bloque">
        <div class="bloque bloque-der">
        <div class="bloque-img"><img class="img-comida" src={queso}></img></div>
        </div>
        <div class="bloque bloque-centro">
        <p class="title-container">Extra Queso</p>
        </div>
        <div class="bloque bloque-izq">
        <p class="precio">$15</p>
        </div>
        </div>
        
      </div>
      
      <div class="container-flex-der">
      <div class="marco-bloque">
        <div class="bloque bloque-der">
        <div class="bloque-img"><img class="img-comida" src={burguerDoble}></img></div>
        
        </div>
        <div class="bloque bloque-centro">
        <p class="title-container">Doble Res</p>
        </div>
        <div class="bloque bloque-izq">
        <p class="precio">$55</p>
        </div>
        </div>
        <div class="marco-bloque">
        <div class="bloque bloque-der">
        <div class="bloque-img"><img class="img-comida" src={burguerDoble}></img></div>
        
        </div>
        <div class="bloque bloque-centro">
        <p class="title-container">Doble Pollo</p>
        </div>
        <div class="bloque bloque-izq">
        <p class="precio">$55</p>
        </div>
        </div>
        <div class="marco-bloque">
        <div class="bloque bloque-der">
        <div class="bloque-img"><img class="img-comida" src={burguerDoble}></img></div>
        </div>
        <div class="bloque bloque-centro">
        <p class="title-container">Doble Vegetariana</p>
        </div>
        <div class="bloque bloque-izq">
        <p class="precio">$55</p>
        </div>
        </div>
        <div class="marco-bloque">
        <div class="bloque bloque-der">
        <div class="bloque-img"><img class="img-comida" src={huevo}></img></div>
        </div>
        <div class="bloque bloque-centro">
        <p class="title-container">Huevo</p>
        </div>
        <div class="bloque bloque-izq">
        <p class="precio">$15</p>
        </div>
        </div>
      
      </div>
      </div>
    );
  }
}
 
 
export default home;