import { Link } from "react-router-dom";

function GenreSection() {

  const genres = [
    {
      name: "Action",
      icon: "💥",
      path: "/genres/action",
    },
    {
      name: "Comedy",
      icon: "😂",
      path: "/genres/comedy",
    },
    {
      name: "Romance",
      icon: "❤️",
      path: "/genres/romance",
    },
    {
      name: "Horror",
      icon: "👻",
      path: "/genres/horror",
    },
  ];

  return (

    <section
      id="genres"
      className="mx-auto max-w-7xl px-5 py-12"
    >

      <p className="text-xs font-bold tracking-[3px] text-[#d1b36b]">
        EXPLORE
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white">
        Browse by Genre
      </h2>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">

        {genres.map((genre) => (

          <Link
            key={genre.name}
            to={genre.path}
            className="rounded-2xl bg-[#1f2937] p-8 text-center transition hover:-translate-y-2 hover:bg-[#263449]"
          >

            <div className="text-4xl">
              {genre.icon}
            </div>

            <h3 className="mt-4 font-bold text-white">
              {genre.name}
            </h3>

          </Link>

        ))}

      </div>

    </section>

  );
}

export default GenreSection;