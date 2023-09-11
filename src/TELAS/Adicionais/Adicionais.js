<<<<<<< HEAD
import React from 'react';
import logoaplicativo from '../../assets/LogoAplicativo.jpg'
import '../Adicionais/Adicionais.css'
import { Button } from '@chakra-ui/react';

 function Adicionais() {
  return (
    <>
    <img src={logoaplicativo} alt='Logo do Aplicativo' title='ImagemLogo'/>
  
    <div className='fundo'>
    <div className='textInfos'>INFORMAÇÕES ADICIONAIS</div>
    <div className='container'>
    <div className='textLi'>QUEM USARÁ ESTE PERFIL?</div>
    <Button className='button3'>MÉDICO</Button>
    <Button className='button4'>PACIENTE</Button>
    </div>
    </div>
    </>
  );
}

export default Adicionais;
=======
import logoaplicativo from '../../assets/LogoAplicativo.jpg'
import { Button } from '@mui/material';
import { Stack } from '@mui/material';

function Adicionais(){
    return(
        <>
        <img src={logoaplicativo} alt='Logo do Aplicativo' title='ImagemLogo'/>

        <div className='TextoAdicional'>INFORMAÇÕES ADICIONAIS</div>
        <div className='UsuarioPerfil'>QUEM USARÁ ESTE PERFIL?</div>

        <Stack spacing={2} direction="row">
            <Button variant="contained">MÉDICO</Button>
            <Button variant="contained">PACIENTE</Button>
        </Stack>

        </>
    )
}

export default Adicionais; 
>>>>>>> 10eaba776ab34084a661621861719b0539d1f35a
