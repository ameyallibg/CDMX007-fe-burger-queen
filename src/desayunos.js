import React, { Component } from "react";
import sandwich from "./assets/sandwich.png";
import jugo from "./assets/jugo.png";
import cafe from "./assets/cafe.png";
import leche from "./assets/leche.png";
class desayunos extends Component {
  render() {
    return (
      <div class="container">
      <div class="container-flex-izq">
      <div class="marco-bloque">
        <div class="bloque bloque-der">
        <div class="bloque-img"><img class="img-comida" src={sandwich}></img></div>
        
        </div>
        <div class="bloque bloque-centro">
        <p class="title-container">Sandwich de jamón y queso</p>
        </div>
        <div class="bloque bloque-izq">
        <p class="precio">$35</p>
        </div>
        </div>
        <div class="marco-bloque">
        <div class="bloque bloque-der">
        <div class="bloque-img"><img class="img-comida" src={cafe}></img></div>
        
        </div>
        <div class="bloque bloque-centro">
        <p class="title-container">Café Americano</p>
        </div>
        <div class="bloque bloque-izq">
        <p class="precio">$20</p>
        </div>
        </div>
        
      </div>
      
      <div class="container-flex-der">
      <div class="marco-bloque">
        <div class="bloque bloque-der">
        <div class="bloque-img"><img class="img-comida" src={jugo}></img></div>
        
        </div>
        <div class="bloque bloque-centro">
        <p class="title-container">Jugo Natural</p>
        </div>
        <div class="bloque bloque-izq">
        <p class="precio">$15</p>
        </div>
        </div>
        <div class="marco-bloque">
        <div class="bloque bloque-der">
        <div class="bloque-img"><img class="img-comida" src={leche}></img></div>
        
        </div>
        <div class="bloque bloque-centro">
        <p class="title-container">Cafe con leche</p>
        </div>
        <div class="bloque bloque-izq">
        <p class="precio">$28</p>
        </div>
        </div>
      
      </div>
      </div>
    );
  }
}
 
export default desayunos;