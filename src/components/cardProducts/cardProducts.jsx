import React from "react";
import "./cardProducts.css";

export const CardProducts = ({nameProduct, photo, shortDescription, linkFicha, ficha}) => {
  return (
    <div className="card-container">
      <div className="product">
        <h3 className="product-name">{nameProduct}</h3>
        <a className="more-info" href="">
          <img
            className="image-product"
            src={photo}
            alt="imagen producto"
          />
        </a>
        <div className="info-description">{shortDescription}</div>
      </div>
      <div className="button">
        <a
          className="button-enlace"
          href={linkFicha}
          download={ficha}
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
