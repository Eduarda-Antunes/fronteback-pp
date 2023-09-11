<<<<<<< HEAD
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
=======
import React from 'react';
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from '@mui/material';
import { Stack } from '@mui/material';

function Informações(){
    return(
        <>
        <div className="Texto1">QUASE LÁ!</div>
        <div className="MiniTexto">Responda as perguntas abaixo</div>

        
    <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="ESPECIALIDADE" variant="outlined" />  
        <TextField id="outlined-basic" label="NÚMERO DO CRM" variant="outlined" />
        <TextField id="outlined-basic" label="DATA DE INSCRIÇÃO" type="date"/> 
        <TextField id="outlined-basic" label="NÚMERO DO RQE" variant="outlined" />
    </Box>

    <Stack spacing={2} direction="row">
        <Button variant="contained">VAMOS</Button>
    </Stack>

        </>
    )
}

export default Informações;
>>>>>>> 10eaba776ab34084a661621861719b0539d1f35a
