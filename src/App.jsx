import "./App.css";
import { Header } from "./components/Header/Header";
import { ProductList } from "../src/components/Products/Products";
import { News } from "../src/components/News/News";
import { Welcome } from "./components/Welcome/Welcome";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Welcome />
      <ProductList dark={true} id="productList"/>
      <News dark={true} id="suscription"/>
      <Footer />
    </div>
  );
}

export default App;
