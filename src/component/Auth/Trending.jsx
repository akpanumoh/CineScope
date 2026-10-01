import { useEffect, useState } from "react";
import Card from "./card";
import { UseMovieContext } from "../../context/MovieContext";
import "./Trending.css";


const Trending = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const {trendingMovies} = UseMovieContext()

    console.log(trendingMovies)
  return (
    <section>
        <div className="trending-header">
            <h2>Trending</h2>
            <h4>See all</h4>
        </div>

      <div className="movie-grid">
        {loading ? (
          <p>Loading...</p>
        ) : !error ? (

          trendingMovies.map((movie) => {
            return (
              <Card
                key={movie.id}
                title={movie.title}
                releaseDate={movie.release_date}
                posterPath={movie.poster_path}
              />
            );
          })
        ) : ( 
          <p>Something went wrong</p>
        )}
      </div>

      
    </section>
  );
};

export default Trending;
