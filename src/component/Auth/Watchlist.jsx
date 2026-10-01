
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"
import { Link } from "react-router-dom";
import Logo from "../shared/logo";
import { Search } from "lucide-react";
import soldier from "../../assets/soldier.jpg";
import "./Watchlist.css"


function Watchlist () {

   


    return (

         <div className="watchlist-nav">
            <div className="flex">
                    <div className="watchlist-logo">
                        <div className="logo">
                            <Logo />
                        </div>
                

                        <div>
                            <span className="name">CineScope</span>
                        </div>
                    </div>

                {/* navigation links */}
                    <div className="watchlist-links">
                        {/* <a href="" className="active">
                            Home
                        </a> */}
                        <Link to='/'>Home</Link>


                        <a href="">Discover</a>


                        {/* <a href="">Watchlist</a> */}
                        <Link to='Watchlist'>Watchlist</Link>
                    </div>

            

                    <div className="search">
                        <Search size={20} />
                    </div>
            </div>
  

            <div className="watchlist-header">
                <h2>My Watchlist</h2>
                <p>Movies you've saved for later.</p>
            </div>

                <div className="watchlist-movies-card">

                    <div className="watchlist-img">
                        <img src={soldier} alt="soldier.jpg" />
                        <h2>The Dark Knight</h2>
                        <p>⭐9.0</p>
                    </div>


                    <div className="watchlist-img">
                        <img src={soldier} alt="soldier.jpg" />
                        <h2>The Dark Knight</h2>
                        <p>⭐9.0</p>
                    </div>




                    <div className="watchlist-img">
                        <img src={soldier} alt="soldier.jpg" />
                        <h2>The Dark Knight</h2>
                        <p>⭐9.0</p>
                    </div>





                    <div className="watchlist-img">
                        <img src={soldier} alt="soldier.jpg" />
                        <h2>The Dark Knight</h2>
                        <p>⭐9.0</p>
                    </div>

                </div>


         </div>

     

       
     

    )
}

       
export default Watchlist;