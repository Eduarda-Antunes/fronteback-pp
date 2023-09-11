import React from 'react';
import { Button } from '@chakra-ui/react'
import logoaplicativo from '../../assets/LogoAplicativo.jpg';
import '../Inicio/Inicio.css'

 function Inicio() {
  return (
    <>
    <img src={logoaplicativo} alt='Logo do Aplicativo' title='ImagemLogo'/>
  
    <div className='fundo'>

    <div><Button className='button'>ENTRAR</Button></div>
    <div><Button className='button2'>CADASTRAR</Button></div>
    </div>
    </>
  );
}

export default Inicio;