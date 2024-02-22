// CartContext.js
import { createContext, useContext, useReducer } from "react";

// Tworzymy kontekst
const CartContext = createContext();

// Definiujemy reducer do zarządzania stanem koszyka
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        isButtonDisabled: false,
      };
    case "DISABLE_BUTTON":
      return { ...state, isButtonDisabled: true };
    case "FIND_ID":
      return {}
    default:
      return state;
  }
};

// Tworzymy dostawcę kontekstu
const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, {
    cart: [],
    isButtonDisabled: false,
  });

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };
  const disableButton = () => {
    dispatch({ type: "DISABLE_BUTTON" });
  };

  // Inne funkcje do zarządzania koszykiem

  return (
    <CartContext.Provider value={{ cart, addToCart, disableButton }}>
      {children}
    </CartContext.Provider>
  );
};

// Funkcja pomocnicza do używania kontekstu
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
