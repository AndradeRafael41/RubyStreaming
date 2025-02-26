import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home'
import Register from './pages/Register/Register';
import FavMovies from './pages/favMovies/FavMovies';
import MovieDetails from './pages/Movie/MovieDetails';
import NotFound from './pages/NotFound/Notfound';
import LandingPage from './pages/Landingpage/LandingPage';
import Search from './pages/Search/Search';
//import './App.css';


function App() {


  return (
    <div>
      <header>

      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/favMovies' element={<FavMovies />} />
          <Route path='/register' element={<Register />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path= '/' element ={<LandingPage />} />
          <Route path='/Search' element= {<Search/>}/>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;