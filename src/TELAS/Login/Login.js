<<<<<<< HEAD
import React, { Component} from 'react';
import '../Login/Login.css'

class Formulario extends Component {
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

  handleSubmit = (e) => {
    e.preventDefault();
    const { nome, senha } = this.state;
    console.log('Nome:', nome);
    console.log('Senha:', senha);
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

export default Formulario;
=======
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../../TELAS/Login/Login.css';

function Login(){
    return(
    <>  
    <div className='login'>LOGIN</div>
    <div className='MiniTexto'>Faça login para continuar</div>
    <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="on">
        <TextField id="outlined-basic" label="E-MAIL" variant="outlined" />
        <TextField id="outlined-basic" label="SENHA" variant="outlined" />
    </Box>

    <Stack spacing={2} direction="row">
      <Button className='butEntrar' variant="contained">ENTRAR</Button>
    </Stack>

    <div className='LinkSenha'>Esqueceu sua senha?</div>
        </>
    )
}

export default Login; 
>>>>>>> 10eaba776ab34084a661621861719b0539d1f35a


