import React from "react";
import {MoreInformation} from "../BotonModal/BotonModal";
import "./cardProducts.css";


export const CardProducts = ({
  nameProduct,
  photo,
  shortDescription,
  howToUse,
  notes,
  linkFicha,
  ficha,
  enlaceAmazon,
  ingredients,
  othersIngredients,
}) => {
  return (
    <div className="card-container">
      <div className="product">
        <h3 className="product-name ">{nameProduct}</h3>
        <a className="more-info" href="">
          <img className="image-product" src={photo} alt="imagen producto" />
        </a>
        <div className="info-description ">
          <p>{shortDescription}</p>
        </div>
      </div>
      <MoreInformation notes={notes} howToUse={howToUse} ingredients={ingredients} othersIngredients={othersIngredients} />
      <a href={linkFicha} download={ficha}>
        <button className="button">Descargar Ficha Técnica</button>
      </a>
      <a href={enlaceAmazon} target="_blank">
        <button className="button">Comprar</button>
      </a>
    </div>
  );
};
