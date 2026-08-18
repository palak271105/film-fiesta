import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import GenreSection from "../components/GenreSection";
import Recommended from "../components/Recommended";
import TopRated from "../components/TopRated";
import Footer from "../components/Footer";

import { movies } from "../data/movie";

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

        <Recommended
          movies={movies}
        />

        <TopRated />

      </main>

      <Footer />
    </>
  );
}

export default Home;