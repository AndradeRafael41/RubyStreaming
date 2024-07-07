import {Link} from "react-router-dom"
import { FaStar } from "react-icons/fa"

const imageUrl = import.meta.env.VITE_API_MOVIE_IMG;
import '../pages/favMovies/favMovies.css';

const MovieCard = ({ movie, onRemove,}) => {

    return (

        <div className="film-item-fav-movies">
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            <div className="button-container-fav-movies">
                <button className="btn-fav-movies" onClick={() => onRemove(movie.id)}>Remover</button>
                <Link to={`/movie/${movie.id}`}>
                    <button className="btn-fav-movies"> Detalhes</button>
                </Link>
            </div>
        </div >

    )
}

export default MovieCard;