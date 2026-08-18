import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const { search, setSearch } = useContext(MovieContext);
  return (
    <header className="sticky top-0 z-50 bg-[#172033] text-white shadow-lg">

      <nav className="mx-auto max-w-7xl px-5 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2"
            onClick={() => setShowMenu(false)}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d1b36b] font-bold text-[#172033]">
              F
            </div>

            <span className="text-2xl font-bold text-[#d1b36b]">
              FilmFiesta
            </span>
          </NavLink>


          {/* Desktop Navigation */}
          <div className="hidden md:block">

            <ul className="flex items-center gap-8">

              {/* Home */}
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `font-semibold transition ${
                      isActive
                        ? "text-[#d1b36b]"
                        : "text-white hover:text-[#d1b36b]"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>


              {/* Popular */}
              <li>
                <NavLink
                  to="/popular"
                  className={({ isActive }) =>
                    `font-semibold transition ${
                      isActive
                        ? "text-[#d1b36b]"
                        : "text-white hover:text-[#d1b36b]"
                    }`
                  }
                >
                  Popular
                </NavLink>
              </li>


              {/* Top Rated */}
              <li>
                <NavLink
                  to="/top-rated"
                  className={({ isActive }) =>
                    `font-semibold transition ${
                      isActive
                        ? "text-[#d1b36b]"
                        : "text-white hover:text-[#d1b36b]"
                    }`
                  }
                >
                  Top Rated
                </NavLink>
              </li>


              {/* Upcoming */}
              <li>
                <NavLink
                  to="/upcoming"
                  className={({ isActive }) =>
                    `font-semibold transition ${
                      isActive
                        ? "text-[#d1b36b]"
                        : "text-white hover:text-[#d1b36b]"
                    }`
                  }
                >
                  Upcoming
                </NavLink>
              </li>

            </ul>

          </div>


          {/* Desktop Right */}
          <div className="hidden items-center gap-3 md:flex">

            {/* Theme Button */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#b89236] transition hover:bg-[#d1b36b] hover:text-white"
            >
              ☀
            </button>


            {/* Search */}
            <div className="flex h-10 w-56 items-center gap-2 rounded-lg border border-slate-500 bg-slate-600/70 px-3">

              <span>🔍</span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search movies..."
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
              />
            </div>

          </div>


          {/* Mobile Right */}
          <div className="flex items-center gap-2 md:hidden">

            {/* Theme Button */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#b89236]"
            >
              ☀
            </button>


            {/* Menu Button */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-500"
            >
              {showMenu ? "✕" : "☰"}
            </button>

          </div>

        </div>


        {/* Mobile Menu */}
        {showMenu && (

          <div className="mt-5 border-t border-slate-700 pt-5 md:hidden">

            {/* Mobile Search */}
            <div className="mb-5 flex h-11 items-center gap-2 rounded-lg border border-slate-500 bg-slate-600/70 px-3">

              <span>🔍</span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search movies..."
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
              />

            </div>


            {/* Mobile Navigation */}
            <ul className="flex flex-col gap-4 text-center">

              {/* Home */}
              <li>
                <NavLink
                  to="/"
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-[#d1b36b]"
                      : "text-white hover:text-[#d1b36b]"
                  }
                >
                  Home
                </NavLink>
              </li>


              {/* Popular */}
              <li>
                <NavLink
                  to="/popular"
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-[#d1b36b]"
                      : "text-white hover:text-[#d1b36b]"
                  }
                >
                  Popular
                </NavLink>
              </li>


              {/* Top Rated */}
              <li>
                <NavLink
                  to="/top-rated"
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-[#d1b36b]"
                      : "text-white hover:text-[#d1b36b]"
                  }
                >
                  Top Rated
                </NavLink>
              </li>


              {/* Upcoming */}
              <li>
                <NavLink
                  to="/upcoming"
                  onClick={() => setShowMenu(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "font-semibold text-[#d1b36b]"
                      : "text-white hover:text-[#d1b36b]"
                  }
                >
                  Upcoming
                </NavLink>
              </li>

            </ul>

          </div>

        )}

      </nav>

    </header>
  );
}

export default Header;