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


