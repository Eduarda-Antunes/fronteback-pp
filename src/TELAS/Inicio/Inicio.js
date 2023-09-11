import React from 'react';
<<<<<<< HEAD
import { Button } from '@chakra-ui/react'
import logoaplicativo from '../../assets/LogoAplicativo.jpg';
import '../Inicio/Inicio.css'
=======
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import logoaplicativo from '../../assets/LogoAplicativo.jpg';
>>>>>>> 10eaba776ab34084a661621861719b0539d1f35a

 function Inicio() {
  return (
    <>
    <img src={logoaplicativo} alt='Logo do Aplicativo' title='ImagemLogo'/>
  
<<<<<<< HEAD
    <div className='fundo'>

    <div><Button className='button'>ENTRAR</Button></div>
    <div><Button className='button2'>CADASTRAR</Button></div>
    </div>
=======
    <Stack spacing={2} direction="row">
      <Button variant="contained">ENTRAR</Button>
      <Button variant="contained">CADASTRAR</Button>
    </Stack>
>>>>>>> 10eaba776ab34084a661621861719b0539d1f35a
    </>
  );
}

export default Inicio;