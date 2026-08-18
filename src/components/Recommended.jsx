import MovieCard from "./MovieCard";

function Recommended({ movies = [] }) {

  return (
    <section
      id="recommended"
      className="mx-auto max-w-7xl px-5 py-12"
    >

      <p className="text-xs font-bold tracking-[3px] text-[#d1b36b]">
        FOR YOU
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white">
        Recommended For You
      </h2>

      <p className="mt-3 text-gray-400">
        Movies you might enjoy based on your interests.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

        {movies.slice(2, 7).map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}

      </div>

    </section>
  );
}

export default Recommended;