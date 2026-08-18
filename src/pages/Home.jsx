import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import GenreSection from "../components/GenreSection";
import Recommended from "../components/Recommended";
import TopRated from "../components/TopRated";
import { movies } from "../data/movie";

function Home() {

  return (
    <main>

      {/* Hero */}
      <Hero />


      {/* Popular Movies */}
      <MovieRow
        title="Popular Movies"
        movies={movies}
      />


      {/* Genres */}
      <GenreSection />


      {/* Recommended */}
      <Recommended
        movies={movies}
      />


      {/* Top Rated */}
      <TopRated />

    </main>
  );
}

export default Home;