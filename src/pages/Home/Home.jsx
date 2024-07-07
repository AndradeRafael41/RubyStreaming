import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getRatedMovies } from "../../utils/MoviesUtils";
import MoviesCards from "../../components/MoviesCards";
import { validateToken } from "../../utils/validateToken";
import "./home.css";  // Importe o arquivo CSS

import Navbar from "../../components/Navbar";


const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [topMovies, setTopMovies] = useState([]);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    const getTopRatedMovies = async (pageNumber) => {
        setIsLoading(true);
        const res = await getRatedMovies(pageNumber);
        setTopMovies(res.results);
        setIsLoading(false);
    };

    const handleValidate = async () => {
        const end_point = '/home';
        const response = await validateToken(end_point)
        console.log(response)

        if (response === false) {
            return navigate('/login');
        } else {
            setIsLoading(false); // Conclua o carregamento se o token for válido
            return navigate('/home')
        }
    }

    useEffect(() => {
        if (handleValidate() == false) {
            return navigate('/login');
        } else {
            getTopRatedMovies(page);
        };

    }, [page]);

    const handleNextPage = () => {

        setTimeout(() => {
            setPage(prevPage => prevPage + 1);
        }, 200);


    };

    const handlePreviousPage = () => {

        setTimeout(() => {
            setPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
        }, 200);


    };

    if (isLoading) {
        return <div>Carregando...</div>;
    }

    return (

        <div className="container">
            <header>
                <Navbar/>
            </header>
            <h1 className="titulo">Melhores Filmes:</h1>
            <div className="filmes-container">
                {topMovies.length === 0 && <p>Carregando...</p>}
                {topMovies.length > 0 && topMovies.map((movie) => (
                    <MoviesCards key={movie.id} movie={movie} />
                ))}
            </div>
            <div className="pagination">
                <button className="pagination-button" onClick={handlePreviousPage} disabled={page === 1}>Página Anterior</button>
                <span className="page_number">{page}</span>
                <button className="pagination-button" onClick={handleNextPage}>Próxima Página</button>
            </div>
        </div>
    );
};

export default Home;