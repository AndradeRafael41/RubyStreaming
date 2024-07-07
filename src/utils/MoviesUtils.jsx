
import axios from "axios";

const popularmoviesURL = 'https://api.themoviedb.org/3/movie/popular';
const moviesURL = 'https://api.themoviedb.org/3/movie/';
const apiKey = 'ec1c287fcf58aa929a9dc628334aaa04';


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