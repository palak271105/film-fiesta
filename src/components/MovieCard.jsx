import { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

function MovieCard({ movie }) {
  const { toggleFavorite, isFavorite } = useContext(MovieContext);

  const liked = isFavorite(movie.id);

  return (
    <div className="group w-full overflow-hidden rounded-xl bg-[#1f2937] shadow-lg transition duration-300 hover:-translate-y-2">

      {/* Movie Poster */}
      <Link to={`/movie/${movie.id}`} className="block">
        <div className="relative overflow-hidden">

          <img
            src={movie.image}
            alt={movie.title}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Rating */}
          <div className="absolute right-3 top-3 rounded-md bg-black/70 px-2 py-1 text-sm text-white">
            ⭐ {movie.rating}
          </div>

          {/* Genre */}
          <div className="absolute left-3 top-3 rounded-md bg-[#b89236] px-2 py-1 text-xs font-semibold text-white">
            {movie.genre}
          </div>

        </div>
      </Link>

      {/* Movie Information */}
      <div className="p-4">

        {/* Movie Title */}
        <Link to={`/movie/${movie.id}`}>
          <h3 className="text-lg font-bold text-white hover:text-[#d1b36b]">
            {movie.title}
          </h3>
        </Link>

        <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
          <span>{movie.year}</span>
          <span>•</span>
          <span>{movie.language}</span>
          <span>•</span>
          <span>{movie.genre}</span>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-2">

          {/* Details */}
          <Link
            to={`/movie/${movie.id}`}
            className="flex-1 rounded-md bg-[#b89236] py-2 text-center text-sm font-semibold text-white hover:bg-[#d1b36b]"
          >
            View Details
          </Link>

          {/* Favorite */}
          <button
            onClick={() => toggleFavorite(movie)}
            className={`rounded-md bg-white px-3 py-2 transition hover:bg-gray-200 ${
              liked ? "text-red-500" : "text-black"
            }`}
          >
            {liked ? "♥" : "♡"}
          </button>

        </div>

      </div>
    </div>
  );
}

export default MovieCard;