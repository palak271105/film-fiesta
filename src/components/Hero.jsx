function Hero() {

  return (

    <section
      id="home"
      className="relative flex min-h-[70vh] items-center overflow-hidden"
    >

      <div className="absolute inset-0">

        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80"
          alt="Cinema"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#111827]/80" />

      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20">

        <p className="text-sm font-bold tracking-[4px] text-[#d1b36b]">
          WELCOME TO FILMFiesta
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-6xl">

          Discover Your
          <span className="text-[#d1b36b]">
            {" "}Next Favourite Movie
          </span>

        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">

          Explore movies, discover hidden gems and get
          personalized recommendations for your next movie night.

        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

          <button className="rounded-lg bg-[#b89236] px-6 py-3 font-semibold text-white transition hover:bg-[#d1b36b]">

            Explore Movies

          </button>

          <button className="rounded-lg border border-gray-500 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#111827]">

            Get Recommendations

          </button>

        </div>

      </div>

    </section>

  );
}

export default Hero;