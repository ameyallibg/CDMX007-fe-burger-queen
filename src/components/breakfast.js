import React from 'react';
import '../css/breakfast.css';
import sandwich from '../assets/013-pan.png';
import capuchino from '../assets/capuchino.png';
import coffe from '../assets/taza-para-cafe.png';
import juice from '../assets/zumo-de-naranja.png';

const Breakfast = (props)=>(
    <div className="menu-breakfast">
        {/* <div className="menu-promo">
        <h1>Luis, no olvides mencionar la promoción de los aros de cebolla.</h1>
        </div> */}
         <div className="btns-breakfast">
              <button className="btn-breakfast-style">
              <div className="btn-circulo"> <img className="img-breakfast-s" src={sandwich} /></div>
              <div className="btn-text-break">Sandwich de jamón y queso</div>
              <div className="btn-price">$35</div>
              </button>
              <button className="btn-breakfast-style">
              <div className="btn-circulo"> <img className="img-breakfast-s" src={coffe} /></div>
              <div className="btn-text-break">Café Americano</div>
              <div className="btn-price">$20</div>
              </button>
        </div>
        <div className="btn-breakfast">
              <button className="btn-breakfast-style">
              <div className="btn-circulo"> <img className="img-breakfast" src={juice} /></div>
              <div className="btn-text-break">Jugo Natural</div>
              <div className="btn-price">$15</div>
              </button>
              <button className="btn-breakfast-style">
              <div className="btn-circulo"> <img className="img-breakfast" src={capuchino} /></div>
              <div className="btn-text-break">Café con leche</div>
              <div className="btn-price">$28</div>
              </button>

        </div>
    </div>
);

export default Breakfast;