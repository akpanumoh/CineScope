import { useContext, createContext, useState, useEffect } from "react";

const movieProvider = createContext();

export function MovieContext({ children }) {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

useEffect(() => {
  const api_key = import.meta.env.VITE_API_KEY

  async function FetchTrending() {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`;

    try {
      setLoading(true);

      const response = await fetch(url);
      const data = await response.json();

      setTrendingMovies(data.results);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }



  async function FetchPopular() {
    const url = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key }`;

    try {
      setLoading(true);

      const response = await fetch(url);
      const data = await response.json();

      setPopularMovies(data.results);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  FetchTrending();
  FetchPopular();
}, []);

  return (<movieProvider.Provider value={{trendingMovies, popularMovies}}>{children}</movieProvider.Provider>);
}






export function UseMovieContext() {
  const context = useContext(movieProvider);

  if (!context) throw new Error("componet must be inside of name context");
  return context;
}