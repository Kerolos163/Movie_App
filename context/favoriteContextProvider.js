import React, { createContext, useState } from "react";

export const FavoriteContext = createContext();
const FavoriteContextProvider = ({ children }) => {
  const [favoriteItems, setfavoriteItems] = useState([]);
  return (
    <FavoriteContext.Provider value={{ favoriteItems, setfavoriteItems }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
