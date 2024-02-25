import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      }
    // case "LIKE_PRODUCT":
    //   return {
    //     ...state,
    //     cart: state.cart.map((item) =>
    //       item.id === action.payload.id
    //         ? { ...item, like: action.payload.like }
    //         : item,
    //     ),
    //   };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, { cart: [] });

  const addToCart = (item, quantityDelta = 1) => {
    const existingItem = cart.cart.find(
      (existingItem) => existingItem.id === item.id,
    );
    if (existingItem) {
      const newQuantity = Math.max(existingItem.quantity + quantityDelta, 0);
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: item.id, quantity: newQuantity },
      });
      if (newQuantity === 0) {
        removeFromCart(item);
      }
    } else {
      dispatch({ type: "ADD_TO_CART", payload: { ...item, quantity: 1 } });
    }
  };
  // const likeProduct = (item, isLiked) => {
  //   console.log("like");
  //   dispatch({ type: "LIKE_PRODUCT", payload: { id: item.id, like: isLiked } });
  //   console.log(cart);
  // };
  const removeFromCart = (item) => {
    const removeIndex = cart.cart.findIndex(
      (product) => product.id === item.id,
    );
    if (removeIndex !== -1) {
      cart.cart.splice(removeIndex, 1);
    }
  };

  const clearCart = () => {
    dispatch({type: "CLEAR_CART"})
  }
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
