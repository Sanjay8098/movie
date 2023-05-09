import express from "express";
import User from "../controller/login.js";
import Movie from "../controller/Movies.js";
const router = express.Router();

router.post("/reg", User.register);
router.post("/login", User.sigin);
router.post("/add", Movie.addMovies);
router.get("/get", Movie.getall);
export default router;
