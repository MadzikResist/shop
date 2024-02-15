import Dashboard from "./components/dashboard/Dashboard";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from "./components/shop/Shop";
import Product from "./components/product/Product";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/product/:id" element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
