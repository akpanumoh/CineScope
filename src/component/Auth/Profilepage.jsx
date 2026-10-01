

import soldier from "../../assets/soldier.jpg";
import { Home, Compass, Bookmark, UserRound } from "lucide-react";
import { Link } from "react-router-dom"
import "./Profilepage.css";
import { UseNameContext } from "../../context/UserContext";


function Profilepage(){

    const { UseName, Email } = UseNameContext();

    return(

        <div className="profile">
            <div className="profile-header">
                <h1>Profile</h1>
               

            </div>

            <div className="profile-img">
                <img src={soldier} alt="soldier.jpg" />
            </div>

            <div className="profile-info">
            <h3>{UseName}</h3>
                <h4>{Email}</h4>

            </div>

            <div className="profile-details">
                <div className="profile-watchlist-1">
                    <h2>Watchlist</h2>
                    <h4>24 movies</h4>
                    
                </div>

                <div className="profile-watchlist-2">
                    <h2>Favorites</h2>
                    <h4>12 movies</h4>
                </div>

                <div className="profile-watchlist-3">
                    <h2>Recent Viewed</h2>
                    <h4>8 movies</h4>
                </div>
            </div>


           <div className="profile-link">
                 <a href="">Log Out</a>
           </div>

            <footer className="footer-item">
            
                <div>
                   <Link to = '/'> <Home size={20} className="link" /><br />
                    <h4 className="link-text">Home</h4></Link>
                </div>


                  <div>
                    <Compass size={20} /><br />
                    <h4>Discover</h4>
                </div>


                  <div>
                    <Link to='/Watchlist'><Bookmark size={20} className="link"/><br />
                    <h4 className="link-text">Watchlist</h4></Link>
                </div>


                  <div>
                    <UserRound size={20} /><br />
                    <h4>Profile</h4>
                </div>
                
           
            </footer>

        </div>

    )
}

export default Profilepage;