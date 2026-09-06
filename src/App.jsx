import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Upcoming from "./pages/Upcoming";
import TopRatedPage from "./pages/TopRatedPage";
import GenrePage from "./pages/GenrePage";
import Favorites from "./pages/Favorites";
import MovieDetails from "./pages/MovieDetails";

import { MovieContext } from "./context/MovieContext";

function App() {
  const { darkMode } = useContext(MovieContext);

  return (
    <div
      className={`flex min-h-screen flex-col ${
        darkMode
          ? "bg-[#111827] text-white"
          : "bg-white text-[#172033]"
      }`}
    >

      <Header />

      <main className="flex-1">

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/popular"
            element={<Popular />}
          />

          <Route
            path="/top-rated"
            element={<TopRatedPage />}
          />

          <Route
            path="/upcoming"
            element={<Upcoming />}
          />

          <Route
            path="/genres/:genre"
            element={<GenrePage />}
          />

          <Route
            path="/favorites"
            element={<Favorites />}
          />

          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>

      </main>


    </div>
  );
}

export default App;