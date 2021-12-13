//Datos productos
// IMAGES PRODUCTS
import aloeHyaluronic from "../src/assets/images/Aloe-Vera-&-Hyaluronic-Ac.png";
import aloeTea from "../src/assets/images/Aloe-Vera-&-Tea-Tree-Bottle.png";
import lavanda from "../src/assets/images/Lavender-Bottle.png";
import chamomille from "../src/assets/images/Chamomile-&-Arnica-Bottle-OK.png";
import almond from "../src/assets/images/Sweet-Almond-Bottle.png";
// =================================
// LINKS FICHAS
import fichaaloeHyaluronic from "../src/assets/files/FICHA TECNICA ALOE VERA & AC HIALURONICO Spa & Relax.pdf";
import fichAloeTea from "../src/assets/files/FICHA TECNICA ALOE VERA & TEA TREE Spa & Relax.pdf";
import fichaLavanda from "../src/assets/files/FICHA TECNICA LAVENDER Spa & Relax.pdf";
import fichaChamomille from "../src/assets/files/FICHA TECNICA ÁRNICA & CHAMOMILLE Spa & Relax.pdf";
import fichaAlmond from "../src/assets/files/FICHA TECNICA SWEET ALMOND Spa & Relax.pdf";
// =================================
export const arrayProducts = [
  {
    id: 1,
    nameProduct: "Aloe Vera & Hyaluronic Acid Beauty Gel",
    photo: aloeHyaluronic,
    shortDescription:
      "Home care product, recommended for the support of dry skin and aging signs. Added with Hyaluronic Acid for better results!",
    ingredients: [
      { ingredientes: "Aloe Vera Concentrate" },
      { ingredientes: "Hyaluronic Acid of Plant Origin (1.5%)" },
    ],
    othersIngredients: [
      { otherIngredientes: "Water" },
      { otherIngredientes: "Carbopol" },
      { otherIngredientes: "Glycerin" },
      { otherIngredientes: "Phenoxyethanol" },
      { otherIngredientes: "Natural Tea Tree Fragrance" },
    ],
    howToUse:
      "Apply a thin layer of the gel to the skin of your choice, massaging gently. You can also use it after bathing or at night.",
    notes: "Oil Free, Paraben Free, Hexane Free and Cruelty Free (Vegan)",
    linkFicha: fichaaloeHyaluronic,
    ficha: fichaaloeHyaluronic,
    enlaceAmazon: "https://www.amazon.com/dp/B09DGSKJLV",
  },
  {
    id: 2,
    nameProduct: "Aloe Vera & Tea Tree Hydro Skin Gel",
    photo: aloeTea,
    shortDescription:
      "Home care product, recommended for the support of dry skin and aging signs. Added with Tea Tree extract for better results!",
    ingredients: [
      { ingredientes: "Aloe Vera Concentrate" },
      { ingredientes: "Tea Tree (Melaleuca alternifolia)" },
    ],
    othersIngredients: [
      { otherIngredientes: "Water" },
      { otherIngredientes: "Carbopol" },
      { otherIngredientes: "Glycerin" },
      { otherIngredientes: "Phenoxyethanol" },
      { otherIngredientes: "Natural Tea Tree Fragrance" },
    ],
    howToUse:
      "Apply a thin layer of the gel to the skin of your choice, massaging gently. You can also use it after bathing or at night.",
    notes: "Oil Free, Paraben Free, Hexane Free and Cruelty Free (Vegan)",
    linkFicha: fichAloeTea,
    ficha: fichAloeTea,
    enlaceAmazon: "https://www.amazon.com/dp/B09DGSJ7RY",
  },
  {
    id: 3,
    nameProduct: "Lavender Hydro Gel",
    photo: lavanda,
    shortDescription:
      "Home care product, recommended for the support of dry skin and aging signs. With Lavender extract for better results!",
    ingredients: [{ ingredientes: "Lavender concentrated extract" }],
    othersIngredients: [
      { otherIngredientes: "Water" },
      { otherIngredientes: "Carbopol" },
      { otherIngredientes: "Glycerin" },
      { otherIngredientes: "Phenoxyethanol" },
      {
        otherIngredientes:
          "Natural Lavender Fragrance Natural del Árbol del Té",
      },
    ],
    howToUse:
      "Apply a thin layer of the gel to the skin of your choice, massaging gently. You can also use it after bathing or at night.",
    notes: "Oil Free, Paraben Free, Hexane Free and Cruelty Free (Vegan)",
    linkFicha: fichaLavanda,
    ficha: fichaLavanda,
    enlaceAmazon: "https://www.amazon.com/dp/B09DGTC8CS",
  },
  {
    id: 4,
    nameProduct: "Chamomile & Arnica Cosmetic Nutrient Gel",
    photo: chamomille,
    shortDescription:
      "Home care product, recommended for the support of dry skin and aging signs. With Arnica & Chamomile extract for better results!",
    ingredients: [
      { ingredientes: "Arnica concentrated extract" },
      { ingredientes: "Chamomile concentrated extract" },
    ],
    othersIngredients: [
      { otherIngredientes: "Water" },
      { otherIngredientes: "Carbopol" },
      { otherIngredientes: "Glycerin" },
      { otherIngredientes: "Phenoxyethanol" },
      { otherIngredientes: "Chamomile concentrated extract" },
    ],
    howToUse:
      "Apply a thin layer of the gel to the skin of your choice, massaging gently. You can also use it after bathing or at night.",
    notes: "Oil Free, Paraben Free, Hexane Free and Cruelty Free (Vegan)",
    linkFicha: fichaChamomille,
    ficha: fichaChamomille,
    enlaceAmazon: "https://www.amazon.com/dp/B09DGQFTT3",
  },
  {
    id: 5,
    nameProduct: "Sweet Almond Moisturizing Oil",
    photo: almond,
    shortDescription:
      "Home care product, recommended for the support of dry skin and aging signs. With Natural Almond Oil extract for better results!",
    ingredients: [
      { ingredientes: "Mineral oil" },
      { ingredientes: "Peach Oil" },
    ],
    othersIngredients: [
      { otherIngredientes: "Water" },
      { otherIngredientes: "Carbopol" },
      { otherIngredientes: "Glycerin" },
      { otherIngredientes: "Phenoxyethanol" },
      { otherIngredientes: "Natural Almond extract" },
    ],
    howToUse:
      "Apply a thin layer of the gel to the skin of your choice, massaging gently. You can also use it after bathing or at night.",
    notes: "Oil Free, Paraben Free, Hexane Free and Cruelty Free (Vegan)",
    linkFicha: fichaAlmond,
    ficha: fichaAlmond,
    enlaceAmazon: "https://www.amazon.com/dp/B09D8FLZXP",
  },
];
