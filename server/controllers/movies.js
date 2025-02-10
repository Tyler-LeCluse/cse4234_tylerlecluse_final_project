import express from 'express';
import mongoose from 'mongoose';

import Movies from '../models/movies.js';

const router = express.Router();

export const getMovies = async (req, res) => { 
    try {
        const movies = await Movies.find();
        // console.log(movies);
        res.status(200).json(movies);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error);
    }
}

export const getMoviesByGenre = async (req, res) => { 
    const genre = req.query.genre;
    console.log(genre);
    try {
        const movies = await Movies.find({ "info.genres": genre}).sort({ "info.rating": -1 });
        // console.log(movies);
        res.status(200).json(movies);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error);
    }
}

export const getGenreList = async (req, res) => {
    try {
        const genreList = await Movies.distinct('info.genres');
        res.status(201).json(genreList);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error);
    }
    
}

export default router;