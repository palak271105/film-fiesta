import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import GenreSection from "./components/GenreSection";
import Recommended from "./components/Recommended";
import TopRated from "./components/TopRated";

import { movies } from "./data/movie";

import Popular from "./pages/Popular";

function Home() {

  return (
    <>
      <Hero />

      <MovieRow
        title="Popular Movies"
        movies={movies}
      />

      <main className="mx-auto max-w-7xl px-5 py-12">

        <GenreSection />

        <Recommended movies={movies} />

        <TopRated />

      </main>
    </>
  );
}

function App() {

  return (
    <div className="min-h-screen bg-[#111827]">

      <Header />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/popular"
          element={<Popular />}
        />

      </Routes>

    </div>
  );
}

export default App;