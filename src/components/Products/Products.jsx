import React from "react";
import { arrayProducts } from "../../data";
import { CardProducts } from "../CardProducts/cardProducts";
import "./Products.css";

export const ProductList = () => {
  
  return (
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
        }
        ) => {
          console.log(ingredients)
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
              />
            </div>
          );
        }
      )}
    </div>
  );
};