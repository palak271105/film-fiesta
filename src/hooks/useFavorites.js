import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

export function useFavorites() {
  const {
    favorites,
    toggleFavorite,
    isFavorite,
  } = useContext(MovieContext);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}