import {  Routes, Route } from 'react-router-dom';
// import Register from "./component/Auth/register";
import Login from "./component/Auth/Login";
import Homepage from "./component/Auth/Homepage";
import Trending from "./component/Auth/Trending";
import Popular from "./component/Auth/Popular";
import MovieDetails from "./component/Auth/MovieDetails";
import Watchlist from './component/Auth/Watchlist';
import Profilepage from './component/Auth/Profilepage';


function App() {


  return (
    // <>
    //   <Register />
    //    <Login/>
    //    <Homepage/>
    //    <Trending />
    //    <Popular />
    //    <MovieDetails />
    //    <Watchlist />
       
    // </>

     
      <Routes>
        <Route path='/' element={<Homepage/>} />
        {/* <Route path='register' element={<register/>} /> */}
        <Route path='Login' element={<Login/>} />
        <Route path='Watchlist' element={<Watchlist/>} />
        <Route path="/MovieDetails" element={<MovieDetails/>} />

          <Route path='Profilepage' element={<Profilepage/>} />


        {/* <Routes element =  */}
        
        
      </Routes>
    
  )
}

export default App;
