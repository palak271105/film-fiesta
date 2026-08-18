import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieContext";

export function useMovieSearch(movies) {
  const { search } = useContext(MovieContext);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    const searchValue = search.trim().toLowerCase();

    if (!searchValue) {
      setFilteredMovies(movies);
      return;
    }

    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue)
    );

    setFilteredMovies(results);
  }, [search, movies]);

  return filteredMovies;
}