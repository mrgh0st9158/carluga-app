import "./PaginaCadastroUsuário"
import Principal from "../../componentes/Principal/Principal"
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { salvarUsuario } from "../../servicos/usuarios-servico";
import { useState } from "react";
import { toast } from "react-toastify";

function PaginaCadastroUsuário() {
    const [formUsuario, setFormUsuario] = useState({
        id: "",
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
    })

    const salvar = () => {
        switch (true) {
            case !formUsuario.nome.trim():
                toast.error("O campo nome é obrigatório!");
                return;

            case !formUsuario.email.trim():
                toast.error("O campo email é obrigatório!");
                return;

            case !formUsuario.senha.trim():
                toast.error("O campo senha é obrigatório!");
                return;

            case !formUsuario.confirmarSenha.trim():
                toast.error("O campo confirmar senha é obrigatório!");
                return;
            default:
                break;
        }

        salvarUsuario(formUsuario)
        toast.success("Usuário criado com sucesso!");
        // navigate("/login");
    };

    return (
        <Principal titulo="Novo Usuário" voltarPara="/login">
            <CampoCustomizado
                label="Nome"
                type="text"
                onChange={(e) =>
                    setFormUsuario({ ...formUsuario, nome: e.target.value })
                } />

            <CampoCustomizado
                label="Email"
                type="text"
                onChange={(e) =>
                    setFormUsuario({ ...formUsuario, email: e.target.value })
                }
            />

            <CampoCustomizado
                label="Senha"
                type="text"
                onChange={(e) =>
                    setFormUsuario({ ...formUsuario, senha: e.target.value })
                }
            />

            <CampoCustomizado
                label="Confirmar Senha"
                type="text"
                onChange={(e) =>
                    setFormUsuario({ ...formUsuario, confirmarSenha: e.target.value })
                }
            />

            <BotaoCustomizado tipo="secundario" aoClicar={salvar}>
                Salvar
            </BotaoCustomizado>
        </Principal>
    )
}

export default PaginaCadastroUsuário;