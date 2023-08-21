import logoaplicativo from '../../assets/LogoAplicativo.jpg'

function Salvamento(){
    return(
        <>
        <img src={logoaplicativo} alt='Logo do Aplicativo' title='ImagemLogo'/>

        <div className='Salvas'>INFORMAÇÕES SALVAS</div>
        <div className='Veracidade'>Aguarde enquanto verificamos a veracidade das informações</div>
        <div className='Tempo'>Este processo pode demorar até três dias</div>
        </>
    )
}

export default Salvamento;