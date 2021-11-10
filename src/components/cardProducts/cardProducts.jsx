import React from "react";
import "./cardProducts.css";
import aloeVera from '../../assets/images/Aloe-Vera-&-Hyaluronic-Ac.png'

export const CardProducts = () => {
  return (
    <div className="contenedor-card">
      <div className="producto">
        <h3 className="nombre-producto">
          Beuty Gel de Alore Vera & Ácido Hialuronico
        </h3>
        <a className="more-info" href="">
          <img className="imagen-producto" src={aloeVera} alt="imagen producto" />
        </a>
        <div className="info-descripcion">
          Producto de cuidado en casa, recomendado para el apoyo de pieles secas
          y con signos de causados por la edad
        </div>
      </div>
      <div className="boton">
        <a className="boton-enlace">Descargar Ficha Técnica</a>
      </div>
      <div className="boton">
        <a className="boton-enlace">Comprar</a>
      </div>
    </div>
  );
};
