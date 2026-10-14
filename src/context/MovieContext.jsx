import {
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

export const MovieContext = createContext({
  movies: [],
  favorites: [],
  search: "",
  setSearch: () => {},
  toggleFavorite: () => {},
  isFavorite: () => false,
  darkMode: true,
  toggleDarkMode: () => {},
  loading: true,
  error: "",
});

export function MovieProvider({ children }) {
  // Movies from REST API
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch movies from backend API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const API_URL = import.meta.env.VITE_API_URL;

const response = await fetch(
  `${API_URL}/api/movies`
);

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();

        setMovies(data);
        setError("");
      } catch (error) {
        console.error("Error fetching movies:", error);
        setError("Unable to load movies");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

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
        movies,
        favorites,
        search,
        setSearch,
        toggleFavorite,
        isFavorite,
        darkMode,
        toggleDarkMode,
        loading,
        error,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}