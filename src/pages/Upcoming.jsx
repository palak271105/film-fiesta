import MovieCard from "../components/MovieCard";
import { upcomingMovies } from "../data/movie";

function Upcoming() {
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

        <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

          {upcomingMovies.map((movie) => (
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

export default Upcoming;