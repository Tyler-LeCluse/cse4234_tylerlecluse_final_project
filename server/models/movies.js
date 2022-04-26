import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
    year: { type: Number, required: true},
    title: { type: String, required: true},
    info: { type: {
        directors: { type: [String], required: true },
        release_date: { type: String, required: true },
        rating: { type: Number, required: true },
        genres: { type: [String], required: true },
        image_url: { type: String, required: true },
        plot: { type: String, required: true },
        rank: { type: Number, required: true },
        running_time: { type: Number, required: true },
        actors: { type: [String], required: true }
    }}
}, { 'collection': 'movies'});

const movies = mongoose.model('movies', movieSchema);

export default movies;
