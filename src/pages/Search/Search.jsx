import { useEffect, useState } from "react"
import {useSearchParams} from "react-router-dom"
import FilmeCmp from "../componentes/FilmeCmp"
import {Outlet} from "react-router-dom"
import Navbar from "../componentes/Navbar.jsx"
const searchURL = 'https://api.themoviedb.org/3/search/movie'
const apiKey = import.meta.env.VITE_API_KEY

import "./FilmesGrid.css"
import MoviesCards from "../../components/MoviesCards.jsx"

const Pesquisa = () => {
    
    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get("q")

    const getSearchedMovies = async (url) => { 
        
        const res = await axios.post(url);
        const data = await res.json()

        setMovies(data.results)

    }

    useEffect(() => {

        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`

        getSearchedMovies(searchWithQueryURL)

    }, [query])
    
    return(
    <>
        <div className="App">
            <Navbar />
            <Outlet />
        </div>
        <div className="container">
            <h2 className="titulo">
                Resultados para: <span className="query-text">{query}</span>
            </h2>
            <div className="filmes-container">
                {movies.length == 0 && <p>Carregando...</p>}
                {movies.length > 0 && movies.map((movie) => <MoviesCards movie={movie} />)}
            </div>
        </div>
    </>
    )
}

export default Pesquisa;