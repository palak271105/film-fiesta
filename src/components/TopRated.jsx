import { useMemo } from "react";
import MovieCard from "./MovieCard";
import { movies } from "../data/movie";
import { useMovieSearch } from "../hooks/useMovieSearch";

function TopRated() {
  const filteredMovies = useMovieSearch(movies);

  const topRatedMovies = useMemo(() => {
  return [...filteredMovies]
    .filter((movie) => movie.rating >= 8)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
}, [filteredMovies]);

  return (
    <section
      id="top-rated"
      className="w-full bg-[#111827] px-5 py-12"
    >
      <div className="mx-auto w-full max-w-7xl">

        <div className="mb-8 flex items-end justify-between">

          <div>
            <p className="text-xs font-bold tracking-[3px] text-[#d1b36b]">
              FILMFiesta
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              Top Rated Movies
            </h2>
          </div>

          <button className="font-semibold text-[#d1b36b] hover:text-white">
            View All →
          </button>

        </div>

        {topRatedMovies.length > 0 ? (

          <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

            {topRatedMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}

          </div>

        ) : (

          <div className="rounded-2xl bg-[#1f2937] p-10 text-center">

            <p className="text-4xl">
              🎬
            </p>

            <h2 className="mt-4 text-xl font-bold text-white">
              No movies found
            </h2>

            <p className="mt-2 text-gray-400">
              We couldn't find any movie matching your search.
            </p>

          </div>

        )}

      </div>
    </section>
  );
}

export default TopRated;