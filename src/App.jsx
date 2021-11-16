import "./App.css";
import { Header } from "./components/Header/Header";
import { ProductList } from "../src/components/Products/Products";
import { News } from "../src/components/News/News";
import { Welcome } from "./components/Welcome/Welcome";
function App() {
  return (
    <div className="app">
      <Header />
      <Welcome />
      <ProductList />
      <News />
    </div>
  );
}

export default App;
