import mongoose from "mongoose";
import dotenv from "dotenv";
import Movie from "./models/Movie.js";

dotenv.config();

const movies = [
  {
    id: 1,
    title: "Inception",
    image:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    rating: 8.8,
    genre: "Action",
    year: 2010,
    language: "English",
    type: "movie",
  },
  {
    id: 2,
    title: "Interstellar",
    image:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.7,
    genre: "Sci-Fi",
    year: 2014,
    language: "English",
    type: "movie",
  },
  {
    id: 3,
    title: "The Dark Knight",
    image:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9.0,
    genre: "Action",
    year: 2008,
    language: "English",
    type: "movie",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    image:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    rating: 8.4,
    genre: "Action",
    year: 2019,
    language: "English",
    type: "movie",
  },
  {
    id: 5,
    title: "Spider-Man: No Way Home",
    image:
      "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    rating: 8.2,
    genre: "Action",
    year: 2021,
    language: "English",
    type: "movie",
  },
  {
    id: 6,
    title: "Joker",
    image:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    rating: 8.4,
    genre: "Drama",
    year: 2019,
    language: "English",
    type: "movie",
  },
  {
    id: 7,
    title: "The Hangover",
    image:
      "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
    rating: 7.7,
    genre: "Comedy",
    year: 2009,
    language: "English",
    type: "movie",
  },
  {
    id: 8,
    title: "Titanic",
    image:
      "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    rating: 7.9,
    genre: "Romance",
    year: 1997,
    language: "English",
    type: "movie",
  },
  {
    id: 9,
    title: "The Conjuring",
    image:
      "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    rating: 7.5,
    genre: "Horror",
    year: 2013,
    language: "English",
    type: "movie",
  },
  {
    id: 10,
    title: "La La Land",
    image:
      "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    rating: 8.0,
    genre: "Romance",
    year: 2016,
    language: "English",
    type: "movie",
  },

  // // Upcoming Movies
  // {
  //   id: 101,
  //   title: "Avengers: Doomsday",
  //   image:
  //     "https://image.tmdb.org/t/p/w500/6dC5fYlQ6dKq8sYxH9GQ7M9hY5G.jpg",
  //   rating: 0,
  //   genre: "Action",
  //   year: 2026,
  //   language: "English",
  //   type: "upcoming",
  // },
  // {
  //   id: 102,
  //   title: "Spider-Man: Brand New Day",
  //   image:
  //     "https://image.tmdb.org/t/p/w500/2vYv8K7H4JqJ3K9L0Q5R6S7T8U9.jpg",
  //   rating: 0,
  //   genre: "Action",
  //   year: 2026,
  //   language: "English",
  //   type: "upcoming",
  // },
  // {
  //   id: 103,
  //   title: "Toy Story 5",
  //   image:
  //     "https://image.tmdb.org/t/p/w500/4rQ5L0mZ3X2V1N8B7C6D9E0F5G.jpg",
  //   rating: 0,
  //   genre: "Animation",
  //   year: 2026,
  //   language: "English",
  //   type: "upcoming",
  // },
  // {
  //   id: 104,
  //   title: "The Batman Part II",
  //   image:
  //     "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  //   rating: 0,
  //   genre: "Action",
  //   year: 2027,
  //   language: "English",
  //   type: "upcoming",
  // },
  // {
  //   id: 105,
  //   title: "Avatar 4",
  //   image:
  //     "https://image.tmdb.org/t/p/w500/6b8jW7mQ9X5L3K2P1N4R8T0V6Y.jpg",
  //   rating: 0,
  //   genre: "Adventure",
  //   year: 2029,
  //   language: "English",
  //   type: "upcoming",
  // },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Movie.deleteMany();

    await Movie.insertMany(movies);

    console.log("Movies inserted successfully");

    await mongoose.connection.close();

    console.log("Database connection closed");
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

seedDatabase();