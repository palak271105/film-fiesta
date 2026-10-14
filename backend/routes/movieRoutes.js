
import express from "express";
import Movie from "../models/Movie.js";
import {
  protect,
  authorize,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all movies - Public access
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch movies",
      error: error.message,
    });
  }
});

// GET movie by ID - Public access
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findOne({
      id: Number(req.params.id),
    });

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch movie",
      error: error.message,
    });
  }
});

// POST new movie - Admin only
router.post("/", protect, authorize("admin"), async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create movie",
      error: error.message,
    });
  }
});

// PUT update movie - Admin only
router.put("/:id", protect, authorize("admin"), async (req, res) => {
  try {
    const movie = await Movie.findOneAndUpdate(
      { id: Number(req.params.id) },
      req.body,
      { new: true, runValidators: true }
    );

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update movie",
      error: error.message,
    });
  }
});

// DELETE movie - Admin only
router.delete("/:id", protect, authorize("admin"), async (req, res) => {
  try {
    const movie = await Movie.findOneAndDelete({
      id: Number(req.params.id),
    });

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    res.status(200).json({
      message: "Movie deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete movie",
      error: error.message,
    });
  }
});

export default router;
