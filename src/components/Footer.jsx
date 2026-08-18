function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-[#172033] text-white">

      <div className="mx-auto max-w-7xl px-5 py-12">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">

            <div className="flex items-center gap-2">

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d1b36b] font-bold text-[#172033]">
                F
              </div>

              <span className="text-2xl font-bold text-[#d1b36b]">
                FilmFiesta
              </span>

            </div>

            <p className="mt-4 max-w-md leading-7 text-gray-400">
              Discover movies, explore new genres and find your
              next favourite movie with FilmFiesta.
            </p>

            <div className="mt-5 flex gap-3">

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1f2937] transition hover:bg-[#d1b36b] hover:text-[#172033]"
              >
                f
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1f2937] transition hover:bg-[#d1b36b] hover:text-[#172033]"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1f2937] transition hover:bg-[#d1b36b] hover:text-[#172033]"
              >
                ◎
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1f2937] transition hover:bg-[#d1b36b] hover:text-[#172033]"
              >
                ▶
              </a>

            </div>

          </div>


          {/* Explore */}
          <div>

            <h3 className="font-bold text-white">
              Explore
            </h3>

            <ul className="mt-4 space-y-3 text-gray-400">

              <li>
                <a
                  href="/"
                  className="transition hover:text-[#d1b36b]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/popular"
                  className="transition hover:text-[#d1b36b]"
                >
                  Popular Movies
                </a>
              </li>

              <li>
                <a
                  href="/top-rated"
                  className="transition hover:text-[#d1b36b]"
                >
                  Top Rated
                </a>
              </li>

              <li>
                <a
                  href="/upcoming"
                  className="transition hover:text-[#d1b36b]"
                >
                  Upcoming
                </a>
              </li>

            </ul>

          </div>


          {/* Genres */}
          <div>

            <h3 className="font-bold text-white">
              Genres
            </h3>

            <ul className="mt-4 space-y-3 text-gray-400">

              <li>
                <a
                  href="/genres/action"
                  className="transition hover:text-[#d1b36b]"
                >
                  Action
                </a>
              </li>

              <li>
                <a
                  href="/genres/comedy"
                  className="transition hover:text-[#d1b36b]"
                >
                  Comedy
                </a>
              </li>

              <li>
                <a
                  href="/genres/romance"
                  className="transition hover:text-[#d1b36b]"
                >
                  Romance
                </a>
              </li>

              <li>
                <a
                  href="/genres/horror"
                  className="transition hover:text-[#d1b36b]"
                >
                  Horror
                </a>
              </li>

            </ul>

          </div>

        </div>


        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-700 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 FilmFiesta. All rights reserved.
          </p>

          <div className="flex gap-5">

            <a
              href="#"
              className="transition hover:text-[#d1b36b]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-[#d1b36b]"
            >
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;