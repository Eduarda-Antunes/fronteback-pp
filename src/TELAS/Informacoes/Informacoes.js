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