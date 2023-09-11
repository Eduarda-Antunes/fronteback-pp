import React, { Component } from 'react';
import '../Recuperar/Recuperar.css'; 
import logoaplicativo from '../../assets/LogoAplicativo.jpg'

class EmailForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;
    console.log('Email:', email);
  };

  render() {
    const { email } = this.state;

    return (
    <>
    <img src={logoaplicativo} alt='Logo do Aplicativo' title='ImagemLogo'/>
    <div className='fundo'>
    <div className='textRec'>Recuperar Senha</div>
      <div className="emailContainer">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required/>
          </div>
          <button type="submit">ENVIAR</button>
        <div className='minitex'>Aguarde, em segundos enviaremos um email de recuperação</div>
        </form>
      </div>
      </div>
      </>
    );
  }
}

export default EmailForm;

      