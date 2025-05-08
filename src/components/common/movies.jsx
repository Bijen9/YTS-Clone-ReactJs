import React from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard.css"

const Movies = ({ imageurl, name, year }) => {
  return (
    <div>
      <figure>
        <img
          className="img-responsive"
          src={imageurl}
          alt="Drop (2025) download"
        />
      </figure>
      <div className="browse_movie-bottom">
        <Link to="" className="browse-movie-title">
          {name}
        </Link>
        <div className="browse-movie-year">
          {year}
        </div>
      </div>
      </div>
    
  );
};

export default Movies;
