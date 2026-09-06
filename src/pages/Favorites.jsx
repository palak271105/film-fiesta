import { useContext, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { MovieContext } from "../context/MovieContext";
import { useMovieSearch } from "../hooks/useMovieSearch";

function Favorites() {
  const { favorites } = useContext(MovieContext);

  // Navbar search will filter favorite movies
  const filteredFavorites = useMovieSearch(favorites);

  useEffect(() => {
    document.title = "My Favorites - FilmFiesta";
  }, []);

  return (
    <main className="min-h-screen bg-[#111827] px-5 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <p className="text-xs font-bold tracking-[3px] text-[#d1b36b]">
          FILMFiesta
        </p>

        <h1 className="mt-2 text-3xl font-bold text-white">
          My Favorites
        </h1>

        <p className="mt-3 text-gray-400">
          Movies you have saved for later.
        </p>

        {/* Favorite Movies */}
        {favorites.length > 0 ? (

          filteredFavorites.length > 0 ? (

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {filteredFavorites.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </div>

          ) : (

            /* No Search Results */
            <div className="mt-12 rounded-2xl bg-[#1f2937] p-10 text-center">

              <p className="text-5xl">
                🔍
              </p>

              <h2 className="mt-4 text-xl font-bold text-white">
                No movies found
              </h2>

              <p className="mt-2 text-gray-400">
                No favorite movie matches your search.
              </p>

            </div>

          )

        ) : (

          /* No Favorites */
          <div className="mt-12 rounded-2xl bg-[#1f2937] p-10 text-center">

            <p className="text-5xl">
              ♡
            </p>

            <h2 className="mt-4 text-xl font-bold text-white">
              No favorite movies yet
            </h2>

            <p className="mt-2 text-gray-400">
              Click the heart on a movie to add it to your favorites.
            </p>

          </div>

        )}

      </div>
    </main>
  );
}

export default Favorites;