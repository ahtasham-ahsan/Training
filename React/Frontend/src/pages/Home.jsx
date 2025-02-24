import "../css/Home.css"; 
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
    const movies = [
    { id: 1, title: "John", release_date: "2015" },
    { id: 2, title: "Terminator", release_date: "2015" },
    { id: 3, title: "Matrix", release_date: "2015" },
  ];
  const handleSearch = (e) => {
    e.preventDefault(); 
    alert(searchQuery);
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Searach for Movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e)=> setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
