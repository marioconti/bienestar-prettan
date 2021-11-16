import React from "react";
import "./CardProducts.css";

export const CardProducts = ({nameProduct, photo, shortDescription, linkFicha, ficha, enlaceAmazon}) => {
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
        <a href={linkFicha} download={ficha}>
          <button className="button">Descargar Ficha Técnica</button>
        </a>
        <a href={enlaceAmazon}>
          <button className='button'>Comprar</button>
        </a>
      
    </div>
  );
};
