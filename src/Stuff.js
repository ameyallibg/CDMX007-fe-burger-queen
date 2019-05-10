import React, { Component } from "react";
import burguerSencilla from "./assets/burguerSencilla.jpg"
import burguerDoble from "./assets/burguerDoble.jpg" 
import queso from "./assets/queso.jpg"
import huevo from "./assets/huevo.png"
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Luis no olvides la promocion de los aros de cebolla</h2>
        <div class="burguer-left">
        <li><button><div><img class="burguer-width" src={burguerSencilla}></img><p class="tipo-burguer">Sencilla Res</p></div></button></li>
        <li><button><img src={burguerSencilla}></img>Sencila Pollo</button></li>
        <li><button><img src={burguerSencilla}></img>Sencilla Vegetariana</button></li>
        <li><button><img src={queso}></img>Extra Queso</button></li>
        </div>
        <div class="burguer-rigth">
        <li><button><img src={burguerDoble}></img>Doble Res</button></li>
        <li><button><img src={burguerDoble}></img>Doble Pollo</button></li>
        <li><button><img src={burguerDoble}></img>Doble Vegetariana</button></li>
        <li><button><img src={huevo}></img>Huevo</button></li>
        </div>
        </div>        
    );
  }
}
 
export default Stuff;