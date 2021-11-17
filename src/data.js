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
    nameProduct: "Beuty Gel de Alore Vera & Ácido Hialuronico",
    photo: aloeHyaluronic,
    shortDescription:
      "Producto de cuidado en casa, recomendado para el apoyo de pieles secas y con signos de causados por la edad",
    ingredients: [
      { ingredientes: "Concentrado de Aloe Vera" },
      { ingredientes: "Ácido Hialuronico de Origen Vegetal (1.5%)" },
    ],
    othersIngredients: [
      "Agua",
      "Carbopol",
      "Glicerina",
      "Fenoxietanol",
      "Fragancia Natural del Árbol del Té",
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
    nameProduct: "Aloe Vera & Árbol del Té gel marca Prettan",
    photo: aloeTea,
    shortDescription:
      "Producto de cuidado en casa, recomendado para el apoyo de pieles secas y con signos de causados por la edad",
    ingredients: [
      { ingredientes: "Concentrado de Aloe Vera" },
      { ingredientes: "Árbol del Té (Melaleuca alternifolia" },
    ],
    othersIngredients: [
      "Agua",
      "Carbopol",
      "Glicerina",
      "Fenoxietanol",
      "Fragancia Natural del Árbol del Té",
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
    nameProduct: "Hydro Gel de Lavanda",
    photo: lavanda,
    shortDescription:
      "Producto de cuidado en casa, recomendado para el apoyo de pieles secas y con signos de causados por la edad",
    ingredients: [{ ingredientes: "Extracto concentrado de Lavanda" }],
    othersIngredients: [
      "Agua",
      "Carbopol",
      "Glicerina",
      "Fenoxietanol",
      "Fragancia Natural",
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
    nameProduct: "Gel de Árnica con Manzanilla",
    photo: chamomille,
    shortDescription:
      "Producto de cuidado en casa, recomendado para el apoyo de pieles secas y con signos de causados por la edad",
    ingredients: [
      { ingredientes: "Extracto concentrado de Árnica" },
      { ingredientes: "Extracto concentrado de Manzanilla" },
    ],
    othersIngredients: [
      "Agua",
      "Carbopol",
      "Glicerina",
      "Fenoxietanol",
      "Fragancia Natural",
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
    nameProduct: "Gel Hidratante de Almendra Dulce",
    photo: almond,
    shortDescription:
      "Producto de cuidado en casa, recomendado para el apoyo de pieles secas y con signos de causados por la edad",
    ingredients: [
      { ingredientes: "Aceite mineral" },
      { ingredientes: "Aceite de Durazno" },
      { ingredientes: "Fragancia natural de almendra" },
    ],
    othersIngredients: "",
    howToUse:
      "Aplique una capa delgada de aceite sore la piel que escoja, dando un suave masaje. También puede usarlo después del baño o por la noche.",
    notes: "Sin Hexano , sin Parabenos y libre de crueldad animal (Vegano)",
    linkFicha: fichaAlmond,
    ficha: fichaAlmond,
    enlaceAmazon: "https://www.amazon.com/dp/B09D8FLZXP",
  },
];
