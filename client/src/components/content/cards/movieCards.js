import "./movieCards.css";

function MovieCard({ title, img, rating, time }) {

  return (
    <article className="movie-card">
      <img
        className="mc-img"
        src={img}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src="https://i.ibb.co/GcZMV6W/Need-This.jpg";
        }}
        alt="movie img"
      />
      <div className="card-info">
        <h2 className="mc-title">{title}</h2>
        <p className="mc-time-rating">Rating: {rating}</p>
        <p>Length: {time}</p>
        <div>
          <button>View Full</button>
          <button>Like</button>
        </div>
      </div>
    </article>
  );
}
export default MovieCard;
