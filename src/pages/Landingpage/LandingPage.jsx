import './landingpage.css';

function LandingPage() {
    return (
      <div className="LandingPage">
        <div className="content">
          <img src='/ruby_preto.png'></img>
          <h1>Bem-vindo ao RubyStreaming</h1>
          <p>Veja os catálogos do melhor da sétima arte.</p>
          <div className="button-container">
            <button className="login-button" onClick={() => window.location.href = '/login'}>Login</button>
            <button className="register-button" onClick={() => window.location.href = '/register'}>Registrar</button>
          </div>
        </div>
      </div>
    );
}

export default LandingPage;
