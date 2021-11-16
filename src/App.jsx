import "./App.css";
import { Header } from "./components/Header/Header";
import { ProductList } from "../src/components/Products/Products";
import { News } from "../src/components/News/News";
function App() {
  return (
    <div className="app">
      <Header />
      <ProductList />
      <News />
    </div>
  );
}

export default App;
