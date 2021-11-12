import "./App.css";
import { Header } from "./components/Header/Header";
import { ProductList } from "../src/components/Products/Products";

function App() {
  return (
    <div className='app'>
      <Header/>
      <ProductList />
    </div>
  );
}

export default App;
