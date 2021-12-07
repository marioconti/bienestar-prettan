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
      { ingredientes: "Concentrado de Aloe Vera" },
      { ingredientes: "Ácido Hialuronico de Origen Vegetal (1.5%)" },
    ],
    othersIngredients: [
      { otherIngredientes: "Agua" },
      { otherIngredientes: "Carbopol" },
      { otherIngredientes: "Glicerina" },
      { otherIngredientes: "Fenoxietanol" },
      { otherIngredientes: "Fragancia Natural del Árbol del Té" },
    ],
    howToUse:
      "Aplique una capa delgada del gel sore la piel que escoja, dando un suave masaje. También puede usarlo después del baño o por la noche.",
    notes:
      "Libre de aceite, libre de Parabenos, sin Hexano y libre de crueldad animal (Vegano)",
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
      { ingredientes: "Concentrado de Aloe Vera" },
      { ingredientes: "Árbol del Té (Melaleuca alternifolia" },
    ],
    othersIngredients: [
      { otherIngredientes: "Agua" },
      { otherIngredientes: "Carbopol" },
      { otherIngredientes: "Glicerina" },
      { otherIngredientes: "Fenoxietanol" },
      { otherIngredientes: "Fragancia Natural del Árbol del Té" },
    ],
    howToUse:
      "Aplique una capa delgada del gel sore la piel que escoja, dando un suave masaje. También puede usarlo después del baño o por la noche.",
    notes:
      "Libre de aceite, libre de Parabenos y libre de crueldad animal (Vegano)",
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
    ingredients: [{ ingredientes: "Extracto concentrado de Lavanda" }],
    othersIngredients: [
      { otherIngredientes: "Agua" },
      { otherIngredientes: "Carbopol" },
      { otherIngredientes: "Glicerina" },
      { otherIngredientes: "Fenoxietanol" },
      { otherIngredientes: "Fragancia Natural del Árbol del Té" },
    ],
    howToUse:
      "Aplique una capa delgada del gel sore la piel que escoja, dando un suave masaje. También puede usarlo después del baño o por la noche.",
    notes:
      "Libre de aceite, libre de Parabenos y libre de crueldad animal (Vegano)",
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
      { ingredientes: "Extracto concentrado de Árnica" },
      { ingredientes: "Extracto concentrado de Manzanilla" },
    ],
    othersIngredients: [
      { otherIngredientes: "Agua" },
      { otherIngredientes: "Carbopol" },
      { otherIngredientes: "Glicerina" },
      { otherIngredientes: "Fenoxietanol" },
      { otherIngredientes: "Fragancia Natural del Árbol del Té" },
    ],
    howToUse:
      "Aplique una capa delgada del gel sore la piel que escoja, dando un suave masaje. También puede usarlo después del baño o por la noche.",
    notes:
      "Libre de aceite, libre de Parabenos y libre de crueldad animal (Vegano)",
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
      { ingredientes: "Aceite mineral" },
      { ingredientes: "Aceite de Durazno" },
      { ingredientes: "Fragancia natural de almendra" },
    ],
    othersIngredients: [
      { otherIngredientes: "Agua" },
      { otherIngredientes: "Carbopol" },
      { otherIngredientes: "Glicerina" },
      { otherIngredientes: "Fenoxietanol" },
      { otherIngredientes: "Fragancia Natural del Árbol del Té" },
    ],
    howToUse:
      "Aplique una capa delgada de aceite sore la piel que escoja, dando un suave masaje. También puede usarlo después del baño o por la noche.",
    notes: "Sin Hexano , sin Parabenos y libre de crueldad animal (Vegano)",
    linkFicha: fichaAlmond,
    ficha: fichaAlmond,
    enlaceAmazon: "https://www.amazon.com/dp/B09D8FLZXP",
  },
];
