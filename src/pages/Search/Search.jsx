import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesCards from "../../components/MoviesCards.jsx";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";

const searchURL = import.meta.env.VITE_API_MOVIE_SEARCH;
const apiKey = '69913809401d64885393b6673e20b5a1';

import "../Home/home.css";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (query) {
      const searchWithQueryURL = `${searchURL}?query=${query}&api_key=${apiKey}`;
      getSearchedMovies(searchWithQueryURL);
    }
  }, [query]);

  return (
    <>
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
      <div className="container">
        <h2 className="titulo">
          Resultados para: <span className="query-text">{query}</span>
        </h2>
        <div className="filmes-container">
          {movies.length === 0 && <p>Carregando...</p>}
          {movies.length > 0 && movies.map((movie) => <MoviesCards key={movie.id} movie={movie} />)}
        </div>
      </div>
    </>
  );
};

export default Search;