import React from 'react';
import logoaplicativo from '../../assets/LogoAplicativo.jpg'
import { Button } from '@mui/material';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../TELAS/Recuperar/Recuperar.css'

function Recuperar (){
    return(
        <>
        <img src={logoaplicativo} alt='Logo do Aplicativo' title='ImagemLogo'/>

        <div className='TextRecup'>Recuperar senha</div>

        <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="on">
            <TextField id="outlined-basic" label="E-MAIL" variant="outlined" />
        </Box>

        <Stack spacing={2} direction="row">
             <Button variant="contained">ENVIAR</Button>
        </Stack>
        </>
    )
}

export default Recuperar;
