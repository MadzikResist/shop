import { createContext, useContext, useReducer } from "react";

const LikesContext = createContext();

const likesReducer = (state, action) => {
  console.log(state)
  switch (action.type) {
    case "LIKE_ITEM":
      return {
        ...state,
        user: [...state, action.payload],
      };
    default:
      return state;
  }
};

const LikesProvider = ({ children }) => {
  const [likes, dispatch] = useReducer(likesReducer, { likes: [] });

  const likeItem = (item, like) => {
    console.log(like);
    dispatch({ type: "LIKE_ITEM", payload: like });
  };

  return (
    <LikesContext.Provider value={{ likes, likeItem }}>
      {children}
    </LikesContext.Provider>
  );
};

const useLikes = () => {
  const context = useContext(LikesContext);
  if (!context) {
    throw new Error("useUser must be used within a CartProvider");
  }
  return context;
};

export { LikesProvider, useLikes };
