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