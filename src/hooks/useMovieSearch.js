import { useContext, useMemo } from "react";
import { MovieContext } from "../context/MovieContext";

export function useMovieSearch(movies) {
  const { search } = useContext(MovieContext);

  const filteredMovies = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    if (!searchValue) {
      return movies;
    }

    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue)
    );
  }, [movies, search]);

  return filteredMovies;
}