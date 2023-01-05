import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouritesContextProvider({ children }) {
  const [favouriteMealids, setFavouiteMealids] = useState([]);

  function addFavourite(id) {
    setFavouiteMealids((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavourite(id) {
    setFavouiteMealids((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }

  const value = {
    ids: favouriteMealids,
    addFavourite,
    removeFavourite
  }

  return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>;
}

export default FavouritesContextProvider;
