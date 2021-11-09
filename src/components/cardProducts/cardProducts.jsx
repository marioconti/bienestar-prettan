import React from "react";
import './cardProducts.css'


export const CardProducts = () => {
  return (
    <div className="contenedor-card">
      <div className="producto">
        <h3 className="nombre-producto">
          Beuty Gel de Alore Vera & Ácido Hialuronico
        </h3>
        <img className="imagen-producto" src="" alt="imagen producto" />
        <div className="info-descripcion">
          Producto de cuidado en casa, recomendado para el apoyo de pieles secas
          y con signos de causados por la edad
        </div>
      </div>
      <div className="boton">
        <div className="boton-enlace">Descargar Ficha Técnica</div>
      </div>
      <div className="boton">
        <div className="boton-enlace">Compra</div>
      </div>
    </div>
  );
};
