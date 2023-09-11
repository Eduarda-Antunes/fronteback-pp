import React, { useState } from 'react';
import '../Cadastro/Cadastro.css';

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    dataNascimento: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
  };

  return (
    <>
    <div className='back'>
    <h2>Criar nova conta</h2>
    <h3>Faça login para continuar</h3>
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="formulario">
        <div className="campo">
          <label htmlFor="nome">NOME</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div className="campo">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="campo">
          <label htmlFor="senha">SENHA</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
          />
        </div>
        <div className="campo">
          <label htmlFor="dataNascimento">DATA DE NASCIMENTO</label>
          <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="botao">CADASTRAR</button>
      </form>
    </div>
    </div>
    </>
  );
}

export default Cadastro;
