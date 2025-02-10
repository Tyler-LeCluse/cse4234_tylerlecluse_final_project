import "./movieCards.css";
function MovieHeader({ genre }) {

  return (
    <div className='movie-header'>
        <h2>{genre}</h2>
        <hr />
    </div>
  );
}
export default MovieHeader;
