import axios from "axios";

const port_back_end = import.meta.env.VITE_PORT_BACKEND || 3000;

export const getMoviesId = async (userId) => {

    try {
        // buscando no banco de dados os ids filmes do usuário
        const response = await axios.get(`http://localhost:${port_back_end}/fav_movie/${userId}`);
        return response.data;

    } catch (error) {
        console.log(error);
        return false;
    }
};


export const removeMovie = async (movieId, userId) => {

    try {
        // removendo do banco do banco de dados o filme especiíco do usuário
        const response = await await axios.post(`http://localhost:${port_back_end}/movie_remove/${userId}`, {
            userId,
            movieId
        });
        return true;
    } catch (error) {
        console.error(error)
        return false;
    }
};

export const addFavoriteMovie = async (movieId, userId) => {
    
    try {
        // removendo do banco do banco de dados o filme especiíco do usuário
        const response = await await axios.post(`http://localhost:${port_back_end}/movie_add`, {
            userId,
            movieId
        });
        
        return response.data
        
    } catch (error) {
        console.error(error)
        return false;
    }
};


