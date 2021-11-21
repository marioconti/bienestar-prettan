import React from "react";
import { arrayProducts } from "../../data";
import { CardProducts } from "../CardProducts/CardProducts";
import "./Products.css";

export const ProductList = () => {
  return (
    <>
      <h1 id='productList' className="title-products">PRODUCTS⠀PRETTÁN</h1>
      <div className="products-container">
        {arrayProducts.map(
          ({
            id,
            photo,
            shortDescription,
            nameProduct,
            howToUse,
            notes,
            linkFicha,
            ficha,
            enlaceAmazon,
            ingredients,
            othersIngredients,
          }) => {
            return (
              <div key={id}>
                <CardProducts
                  photo={photo}
                  shortDescription={shortDescription}
                  nameProduct={nameProduct}
                  linkFicha={linkFicha}
                  ficha={ficha}
                  enlaceAmazon={enlaceAmazon}
                  howToUse={howToUse}
                  notes={notes}
                  ingredients={ingredients}
                  othersIngredients={othersIngredients}
                />
              </div>
            );
          }
        )}
      </div>
    </>
  );
};
