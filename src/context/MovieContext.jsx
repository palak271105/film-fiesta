import { createContext, useState } from "react";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (movie) => {
    setFavorites((currentFavorites) => {
      const alreadyFavorite = currentFavorites.some(
        (item) => item.id === movie.id
      );

      if (alreadyFavorite) {
        return currentFavorites.filter(
          (item) => item.id !== movie.id
        );
      }

      return [...currentFavorites, movie];
    });
  };

  const isFavorite = (movieId) => {
    return favorites.some(
      (movie) => movie.id === movieId
    );
  };

  return (
    <MovieContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}