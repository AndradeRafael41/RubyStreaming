import React, { useState } from "react";
import axios from "axios";
import './login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [password, setPassword] = useState('');

    const port_back_end = import.meta.env.VITE_PORT_BACKEND || 3000;
    
    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(`http://localhost:${port_back_end}/auth/login`,
                {
                    email,
                    password
                }
            );

            if (response.data.success) {

                sessionStorage.setItem('token', response.data.token);
                sessionStorage.setItem('user', JSON.stringify(response.data.user))
                const usr = JSON.parse(sessionStorage.getItem('user'));
                console.log(usr.email);
                toast.success('Login Realizado com Sucesso');

                // definindo o token como padrão
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

                setTimeout(() => {
                    navigate('/home'); // Redirecionamento para a página home após o login
                }, 2000);  
            }

        } catch (error) {

            if (email == '' || password == '') {
                setEmail('');
                setPassword('');
                return toast.error('Preencher Email e Senha');
            }

            toast.error('Usuário / Senha Incorretos');
            setEmail('');
            setPassword('');

        }
   
    };

    return (
        <>
            <div className="login_page">
                <h1>Login</h1>

                <form onSubmit={handleLogin}>

                    <div>
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>

                    <div>
                        <label>Senha</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>

                    <button type="submit">Login</button>
                </form>

            </div>

            <ToastContainer />
        </>
    );
};

export default Login;