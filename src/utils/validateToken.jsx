import axios from "axios";

const port_backend = 3000 || import.meta.env.VITE_PORT_BACKEND;

export const validateToken = async (end_point) => {
            
    const token = sessionStorage.getItem('token');
    
    if (!token) {
        console.error('Token não encontrado');
        return false; // se não existir token no session storage, retorna false
    }

    console.log(end_point)
    // verifica no backend a validade do token
    const tokenResponse = await axios.post(
        `http://localhost:${port_backend}${end_point}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });


    // se o token for inválido, retorna false
    if (!tokenResponse.data.statusToken) {
        console.error('Token Inválido');
        return false;
    }

    // se token for válido, retorna true
    return true;

};

