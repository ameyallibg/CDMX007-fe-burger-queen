import React from 'react';
import water from '../assets/014-agua.png';
import cola from '../assets/005-cola.png';

const Drinks = (props)=>(
    <div className="menu-drinks">
        {/* <div className="menu-promo">
        <h1>Luis, no olvides mencionar la promoción de los aros de cebolla.</h1>
        </div> */}
         <div className="btn-drinks-right">
              <button className="btn-drinks-style">
              <div className="btn-circulo"> <img className="img-drinks-s" src={cola} /></div>
              <div className="btn-text-drinks">Refesco</div>
              <div className="btn-price-drinks">$35</div>
              </button>
        </div>
        <div className="btn-drinks">
              <button className="btn-drinks-style">
              <div className="btn-circulo"> <img className="img-drinks" src={water} /></div>
              <div className="btn-text-drinks">Agua</div>
              <div className="btn-price-drinks">$15</div>
              </button>

        </div>
    </div>
);

export default Drinks;