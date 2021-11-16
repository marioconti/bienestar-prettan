import React from "react";
import { arrayProducts } from "../../data";
import { CardProducts } from "../CardProducts/CardProducts";
import "./Products.css";

export const ProductList = () => {
  return (
    <div className="products-container">
      {arrayProducts.map(({id, photo, shortDescription, nameProduct, linkFicha, ficha, enlaceAmazon }) => {
        return (
          <div key={id}>
            <CardProducts
              photo={photo}
              shortDescription={shortDescription}
              nameProduct={nameProduct}
              linkFicha={linkFicha}
              ficha={ficha}
              enlaceAmazon={enlaceAmazon}
            />
          </div>
        );
      })}
    </div>
  );
};
