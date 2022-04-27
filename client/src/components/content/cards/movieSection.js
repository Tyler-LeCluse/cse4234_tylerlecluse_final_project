import MovieCard from "./movieCards";
import MovieHeader from "./movieHeader";
import { useState, useEffect } from "react";
import Axios from "axios";
// import { useState, useEffect } from "react";
// import { Carousel } from 'react-responsive-carousel';
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function MovieSection({ genre }) {
    const [movies, setMovies] = useState(null);


    const formatTime = (unformattedTime) => {
        let t = Number(unformattedTime);
        let hours = Math.floor(t / 3600); // get hours
        let minutes = Math.floor((t - hours * 3600) / 60); // get minutes
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return hours + ":" + minutes;
    };

    useEffect(() => {
        Axios.get("http://localhost:5000/movies/getMoviesByGenre", {
            params: { genre: genre },
        })
            .then((res) => {
                setMovies(res.data);
            })
            .catch((e) => console.log(e));
    }, [genre]);
    //   console.log(movies);
    return (
        <div className="movie-section">
            <MovieHeader genre={genre} />
            {movies
                ?
                (<ScrollMenu showThumbs={false} axis="horizonal" autoFocus={true}>
                    {movies.map((movie, ind) => (
                        10 > ind &&
                        <div>
                            <MovieCard
                                key={movie.title + ind + movie.info.rating}
                                img={movie.info.image_url}
                                title={movie.title}
                                rating={movie.info.rating}
                                time={formatTime(
                                    movie?.info.running_time_secs
                                        ? movie?.info.running_time_secs
                                        : 1600
                                )}
                            />
                        </div>
                    ))}
                </ScrollMenu>)
                : null}
        </div>
    );
}
export default MovieSection;
