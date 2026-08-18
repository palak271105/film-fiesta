import MovieCard from "./MovieCard";

function MovieRow({ title, movies }) {
  return (
    <section
      id={title.toLowerCase().replaceAll(" ", "-")}
      className="w-full bg-[#111827] px-5 py-12"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="mb-8 flex items-end justify-between">

          <div>
            <p className="text-xs font-bold tracking-[3px] text-[#d1b36b]">
              FILMFiesta
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              {title}
            </h2>
          </div>

          <button className="font-semibold text-[#d1b36b] hover:text-white">
            View All →
          </button>

        </div>

        {/* Movies */}
        <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

          {movies.slice(0, 5).map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default MovieRow;