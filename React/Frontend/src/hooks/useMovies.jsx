import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/api";

export function useMovies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (e) {
      console.error(e);
      setError("Failed to search for Movie");
    } finally {
      setLoading(false);
    }
    setSearchQuery("");
  };

  return { searchQuery, setSearchQuery, loading, movies, error, handleSearch };
}
