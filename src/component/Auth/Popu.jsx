import "./Card.css"

export default function Popu({ title, releaseDate, posterPath }) {
  return (
    <div className="card">
      <img
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
        alt={`${title} Poster Image`}
        className="image"
      />

      <div>
        <h1>{title}</h1>
        <p>{releaseDate}</p>
      </div>
      
    </div>
  );
}