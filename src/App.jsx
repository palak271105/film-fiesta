import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";


import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Upcoming from "./pages/Upcoming";
import TopRatedPage from "./pages/TopRatedPage";



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
        <Route
        path="/top-rated"
        element={<TopRatedPage />}
        />
        <Route
          path="/upcoming"
          element={<Upcoming />}
          />
          
      </Routes>

      

    </div>
  );
}

export default App;