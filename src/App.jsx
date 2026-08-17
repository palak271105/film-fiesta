import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import { movies } from "./data/movie";

function App() {
  return (
    <div className="min-h-screen bg-[#111827]">

      <Header />

       <main className="mx-auto max-w-7xl px-5 py-12">

        <h1 className="mb-8 text-3xl font-bold text-white">
          Movies
        </h1>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}

        </div>

      </main>
    </div>
  );
}

export default App;