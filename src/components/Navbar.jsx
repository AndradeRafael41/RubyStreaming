import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/home" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/favMovies" className="navbar-link">Meus Filmes Favoritos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;