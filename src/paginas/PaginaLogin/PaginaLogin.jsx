import "./PaginaLogin.css"
import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function PaginaLogin() {
    const navigate = useNavigate();
const [formLogin, setFormLogin] = useState({
    email: "",
    senha: "",
});

const entrar = () => {
    try{
        if(!formLogin.email || !formLogin.senha){
            throw new Error("Preencha todos os campos.")
        }
        loginUsuario(formLogin)
        navigate("/")
    }catch(error){
        toast.error
    }
}

    return (
        <Principal titulo="Login" >

            <img
                src="/logo.png"
                alt=""
                className="PaginaLogin_logo"
            />

            <h2 className="PaginaLogin_titulo">Login</h2>

            <CampoCustomizado label="Email" type="email" />
            <CampoCustomizado label="Senha" type="password" />

            <BotaoCustomizado tipo="primario">
                Entrar
            </BotaoCustomizado>

            <span className="PaginaLogin_linkCadastro">
                Não tem uma conta?
                <a href="/cadastro-usuario">Cadastre-se</a>
            </span>
        </Principal>
    )
}

export default PaginaLogin;