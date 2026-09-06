import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import Footer from "../components/Footer";

function MovieDetails() {
  const { id } = useParams();

  const {
    movies,
    toggleFavorite,
    isFavorite,
  } = useContext(MovieContext);

  // Find selected movie
  const movie = movies.find(
    (item) => String(item.id) === String(id)
  );

  // Change browser title
  useEffect(() => {
    document.title = movie
      ? `${movie.title} - FilmFiesta`
      : "Movie Details - FilmFiesta";
  }, [movie]);

  // Movie not found
  if (!movie) {
    return (
      <>
        <main className="min-h-screen bg-[#111827] px-5 py-20">
          <div className="mx-auto max-w-4xl text-center">

            <p className="text-6xl">🎬</p>

            <h1 className="mt-6 text-3xl font-bold text-white">
              Movie Not Found
            </h1>

            <p className="mt-3 text-gray-400">
              Sorry, we couldn't find this movie.
            </p>

            <Link
              to="/"
              className="mt-8 inline-block rounded-lg bg-[#b89236] px-6 py-3 font-semibold text-white transition hover:bg-[#d1b36b]"
            >
              ← Back to Home
            </Link>

          </div>
        </main>

        <Footer />
      </>
    );
  }

  const liked = isFavorite(movie.id);

  // Same genre movies
  const sameGenreMovies = movies.filter(
    (item) =>
      item.genre === movie.genre &&
      String(item.id) !== String(movie.id)
  );

  // Other movies as fallback
  const otherMovies = movies.filter(
    (item) =>
      item.genre !== movie.genre &&
      String(item.id) !== String(movie.id)
  );

  // First show same genre movies,
  // then fill remaining spaces with other movies
  const relatedMovies = [
    ...sameGenreMovies,
    ...otherMovies,
  ].slice(0, 4);

  return (
    <>
      {/* ================= MOVIE DETAILS ================= */}

      <main className="min-h-screen bg-[#111827]">

        {/* ================= HERO SECTION ================= */}

        <section className="relative overflow-hidden">

          {/* Background */}
          <div className="absolute inset-0">

            <img
              src={movie.image}
              alt=""
              className="h-full w-full object-cover opacity-20 blur-sm"
            />

            <div className="absolute inset-0 bg-[#111827]/90" />

          </div>

          {/* Main Content */}
          <div className="relative mx-auto max-w-7xl px-5 py-12 md:py-16">

            {/* Back Button */}
            <Link
              to="/"
              className="mb-10 inline-flex items-center rounded-lg border border-gray-600 px-4 py-2 text-sm font-semibold text-gray-300 transition hover:border-[#d1b36b] hover:text-[#d1b36b]"
            >
              ← Back
            </Link>

            <div className="grid gap-10 md:grid-cols-[300px_1fr] md:items-center">

              {/* ================= POSTER ================= */}

              <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl shadow-2xl">

                <img
                  src={movie.image}
                  alt={movie.title}
                  className="h-[430px] w-full object-cover"
                />

              </div>

              {/* ================= MOVIE INFORMATION ================= */}

              <div>

                {/* Brand */}
                <p className="text-sm font-bold tracking-[3px] text-[#d1b36b]">
                  FILMFiesta
                </p>

                {/* Title */}
                <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                  {movie.title}
                </h1>

                {/* Rating / Year / Language */}
                <div className="mt-6 flex flex-wrap items-center gap-4">

                  {/* Rating */}
                  <span className="rounded-lg bg-black/70 px-4 py-2 text-lg font-semibold text-white">
                    ⭐ {movie.rating}
                  </span>

                  {/* Year */}
                  <span className="text-gray-300">
                    {movie.year}
                  </span>

                  <span className="text-gray-500">
                    •
                  </span>

                  {/* Language */}
                  <span className="text-gray-300">
                    {movie.language}
                  </span>

                </div>

                {/* Genre */}
                <div className="mt-6">

                  <span className="rounded-md bg-[#b89236] px-4 py-2 text-sm font-semibold text-white">
                    {movie.genre}
                  </span>

                </div>

                {/* Description */}
                <p className="mt-8 max-w-2xl text-base leading-8 text-gray-300">
                  Explore and enjoy{" "}
                  <span className="font-semibold text-white">
                    {movie.title}
                  </span>
                  , a{" "}
                  {movie.genre.toLowerCase()} movie released in{" "}
                  {movie.year}. Discover more details and save it
                  to your favorites for later.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(movie)}
                    className={`rounded-lg px-6 py-3 font-semibold transition ${
                      liked
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-[#b89236] text-white hover:bg-[#d1b36b]"
                    }`}
                  >
                    {liked
                      ? "♥ Remove from Favorites"
                      : "♡ Add to Favorites"}
                  </button>

                  {/* Watch Button */}
                  <button
                    className="rounded-lg border border-gray-500 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#111827]"
                  >
                    ▶ Watch
                  </button>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= YOU MAY ALSO LIKE ================= */}

        <section className="mx-auto max-w-7xl px-5 py-14">

          {/* Heading */}
          <div className="mb-8">

            <p className="text-xs font-bold tracking-[3px] text-[#d1b36b]">
              RECOMMENDED FOR YOU
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white">
              You May Also Like
            </h2>

            <p className="mt-2 text-gray-400">
              More movies you might enjoy.
            </p>

          </div>


          {/* Related Movies */}
          {relatedMovies.length > 0 ? (

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">

              {relatedMovies.map((relatedMovie) => (

                <Link
                  key={relatedMovie.id}
                  to={`/movie/${relatedMovie.id}`}
                  className="group overflow-hidden rounded-xl bg-[#1f2937] shadow-lg transition duration-300 hover:-translate-y-2"
                >

                  {/* Poster */}
                  <div className="relative overflow-hidden">

                    <img
                      src={relatedMovie.image}
                      alt={relatedMovie.title}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Rating */}
                    <div className="absolute right-3 top-3 rounded-md bg-black/70 px-2 py-1 text-sm text-white">
                      ⭐ {relatedMovie.rating}
                    </div>

                    {/* Genre */}
                    <div className="absolute left-3 top-3 rounded-md bg-[#b89236] px-2 py-1 text-xs font-semibold text-white">
                      {relatedMovie.genre}
                    </div>

                  </div>


                  {/* Movie Information */}
                  <div className="p-4">

                    <h3 className="text-base font-bold text-white transition group-hover:text-[#d1b36b]">
                      {relatedMovie.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">

                      <span>
                        {relatedMovie.year}
                      </span>

                      <span>
                        •
                      </span>

                      <span>
                        {relatedMovie.language}
                      </span>

                    </div>

                  </div>

                </Link>

              ))}

            </div>

          ) : (

            <div className="rounded-xl bg-[#1f2937] p-8 text-center">

              <p className="text-gray-400">
                More movies coming soon...
              </p>

            </div>

          )}

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <Footer />
    </>
  );
}

export default MovieDetails;