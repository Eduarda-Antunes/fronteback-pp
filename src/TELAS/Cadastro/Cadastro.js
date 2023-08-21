import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';

function Cadastro(){
    return(
    <>
    <div className="criar">Criar nova conta</div>
    <div className="registrado">Já sou cadastrado</div>

    <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="NOME" variant="outlined" />  
        <TextField id="outlined-basic" label="E-MAIL" variant="outlined" />
        <TextField id="outlined-basic" label="SENHA" variant="outlined" /> 
        <TextField id="outlined-basic" label="DATA DE NASCIMENTO" type="date"/> 
    </Box>

    <Stack spacing={2} direction="row">
        <Button variant="contained">CADASTRAR</Button>
    </Stack>

    <div className='preencher'>Preencha os campos acima para registrar-se</div>
    </>
    )
}

export default Cadastro;