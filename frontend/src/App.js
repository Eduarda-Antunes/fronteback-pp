import Inicio from "./TELAS/Inicio/Inicio";
import { ChakraProvider } from "@chakra-ui/react";
import Login from '../src/TELAS/Login/Login'
import Recuperar from "./TELAS/Recuperar/Recuperar";
import Cadastro from "./TELAS/Cadastro/Cadastro";
import Adicionais from "./TELAS/Adicionais/Adicionais";
import Informações from "./TELAS/Informacoes/Informacoes";
import Salvamento from "./TELAS/Salvamento/Salvamento";
import Conexão from "./TELAS/Conexao/Conexao";
import Home from "./TELAS/Home/Home";
import Chat from "./TELAS/Chat/Chat";
import './App.css'


function App(){
    return(
        <>
        {/* <Inicio/> */}
        {/* <Login/> */}
        {/* <Recuperar/> */}
        <Cadastro/>
        {/* <Adicionais/> */}
        {/* <Informações/> */}
        {/* <Salvamento/> */}
        {/* <Conexão/> */}
        {/* <Home/> */}
        {/* <Chat/> */}
        </>
    )
}

export default App; 