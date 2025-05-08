import React from "react";
import { Link } from 'react-router-dom';
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-logo pull-left">
        <Link to="/" className="site-title">
          <img
            src="https://yts.mx/assets/images/website/logo-YTS.svg"
            alt="YIFY"
          />
        </Link>
      </div>
      <span className="header-slogan pull-left">
        HD movies at the smallest file size.
      </span>
      <div className="main-nav-links">
        <form action="https://yts.mx/search-movies" id="quick-search">
        <div id="quick-search-container">
          <input id="quick-search-input" name="query" autoComplete="off" type="search" placeholder="Quick search" />
        </div>
        </form>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/4k" className="four-nav">4K</Link>
          </li>
          <li>
            <Link to="/trending">Trending</Link>
          </li>
          <li>
            <Link to="/browse-movies">Browse Movies</Link>
          </li>
        </ul>

        <ul className="nav-links">
          <li>
            <a className="login-nav-btn" href="">
              Login
            </a>
             &nbsp;|&nbsp; 
            <a className="register-nav-btn" href="">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
