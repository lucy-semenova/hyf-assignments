import { createContext, useState } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [planetsWishlist, setPlanetsWishlist] = useState([]);

  function addPlanetToWishlist(name, thumbnail) {
    setPlanetsWishlist((prev) => [...prev, { name, thumbnail }]);
  }

  function removePlanetFromWishlist(name) {
    setPlanetsWishlist((prev) => prev.filter((planet) => planet.name !== name));
  }

  function isPlanetInWishlist(name) {
    return planetsWishlist.some((planet) => planet.name === name);
  }

  const wishlistCount = planetsWishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        planetsWishlist,
        addPlanetToWishlist,
        removePlanetFromWishlist,
        isPlanetInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
