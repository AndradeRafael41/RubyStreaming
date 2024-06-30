import React, { useState } from "react";
import axios from "axios";
import './login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErros] = useState({});


    const handleLogin = async (event) => {
        event.preventDefault();
        const port = 3000;


        try {
            const response = await axios.post(`http://localhost:${port}/auth/login`,
                {
                    email,
                    password
                }
            );

            if (response.data.success) {
                
                sessionStorage.setItem('token', response.data.token);
                toast.success('Login Realizado com Sucesso');
                // definir o redirecionamento para home e armazenar o token
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