import { useEffect, useState } from "react";
import Card from "./card";
import Popu from "./Popu";

import "./Trending.css";


const Popular = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   // console.log("hello")
  //   async function fetchData() {
  //     const url =
  //       // "https://api.themoviedb.org/3/movie/popular?api_key=${97165fd58a7b679e7cbda5e33cbbc988}"
  //       "https://api.themoviedb.org/3/movie/popular?sort_by=popular.desc"; 
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         accept: "application/json",
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NzE2NWZkNThhN2I2NzllN2NiZGE1ZTMzY2JiYzk4OCIsIm5iZiI6MTc4ODYyNzMxMS44NjUsInN1YiI6IjZhOWM0OTZmM2RmODJjZmFjOTIyMjNlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sqMN0fNkwW5QssDxvNyxMgUaP_p2ix_Vr9SeF2mnVes",
  //       },
  //     };
  //     try {
  //       setLoading(true);
  //       const response = await fetch(url, options);
  //       const data = await response.json();
  //       console.log("data.results", data.results);
  //       setResults(data.results);
  //     } catch (error) {
  //       console.error(error);
  //       setError(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchData();
  // }, []);




// HOW TO SET SOMETHING TO LOCAL STORAGE

// const addToWatchlist = (movie) => {

//   const getMovie = localStorage.getItem("movie");

//   const parseItem = JSON.parse(getMovie) || [];

//   parseItem.push(movie);

//   localStorage.setItem("movie", JSON.stringify(movie))
// }
// //after you declare this function go to the button that you have 'add to watchlist'and put this command "Onclick= {() => addToWatch (movie) )"




  return (
    <section>
        <div className="trending-header" style={{ marginTop: '4%' }}>
            <h2>Popular Movies</h2>
            <h4>See all</h4>
        </div>


      <div className="movie-grid">
        {loading ? (
          <p>Loading...</p>
        ) : !error ? (

          results.map((movie) => {
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

export default Popular;












