import Principal from "../../componentes/Principal/Principal";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";

import { useNavigate } from "react-router-dom";

function PaginaInicial(){
    const navigate = useNavigate()

    return(
        <Principal titulo="Página Inicial">
            <BotaoCustomizado
            tipo="primario"
            aoClicar={() => navigate("/criacao-veiculo")}>
            
             Criação de Veículo
            </BotaoCustomizado>

        </Principal>
    )
}

export default PaginaInicial;