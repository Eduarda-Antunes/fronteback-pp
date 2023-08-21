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