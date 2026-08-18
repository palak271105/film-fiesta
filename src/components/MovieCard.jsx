function MovieCard({ movie }) {

  return (

      <div className="group min-w-0 w-full overflow-hidden rounded-xl bg-[#1f2937] shadow-lg transition duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden">

        <img
          src={movie.image}
          alt={movie.title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute right-3 top-3 rounded-md bg-black/80 px-2 py-1 text-sm text-white">
          ⭐ {movie.rating}
        </div>

        <div className="absolute left-3 top-3 rounded-md bg-[#b89236] px-2 py-1 text-xs font-semibold text-white">
          {movie.genre}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex gap-2 bg-gradient-to-t from-black/90 to-transparent p-3 pt-10 opacity-0 transition duration-300 group-hover:opacity-100">

          <button className="flex-1 rounded-md bg-[#b89236] py-2 text-sm font-semibold text-white hover:bg-[#d1b36b]">
            ▶ Watch
          </button>

          <button className="rounded-md bg-white px-3 py-2 text-black hover:bg-gray-200">
            ♡
          </button>

        </div>

      </div>

      <div className="p-4">

        <h3 className="text-lg font-bold text-white">
          {movie.title}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">

          <span>{movie.year}</span>

          <span>•</span>

          <span>{movie.language}</span>

          <span>•</span>

          <span>{movie.genre}</span>

        </div>

      </div>

    </div>

  );
}

export default MovieCard;