import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill, } from "react-icons/bs";
import MovieDetail from "../../components/MovieDetail";
import { getMovie } from "../../utils/MoviesUtils";
import { validateToken } from "../../utils/validateToken";
import { addFavoriteMovie } from "../../utils/validadeMovies";
import { useNavigate } from "react-router-dom";
import "./movieDetails.css";
import Navbar from "../../components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MovieDetails = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();
    const userId = JSON.parse(sessionStorage.getItem('user')).id

    const handleValidate = async () => {
        const end_point = `/validate`;
        const response = await validateToken(end_point)
        console.log(response)

        if (response === false) {
            return navigate('/login');
        }
    }

    const handleGetMovie = async (movieId) => {
        try {
            const response = await getMovie(movieId)
            setMovie(response);
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddMovie = async (movieId, userId) => {
        try {
            const response = await addFavoriteMovie(movieId, userId)
            console.log(response)

            if (response == false) {
                return toast.error('O Filme já Está na Lista');
            }


            return toast.success('Filme adicionado com Sucesso');



        } catch (error) {

            return toast.error('O Filme já Está na Lista');


        }
    };

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    };

    useEffect(() => {
        handleValidate();
        handleGetMovie(id);
    }, [id]); // Adicione `id` como dependência

    return (
        <div className="movie-page">
            {movie && (

                <div className="details">
                    <header>
                        <Navbar />
                    </header>
                    <MovieDetail movie={movie} userId={userId} onAdd={handleAddMovie} showLink={false} />
                    <p className="tagline">{movie.tagline}</p>
                    <div className="info">
                        <h3>
                            <BsWallet2 /> Orçamento:
                        </h3>
                        <p>{formatCurrency(movie.budget)}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsGraphUp /> Receita:
                        </h3>
                        <p>{formatCurrency(movie.revenue)}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsHourglassSplit /> Duração:
                        </h3>
                        <p>{movie.runtime} minutos</p>
                    </div>
                    <div className="info description">
                        <h3>
                            <BsFillFileEarmarkTextFill /> Descrição:
                        </h3>
                        <p>{movie.overview}</p>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default MovieDetails;
