import { createContext, useContext, useReducer } from "react";

const LikesContext = createContext();

const likesReducer = (state, action) => {
  switch (action.type) {
    case "LIKE_ITEM":
      return {
        ...state,
        likes: [...state.likes, action.payload],
      };
    case "UPDATE_LIKE":
      return {
        likes: state.likes.map((item) =>
          item.id === action.payload.id
            ? { ...item, like: action.payload.like }
            : item
        ),
      };
    case "REMOVE_FROM_LIKES":
      console.log(state)
      return {
        likes: state.likes.filter((item) => item.code !== action.payload.id),

      };
    default:
      return state;
  }
};


const LikesProvider = ({ children }) => {
  const [likes, dispatch] = useReducer(likesReducer, { likes: [] });
  const removeFromLikes = (item) => {
    const removeIndex = likes.likes.findIndex(
      (product) => product.code === item.code
    );
    if (removeIndex !== -1) {
      const newLikes = [...likes.likes];
      newLikes.splice(removeIndex, 1);
      dispatch({
        type: "REMOVE_FROM_LIKES",
        payload: { id: item.code, newLikes },
      });
    }
  }

  const likeItem = (item) => {
    const existingItem = likes.likes.find(
      (existingItem) => existingItem.code === item.code,
    );
    if (existingItem) {
      const newLike = !existingItem.like;
      dispatch({
        type: "UPDATE_LIKE",
        payload: { code: item.code, like: newLike },

      });
      if(!newLike){
        removeFromLikes(item)
      }
    } else {
      dispatch({ type: "LIKE_ITEM", payload: { ...item } });
    }
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
