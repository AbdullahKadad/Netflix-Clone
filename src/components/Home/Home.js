import { useState, useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import "./Home.css";
function Home() {
  const [Movies, setMovies] = useState([]);

  const getMoviesUrl = process.env.REACT_APP_GET_MOVE_URL;
  const getMovies = async () => {
    try {
      const request = await fetch(getMoviesUrl);
      const data = await request.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main className="main-list">
      <MovieList Movies={Movies} />
    </main>
  );
}
export default Home;
