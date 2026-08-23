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
  darkMode: true,
  toggleDarkMode: () => {},
});

export function MovieProvider({ children }) {
  // Favorites
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem(
      "filmfiesta-favorites"
    );

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : [];
  });

  // Search
  const [search, setSearch] = useState("");

  // Dark / Light Mode
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("filmfiesta-theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return true;
  });

  // Save favorites
  useEffect(() => {
    localStorage.setItem(
      "filmfiesta-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  // Apply and save theme
  useEffect(() => {
    localStorage.setItem(
      "filmfiesta-theme",
      darkMode ? "dark" : "light"
    );

    document.body.classList.toggle(
      "light-mode",
      !darkMode
    );
  }, [darkMode]);

  // Toggle theme
  const toggleDarkMode = useCallback(() => {
    setDarkMode((currentMode) => !currentMode);
  }, []);

  // Toggle favorite
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

  // Check favorite
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
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}