import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "../pages/Home/home.css";  

const imageUrl = import.meta.env.VITE_API_MOVIE_IMG;


const MoviesCards = ({ movie }) => {
    return (
        <div className="film-item">
            <img className="img-fav-movie" src={imageUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            <div className="button-container">
                <Link to={`/movie/${movie.id}`}>
                    <button className="btn">Detalhes</button>
                </Link>
            </div>
        </div>
    );
};

export default MoviesCards;
