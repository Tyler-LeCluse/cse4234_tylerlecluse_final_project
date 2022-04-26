import "./movieCards.css";

function MovieCard({ title, img, rating, time }) {
  console.log(img);
  return (
    <article className="movie-card">
      <img
        className="mc-img"
        src={img}
        alt="movie img"
      />
      <div className="card-info">
        <h2 className="mc-title">{title}</h2>
        <p className="mc-time-rating">{rating}</p>
        <p>{time}</p>
        <div>
          <button>View Full</button>
          <button>Like</button>
        </div>
      </div>
    </article>
  );
}
export default MovieCard;
