import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

export function useFavorites() {
  const context = useContext(MovieContext);

  return context;
}