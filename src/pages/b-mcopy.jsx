import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useOutletContext } from "react-router-dom"; 
import "../styles/browsemovies.css";

const BrowseMovies = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { searchQuery } = useOutletContext(); 

  const getMovies = async (pageNumber = 1) => {
    try {
      const response = await axios.get(`https://yts.mx/api/v2/list_movies.json?page=${pageNumber}`);
      const fetchedMovies = response?.data?.data?.movies || [];
      setMovies(fetchedMovies);
      setFilteredMovies(fetchedMovies);
      setTotalPages(response?.data?.data?.movie_count ? Math.ceil(response?.data?.data?.movie_count / 20) : 1);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getMovies(page);
  }, [page]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredMovies(movies);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredMovies(filtered);
    }
  }, [searchQuery, movies]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="browse-container">
      <h2 className="browse-heading">YIFY Movies</h2>

      {/* Pagination Top */}
      <div className="pagination-container">
        {[...Array(Math.min(totalPages, 8)).keys()].map((index) => (
          <button 
            key={index + 1}
            className={`pagination-button ${page === index + 1 ? "active" : ""}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        {totalPages > 8 && (
          <>
            <span className="pagination-dots">...</span>
            <button 
              className="pagination-button"
              onClick={() => handlePageChange(page + 1)}
            >
              Next »
            </button>
          </>
        )}
      </div>

      {/* Movies Grid */}
      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Link 
              key={movie.id} 
              to={`/movieSpec/${movie.id}`} 
              className="movie-card"
            >
              <img 
                src={movie.large_cover_image} 
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <p className="movie-title">{movie.title}</p>
                <p className="movie-year">{movie.year}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="no-movies-found">No movies found</p>
        )}
      </div>
    </div>
  );
};

export default BrowseMovies;
