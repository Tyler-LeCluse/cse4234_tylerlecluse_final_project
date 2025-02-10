import express from 'express';

import { getMovies, getMoviesByGenre, getGenreList } from '../controllers/movies.js';

const router = express.Router();

router.get('/getMovies', getMovies);
router.get('/getMoviesByGenre', getMoviesByGenre);
router.get('/getGenreList', getGenreList);

export default router;