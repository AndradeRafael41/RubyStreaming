
import axios from "axios";

const popularmoviesURL =import.meta.env.VITE_URL_POPULAR_MOVIE;
const moviesURL = import.meta.env.VITE_API_MOVIE;
const apiKey = import.meta.env.VITE_kEY;


export const getMoviesList = async (moviesId) => {
    try {
        const films = [];
        console.log('teste')
        for (const movieId of moviesId) {
            const response = await axios.get(`${moviesURL}${movieId}?api_key=${apiKey}&language=pt-BR`);
            films.push(response.data);
        }

        return films;

    } catch (error) {
        console.log(error);
    }
};

export const getMovie = async (movieId) => {
    try {
        const response = await axios.get(`${moviesURL}${movieId}?api_key=${apiKey}&language=pt-BR`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getRatedMovies = async (page) => {
    try {
        console.log('testeando get')
        const response = await axios.get(`${popularmoviesURL}?api_key=${apiKey}&language=pt-BR&page=${page}`);

        return response.data;

    } catch (error) {
        console.log(error);
    }
};