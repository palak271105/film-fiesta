import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#172033] text-white shadow-lg">

      <nav className="mx-auto max-w-7xl px-5 py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2"
          >

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d1b36b] font-bold text-[#172033]">
              F
            </div>

            <span className="text-2xl font-bold text-[#d1b36b]">
              FilmFiesta
            </span>

          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">

            <ul className="flex items-center gap-8">

              <li>
                <a
                  href="#home"
                  className="font-semibold text-[#d1b36b] transition hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#popular"
                  className="font-semibold transition hover:text-[#d1b36b]"
                >
                  Popular
                </a>
              </li>

              <li>
                <a
                  href="#top-rated"
                  className="font-semibold transition hover:text-[#d1b36b]"
                >
                  Top Rated
                </a>
              </li>

              <li>
                <a
                  href="#upcoming"
                  className="font-semibold transition hover:text-[#d1b36b]"
                >
                  Upcoming
                </a>
              </li>

            </ul>

          </div>

          {/* Desktop Right */}
          <div className="hidden items-center gap-3 md:flex">

            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#b89236] transition hover:bg-[#d1b36b] hover:text-white"
            >
              ☀
            </button>

            <div className="flex h-10 w-56 items-center gap-2 rounded-lg border border-slate-500 bg-slate-600/70 px-3">

              <span>🔍</span>

              <input
                type="text"
                placeholder="Search movies..."
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
              />

            </div>

          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">

            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#b89236]"
            >
              ☀
            </button>

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

            <div className="mb-5 flex h-11 items-center gap-2 rounded-lg border border-slate-500 bg-slate-600/70 px-3">

              <span>🔍</span>

              <input
                type="text"
                placeholder="Search movies..."
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
              />

            </div>

            <ul className="flex flex-col gap-4 text-center">

              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#popular">Popular</a>
              </li>

              <li>
                <a href="#top-rated">Top Rated</a>
              </li>

              <li>
                <a href="#upcoming">Upcoming</a>
              </li>

            </ul>

          </div>
        )}

      </nav>

    </header>
  );
}

export default Header;