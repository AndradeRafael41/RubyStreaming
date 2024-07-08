import { FaStar } from "react-icons/fa"
const imageUrl = import.meta.env.VITE_API_MOVIE_IMG;
import "../pages/Movie/movieDetails.css";
//import "../pages/favMovies/favMovies.css"

const MovieDetail = ({ movie,userId, onAdd }) => {

    return (

        <div className="film-item">
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            <div className="button-container">
                <button className="btn" onClick={() => onAdd(movie.id,userId)}>Adicionar Aos Favoritos</button>
            </div>
        </div >

    )
}

export default MovieDetail;