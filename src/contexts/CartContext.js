import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const itemWithSize = action.payload;
      const existingItem = state.cart.find(
        (item) => item.id === itemWithSize.id && item.size === itemWithSize.size
      );

      if (existingItem) {
        const updatedCart = state.cart.map((item) =>
          item.id === existingItem.id && item.size === existingItem.size
            ? { ...item, quantity: item.quantity + itemWithSize.quantity }
            : item
        );

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, itemWithSize],
        };
      }

    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => !(item.id === action.payload.id && item.size === action.payload.size)
        ),
      };
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { cart: [] });

  const addToCart = (item, quantityDelta = 1) => {
    const existingItem = cart.cart.find(
      (existingItem) => existingItem.id === item.id && existingItem.size === item.size
    );

    if (existingItem) {
      const newQuantity = Math.max(existingItem.quantity + quantityDelta, 0);

      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: item.id, size: item.size, quantity: newQuantity },
      });

      if (newQuantity === 0) {
        removeFromCart(item);
      }
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...item, quantity: quantityDelta },
      });
    }
  };

  const removeFromCart = (item) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id: item.id, size: item.size },
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
