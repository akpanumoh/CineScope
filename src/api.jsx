import { useEffect, useState } from "react";


const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3"

const [popular, setPopular] = useState(true);

export const getTrending = async () => {
    const response = await fetch(
        `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
    )

    const data = await response.json();

    console.log(data);

    return data.results;
}
useEffect(() =>{
    const response = async () => {
        const data = await fetch ("https://api.themoviedb.org/3/trending/movie/week?api_key=");
        
    }
})