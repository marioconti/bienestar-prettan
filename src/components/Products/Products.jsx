import React from "react";
import { arrayProducts } from "../../data";
import { CardProducts } from "../CardProducts/CardProducts";
import "./Products.css";

export const ProductList = () => {
  return (
    <div className="products-container">
      {arrayProducts.map((product) => {
        return (
          <div key={product.id}>
            <CardProducts
              photo={product.photo}
              shortDescription={product.shortDescription}
              nameProduct={product.nameProduct}
              linkFicha={product.linkFicha}
              ficha={product.ficha}
            />
          </div>
        );
      })}
    </div>
  );
};
