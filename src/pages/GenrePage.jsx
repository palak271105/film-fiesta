import { useContext,useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { MovieContext } from "../context/MovieContext";import { useMovieSearch } from "../hooks/useMovieSearch";
import { useParams } from "react-router-dom";

function GenrePage() {

  const { genre } = useParams();

  const { movies } = useContext(MovieContext);

  const searchMovies = useMovieSearch(movies);

  const genreMovies = searchMovies.filter(
    (movie) =>
      movie.genre.toLowerCase() === genre.toLowerCase()
  );

  const genreName =
    genre.charAt(0).toUpperCase() + genre.slice(1);

  useEffect(() => {
    document.title = `${genreName} Movies - FilmFiesta`;
  }, [genreName]);

  return (
    <main className="min-h-screen bg-[#111827] px-5 py-12">

      <div className="mx-auto max-w-7xl">

        <p className="text-xs font-bold tracking-[3px] text-[#d1b36b]">
          FILMFiesta
        </p>

        <h1 className="mt-2 text-3xl font-bold text-white">
          {genreName} Movies
        </h1>

        <p className="mt-3 text-gray-400">
          Explore the best {genreName.toLowerCase()} movies.
        </p>

        {genreMovies.length > 0 ? (

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

            {genreMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}

          </div>

        ) : (

          <div className="mt-12 rounded-2xl bg-[#1f2937] p-10 text-center">

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

    </main>
  );
}

export default GenrePage;