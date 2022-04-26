import MovieCard from "./movieCards";
import { useSelector } from "react-redux";
// import { Carousel } from 'react-responsive-carousel';

function Movies() {
  const movies = useSelector((state) => state.movies);
  const formatTime = (unformattedTime) => {
    let t = Number(unformattedTime);
    console.log(t);
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
//   console.log(movies);
  return (
    <div>
      {movies
        ? movies?.map((movie, ind) => (
            <MovieCard
              key={movie?.title + movie?.rating + ind}
              title={movie?.title}
              img={movie?.info.image_url ? movie.info.image_url : "https://yt3.ggpht.com/TEAdMZfKzX66swz8s-tDk1slRImh9GLdsJltTYmwc-25cYV-c_8eYN5K1jpywF2q9Dy_HKGR=s900-c-k-c0x00ffffff-no-rj"}
              rating={movie?.info.rating}
              time={formatTime(movie?.info.running_time)}
            />
          ))
        : null}
    </div>
  );
}
export default Movies;
