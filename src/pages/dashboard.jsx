import React from "react";
import "../styles/dashboard.css";
import Movies from "../components/common/movies";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [moviez, setMoviez] = useState([]);
  const getMovies = async () => {
    const response = await axios.get("https://yts.mx/api/v2/list_movies.json");
    console.log(response?.data?.data?.movies);
    setMoviez(response?.data?.data?.movies)
  
  };
  useEffect(() => {
    getMovies();  
  }, []);

  // let movies = [
    // {
    //   id: "1",
    //   name: "Hulk",
    //   imageUrl: "/images/movie4.jpg",
    //   year: "2012",
    // },
  
    // {
    //   id: "3",
    //   name: "Panther",
    //   imageUrl: "/images/movie2.jpg",
    //   year: "2020",
    // },
    // {
    //   id: "3",
    //   name: "Panther",
    //   imageUrl: "/images/movie3.jpg",
    //   year: "2024",
    // },
    // moviez
  // ];
  


  return (
    
    <div className="mainContainer">
      <div className="firstContainer">
        <div className="anouncement">
          <h1>Download YTS YIFY movies: HD smallest size</h1>
          <p>
            Welcome to the official <b>YTS.MX</b> website. Here you can browse
            and download YIFY movies in excellent <br></br> 720p, 1080p, 2160p
            4K and 3D quality, all at the smallest file size. YTS Movies
            Torrents.
            <br></br>
            <a
              href="https://yts.mx/blog/yts-mx-is-the-only-new-official-domain-for-yify-movies"
              title="IMPORTANT - YTS.MX is the only new official domain for YIFY Movies"
            >
              <b>
                IMPORTANT - YTS.MX is the only new official domain for YIFY
                Movies
              </b>
            </a>
          </p>
        </div>
        <div>
          <img src="/images/telegram.svg" width="16" height="16" />
          <a href="https://t.me/ytsmx_updates" target="_blank" rel="nofollow">
            @YTSMX_UPDATES
          </a>
          |<img src="/images/twitter.svg" width="16" height="16"></img>
          <a href="https://x.com/ytsyify" target="_blank" rel="nofollow">
            Follow <b>@YTSYIFY</b> for upcoming featured movies!
          </a>{" "}
          | <img src="/images/mastodon.svg" width="16" height="16"></img>
          <a rel="me" href="https://mastodon.social/@ytsyify" target="_blank">
            @ytsyify
          </a>
          <br></br>
          <br></br>
        </div>

        <div className="popular-downloads">
          <div className="row">
            <h2>
              <span className="icon-star">
                <img
                  src="/images/green-icon-preview.png"
                  width="20"
                  height="20"
                  alt=""
                />
              </span>
              Popular Downloads
              <Link to="https://yts.mx/browse-movies/0/all/all/0/featured/0/all">
                more feature...
              </Link>
              <Link to="https://yts.mx/rss-guide">
                <img src="/images/rss-icon.webp" alt="" />
              </Link>
            </h2>
          </div>

          <div className="row">
            <div className="browse-movie-wrap">
              {moviez.map((movie) => (
                <Link to={`/movieSpec/${movie?.id}`} className="browse-movie-link">
                  <Movies
                  imageurl={movie.large_cover_image}
                  name={movie.title}
                  year={movie.year}
                />
                </Link>                
              ))}
            </div>
          </div>
        </div>

        <div className="firstDisplay"></div>
      </div>
    </div>
  );
};

export default Dashboard;
