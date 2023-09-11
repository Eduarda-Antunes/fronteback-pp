import React, { useState } from 'react';
import '../Informacoes/Informacoes.css';

function Informacoes() {
  const [especialidade, setEspecialidade] = useState('');
  const [crm, setCrm] = useState('');
  const [dataInscricao, setDataInscricao] = useState('');
  const [rqe, setRqe] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Especialidade:', especialidade);
    console.log('CRM:', crm);
    console.log('Data de Inscrição:', dataInscricao);
    console.log('RQE:', rqe);
  };

  return (
    <>
    <div className='back'>
    <h2>QUASE LÁ!</h2>
    <h3>Responda as perguntas abaixo:</h3>
    <div className="medicoForm">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Especialidade:</label>
          <input
            type="text"
            value={especialidade}
            onChange={(e) => setEspecialidade(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Número do CRM:</label>
          <input
            type="text"
            value={crm}
            onChange={(e) => setCrm(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Data de Inscrição:</label>
          <input
            type="date"
            value={dataInscricao}
            onChange={(e) => setDataInscricao(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Número do RQE:</label>
          <input
            type="text"
            value={rqe}
            onChange={(e) => setRqe(e.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
    </div>
    </>
  );
}

export default Informacoes;
