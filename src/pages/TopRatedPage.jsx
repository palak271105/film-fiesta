import MovieCard from "../components/MovieCard";
import { movies } from "../data/movie";

function TopRatedPage() {

  const topRatedMovies = [...movies]
    .filter((movie) => movie.rating >= 8)
    .sort((a, b) => b.rating - a.rating);

  return (
    <main className="min-h-screen bg-[#111827] px-5 py-12">

      <div className="mx-auto max-w-7xl">

        <p className="text-xs font-bold tracking-[3px] text-[#d1b36b]">
          FILMFiesta
        </p>

        <h1 className="mt-2 text-3xl font-bold text-white">
          Top Rated Movies
        </h1>

        <p className="mt-3 text-gray-400">
          Discover the highest-rated movies loved by audiences.
        </p>

        <div className="mt-10 grid w-full grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

          {topRatedMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}

        </div>

      </div>

    </main>
  );
}

export default TopRatedPage;