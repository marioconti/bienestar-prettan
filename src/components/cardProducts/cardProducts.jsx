import React from "react";
import {ModalUnstyledDemo} from "./BotonModal";
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
}) => {
  return (
    <div className="card-container">
      <div className="product">
        <h3 className="product-name">{nameProduct}</h3>
        <a className="more-info" href="">
          <img className="image-product" src={photo} alt="imagen producto" />
        </a>
        <div className="info-description">
          <p>{shortDescription}</p>
          <ModalUnstyledDemo/>

          <div className="details ">
            <details className="details3">
              <summary className="moreinfo-sumary button">
                More information
              </summary>
              <div className="ingredients">
                <div class="contenido">
                  <ul>
                    <h4>Ingredientes Activos</h4>
                    {ingredients.map((ingrediente) => {
                      return <li>{ingrediente.ingredientes}</li>;
                    })}
                  </ul>
                  <ul>
                    <h4>Ingredientes</h4>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  <h4>How to use</h4>
                  <p>{howToUse}</p>
                  <h4>Notes</h4>
                  <p>{notes}</p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
      <a href={linkFicha} download={ficha}>
        <button className="button">Descargar Ficha Técnica</button>
      </a>
      <a href={enlaceAmazon} target="_blank">
        <button className="button">Comprar</button>
      </a>
    </div>
  );
};
