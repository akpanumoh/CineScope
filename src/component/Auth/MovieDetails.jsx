import React from "react";
import { useParams } from "react-router-dom"
import soldier from "../../assets/soldier.jpg";
import "./MovieDetails.css";






function MovieDetails() {

  // const {id} = useParams();
  //   return <p>Movie Id: {id}</p>

  return (
    <div className="backdrop">
      <img src={soldier} alt="soldier.jpg" />

      <div className="gradient"></div>
      

      <div className="main-content">
        <div className="movie-poster">
          <img src={soldier} alt="soldier.jpg" />
        </div>

        <div className="details">
          <h1>The Dark Knight</h1>
          <h4>
            ⭐9.0 <span>2008</span> <span>2h 32m</span>
          </h4>

          <div className="btn">
            <button>Action</button>
            <button>Crime</button>
            <button>Drama</button>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor at
            quos explicabo. Architecto deleniti, tenetur quis quod labore magnam
            facilis, et distinctio eaque ipsam praesentium? Nesciunt eaque
            necessitatibus nulla asperiores.
          </p>

          <div className="btn-2">
            <button>+ Add to watchlist</button>
            <button>▶ Watch Trailer</button>
          </div>

          <div className="detail">
            <h2>Overview</h2>

            <div className="overview-detail">
              <div>
                {/* DIRECTOR  */}
                <h4>Director</h4>
                <p>Christopher Nolan</p>
              </div>

              {/* BUDGET */}
              <div>
                <h4>Budget</h4>
                <p>$185 Million</p>
              </div>

              {/* WRITERS */}
              <div>
                <h4>Writers</h4>
                <p>Jonathan Nolan, Christopher Nolan</p>
              </div>

              {/* REVENUE */}
              <div>
                <h4>Revenue</h4>
                <p>$1.2 Billion</p>
              </div>

              {/* RELEASED DATE */}
              <div>
                <h4>Release</h4>
                <p>July 18, 2008</p>
              </div>

              {/* STATUS */}
              <div>
                <h4>Status</h4>
                <p>Released</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
