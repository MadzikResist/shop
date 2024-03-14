import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Product from "./components/product/Product";
import Account from "./components/account/Account";
import Cart from "./components/cart/Cart";
import { CartProvider } from "./contexts/CartContext";
import { LikesProvider } from "./contexts/LikesContext";

function App() {
  return (
    <CartProvider>
      <LikesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/store" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </BrowserRouter>
      </LikesProvider>
    </CartProvider>
  );
}

export default App;
