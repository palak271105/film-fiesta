import {
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
export const MovieContext = createContext({
  favorites: [],
  search: "",
  setSearch: () => {},
  toggleFavorite: () => {},
  isFavorite: () => false,
});

export function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem(
      "filmfiesta-favorites"
    );

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : [];
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "filmfiesta-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

const toggleFavorite = useCallback((movie) => {
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
}, []);

  const isFavorite = useCallback(
  (movieId) => {
    return favorites.some(
      (movie) => movie.id === movieId
    );
  },
  [favorites]
);

  return (
    <MovieContext.Provider
      value={{
        favorites,
        search,
        setSearch,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}