import React from 'react';
import '../css/burgers.css';
import burgerSimple from '../assets/003-hamburguesa.png';
import burgerDoble from '../assets/006-hamburguesa-1.png';
import chees from '../assets/011-queso.png';
import egg from '../assets/001-huevo-frito.png';

const Burgers = (props)=>(
    <div className="menu-burger">
        {/* <div className="menu-promo">
        <h1>Luis, no olvides mencionar la promoción de los aros de cebolla.</h1>
        </div> */}
         <div className="btns-burgers">
              <button className="btn-burger-style">
              <div className="btn-circulo"> <img className="img-burger-s" src={burgerSimple} /></div>
              <div className="btn-text">Sencilla Res</div>
              <div className="btn-price">$40</div>
              </button>
              <button className="btn-burger-style">
              <div className="btn-circulo"> <img className="img-burger-s" src={burgerSimple} /></div>
              <div className="btn-text">Sencilla Pollo</div>
              <div className="btn-price">$40</div>
              </button>
              <button className="btn-burger-style">
              <div className="btn-circulo"> <img className="img-burger-s" src={burgerSimple} /></div>
              <div className="btn-text">Sencilla Vegetariana</div>
              <div className="btn-price">$40</div>
              </button>
              <button className="btn-burger-style">
              <div className="btn-circulo"> <img className="img-burger-s" src={chees} /></div>
              <div className="btn-text">Extra Queso</div>
              <div className="btn-price">$15</div>
              </button>
        </div>
        <div className="btns-burgers">
              <button className="btn-burger-style">
              <div className="btn-circulo"> <img className="img-burger" src={burgerDoble} /></div>
              <div className="btn-text">Doble Res</div>
              <div className="btn-price">$55</div>
              </button>
              <button className="btn-burger-style">
              <div className="btn-circulo"> <img className="img-burger" src={burgerDoble} /></div>
              <div className="btn-text">Doble Pollo</div>
              <div className="btn-price">$55</div>
              </button>
              <button className="btn-burger-style">
              <div className="btn-circulo"> <img className="img-burger" src={burgerDoble} /></div>
              <div className="btn-text">Doble Vegetariana</div>
              <div className="btn-price">$55</div>
              </button>
              <button className="btn-burger-style">
              <div className="btn-circulo"> <img className="img-burger" src={egg} /></div>
              <div className="btn-text">Huevo</div>
              <div className="btn-price">$15</div>
              </button>
        </div>
    </div>
);

export default Burgers;