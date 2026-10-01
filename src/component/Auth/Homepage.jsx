import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Logo from "../shared/logo";
import { Search, UserRound } from "lucide-react";
import soldier from "../../assets/soldier.jpg";
import Trending from "./Trending";
import Popular from "./Popular";
import "./Homepage.css";

function Homepage() {
  return (
    <div
      className="homepage"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.95), rgba(0,0,0,0.2)), url(${soldier})`,
      }}
    >
      <div className="navbar">
        <div className="brand-logo">
          <div className="logo">
            <Logo />
          </div>
          

          <div>
            <span className="name">CineScope</span>
          </div>
        </div>

        {/* navigation links */}
        <div className="nav-links">
          {/* <a href="" className="active">
            Home
          </a> */}
          <Link to='/'>Home</Link>
          <a href="">Discover</a>
          {/* <a href="">Watchlist</a> */}
          <Link to='/Watchlist'>Watchlist</Link>
        </div>

        {/* //how to route from homepage to register.
        <div>
            <link to="/register">
            <button className="reg-btn">Register</button>
            </link>
          </div> */}

        <div className="search">
          <Search size={20} />
          <Link to='/Profilepage'> <UserRound size={25} className="user-pic" /> </Link>
        </div>


          {/* link from the homepage user profile pic to the user main profile page */}
         {/* <div className="user-pic">
           <Link to='/Profilepage'> <UserRound size={20} /> </Link>
         </div> */}
      </div>

      <div className="featured">
        <div className="feat">
          <h4>FEATURED</h4>
          <h2>Interstellar</h2>
        </div>

        <div className="rating">
          <h4>⭐8.5</h4>
          <h4>2014</h4>
          <h4>Sci-Fi Drama</h4>
        </div>

        <p>
          A team of explorers travel through a wormhole in space in an attempt
          to ensure humanity's survival.
        </p>

        <div className="buttons">
          <button className="trailer-btn"> ▶ Watch Trailer</button>
          <button className="watchlist-btn">+ Watchlist</button>
        </div>
      </div>


      


    <div>
      <Trending />
      <Popular />
    </div>

    </div>

    

  );
}

export default Homepage;
