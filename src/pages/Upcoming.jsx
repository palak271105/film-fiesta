import { useContext, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useMovieSearch } from "../hooks/useMovieSearch";
import { MovieContext } from "../context/MovieContext";
function Upcoming() {
const { movies } = useContext(MovieContext);

  const upcomingMovies = movies.filter(
    (movie) => movie.type === "upcoming"
  );

  const filteredMovies = useMovieSearch(upcomingMovies);

  useEffect(() => {
    document.title = "Upcoming Movies - FilmFiesta";
  }, []);

  return (
    <main className="min-h-screen bg-[#111827] px-5 py-12">

      <div className="mx-auto max-w-7xl">

        <p className="text-xs font-bold tracking-[3px] text-[#d1b36b]">
          FILMFiesta
        </p>

        <h1 className="mt-2 text-3xl font-bold text-white">
          Upcoming Movies
        </h1>

        <p className="mt-3 text-gray-400">
          Movies coming soon.
        </p>

        {filteredMovies.length > 0 ? (

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}

          </div>

        ) : (

          <div className="mt-10 rounded-2xl bg-[#1f2937] p-10 text-center">

            <p className="text-4xl">
              🎬
            </p>

            <h2 className="mt-4 text-xl font-bold text-white">
              No movies found
            </h2>

            <p className="mt-2 text-gray-400">
              Try searching for another movie.
            </p>

          </div>

        )}

      </div>

    </main>
  );
}

export default Upcoming;