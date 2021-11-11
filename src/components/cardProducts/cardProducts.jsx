import React from "react";
import "./cardProducts.css";
import aloeVera from "../../assets/images/Aloe-Vera-&-Hyaluronic-Ac.png";

export const CardProducts = () => {
  return (
    <div className="card-container">
      <div className="product">
        <h3 className="product-name">
          Beuty Gel de Alore Vera & Ácido Hialuronico
        </h3>
        <a className="more-info" href="">
          <img className="image-product" src={aloeVera} alt="imagen producto" />
        </a>
        <div className="info-description">
          Producto de cuidado en casa, recomendado para el apoyo de pieles secas
          y con signos de causados por la edad
        </div>
      </div>
      <div className="button">
        <a className="button-enlace">Descargar Ficha Técnica</a>
      </div>
      <div className="button">
        <a className="button-enlace">Comprar</a>
      </div>
    </div>
  );
};
