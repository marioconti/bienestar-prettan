import "./App.css";
import { Header } from "./components/Header/Header";
import { ProductList } from "../src/components/Products/Products";

function App() {
  return (
    <>
      <Header />
      <h1>Bienestar Prettan</h1>
      <ProductList />
    </>
  );
}

export default App;
