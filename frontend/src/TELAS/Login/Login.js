import React, { Component} from 'react';
import '../Login/Login.css'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      senha: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => async (e) => {
    e.preventDefault();

    const data = { 
      nome, 
      senha 
    }

    const response = await axios.post('http://localhost:3008/api/auth/login', data)
    console.log('Nome:', nome);
    console.log('Senha:', senha);

    if (response.data.success === true) {
      // redireciona para home
      alert('Usuario logado')
    } else {
      alert('Não deu certo')
    }
  };

  render() {
    const { nome, senha } = this.state;

    return (
    <div className='back'>
    <h2>Login</h2>
    <h3>Faça login para continuar</h3>
      <div className="formulario-container"> 
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">NOME</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="senha">SENHA</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={senha}
              onChange={this.handleChange}
              />
              <h4>Esqueci minha senha</h4>
          </div>
          <button type="submit">ENTRAR</button>
        </form>
      </div>
      </div>
    );
  }
}

export default Login;