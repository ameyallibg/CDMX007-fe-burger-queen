import React from "react";
import "../css/drinks.css";
import potatos from "../assets/002-patatas-fritas.png";
import onion from "../assets/012-aros-de-cebolla.png";

const Complements = props => (
  <div className="menu-drinks">
    <div className="btn-drinks-right">
      <button className="btn-drinks-style">
        <div className="btn-circulo">
          {" "}
          <img className="img-burger-s" src={potatos} />{" "}
        </div>{" "}
        <div className="btn-text"> Papas a la Francesa </div>{" "}
        <div className="btn-price"> $15 </div>{" "}
      </button>{" "}
    </div>{" "}
    <div className="btn-drinks">
      <button className="btn-drinks-style">
        <div className="btn-circulo">
          {" "}
          <img className="img-burger" src={onion} />{" "}
        </div>{" "}
        <div className="btn-text"> Aros de Cebolla </div>{" "}
        <div className="btn-price"> $15 </div>{" "}
      </button>{" "}
    </div>{" "}
  </div>
);

export default Complements;
