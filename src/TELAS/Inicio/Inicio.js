import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import logoaplicativo from '../../assets/LogoAplicativo.jpg';

 function Inicio() {
  return (
    <>
    <img src={logoaplicativo} alt='Logo do Aplicativo' title='ImagemLogo'/>
  
    <Stack spacing={2} direction="row">
      <Button variant="contained">ENTRAR</Button>
      <Button variant="contained">CADASTRAR</Button>
    </Stack>
    </>
  );
}

export default Inicio;