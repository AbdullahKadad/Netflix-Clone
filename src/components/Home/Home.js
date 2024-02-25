import { useState, useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import './Home.css';
function Home() {
  const [trendingData, setTrendingData] = useState([]);

  const url = "http://localhost:3000/trending";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTrendingData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="main-list">
      <MovieList data={trendingData} />
    </main>
  );
}
export default Home;
