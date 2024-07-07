import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './register.css';

const Register = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlerRegister = async (event) => {
        event.preventDefault();
        const port = 3000;
        try {
            const response = await axios.post(`http://localhost:${port}/auth/register/user`, {
                userName,
                email,
                password,
                confirmPassword
            });

            toast.success('Cadastrado com Sucesso');
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        } catch (error) {
            if (email === '' || userName === '') {
                return toast.error('Preencher Todos os Campos!');
            }

            if (password === '' || confirmPassword === '') {
                return toast.error('Preencher Todos os Campos!');
            }

            if (password !== confirmPassword) {
                return toast.error('As Senhas Não Combinam!');
            }

            if (error.response?.data?.userExistent) {
                return toast.error('Já Existe Usuário Com Este Email!');
            }

            toast.error(error.response?.data?.message || 'Erro ao registrar');
        }
    };

    return (
        <>
            <div className='user_register'>
                <div className="logo"></div>
                <h1>Registro de Usuário</h1>
                <form onSubmit={handlerRegister}>
                    <div>
                        <label>Nome</label>
                        <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Senha</label>
                        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label>Confirmar Senha</label>
                        <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <button type='submit'>Registrar</button>
                </form>
            </div>
            <ToastContainer />
        </>
    );
};

export default Register;
