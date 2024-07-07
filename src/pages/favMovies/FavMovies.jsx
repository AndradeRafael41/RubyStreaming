import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard";
import { getMoviesId, removeMovie } from "../../utils/validadeMovies";
import { getMoviesList } from "../../utils/MoviesUtils";
import { validateToken } from "../../utils/validateToken";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";



import './favMovies.css';

const FavMovies = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [moviesId, setMoviesId] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userId = JSON.parse(sessionStorage.getItem('user')).id;

  const handleValidate = async () => {
    const end_point = `/validate`;
    const response = await validateToken(end_point);
    console.log('resposta token')
    console.log(response)

    if (response === false) {
      return navigate('/login');
    } else {
      setIsLoading(false); // Conclua o carregamento se o token for válido

      return navigate('/favMovies')
    }
  }

  const handleGetIds = async (userId) => {
    try {
      const response = await getMoviesId(userId);
      console.log(response)
      setMoviesId(response);
    } catch (error) {
      console.error("Erro ao Remover", error);
    }
  }

  const handleGetMovies = async () => {
    try {
      const response = await getMoviesList(moviesId);
      console.log(response)
      setMovies(response);
    } catch (error) {
      console.error("Erro ao Remover", error);
    }
  }

  const handleRemove = async (movieId) => {
    try {
      await removeMovie(movieId, userId);
      return setMovies(movies.filter(movie => movie.id !== movieId));
    } catch (error) {
      console.error("Erro ao Remover", error);
    }
  }
  useEffect(() => {
    const validateAndFetchData = async () => {
      await handleValidate();
      if (isLoading) return; // Não prossegue se ainda estiver carregando
      await handleGetIds(userId);
    };
    validateAndFetchData();
  }, [userId, isLoading]);

  useEffect(() => {
    if (moviesId.length > 0) {
      handleGetMovies();
    }
  }, [moviesId]);

  if (isLoading) {
    return <div>Carregando...</div>; // Tela de carregamento
  }

  return (
    <div className="container-fav-movie">
      <header>
        <Navbar />
      </header>
      <h1 className="titulo">Filmes Favoritos</h1>
      <div className="fav-movies-container">
        <div className="film-grid">
          {movies.length === 0 && <p>Carregando...</p>}
          {movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} onRemove={handleRemove} />)}
        </div>
      </div>
    </div>

  );
};

export default FavMovies;
