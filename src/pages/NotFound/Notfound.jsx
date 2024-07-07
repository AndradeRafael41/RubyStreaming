import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Página Não Encontrada</h1>
      <img src="https://pbs.twimg.com/media/GNA-AMwXcAASDrG.jpg" alt="Ai ce me quebra" />
      <Link to="/login">Voltar para a página inicial</Link>
    </div>
  );
};

export default NotFound;