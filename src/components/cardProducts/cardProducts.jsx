import React from "react";
import "./cardProducts.css";

export const CardProducts = (props) => {
  return (
    <div className="card-container">
      <div className="product">
        <h3 className="product-name">{props.nameProduct}</h3>
        <a className="more-info" href="">
          <img
            className="image-product"
            src={props.photo}
            alt="imagen producto"
          />
        </a>
        <div className="info-description">{props.shortDescription}</div>
      </div>
      <div className="button">
        <a
          className="button-enlace"
          href={props.linkFicha}
          download={props.ficha}
        >
          Descargar Ficha Técnica
        </a>
      </div>
      <div className="button">
        <a className="button-enlace">Comprar</a>
      </div>
    </div>
  );
};
