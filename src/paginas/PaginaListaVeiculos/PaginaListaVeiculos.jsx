import "./PaginaListaVeiculos.css"
import Principal from "../../componentes/Principal/Principal";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { buscarVeiculos } from "../../servicos/veiculos-servico";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";

function PaginaListaVeiculos() {
    const navigate = useNavigate();
    const [clientes, setClientes] = useState(buscarVeiculos());
    const [termoPesquisa, setTermoPesquisa] = useState("");

    const clientesFiltrados = clientes.filter((item) => {
        return item.modelo.toLowerCase().includes(termoPesquisa.toLowerCase());
    })

    return (
        <Principal titulo="Lista de Veículos" voltarPara="/">
            <CampoCustomizado
                type="search"
                label="Pesquisar"
                placeholder="Digite o modelo do veículo"
                value={termoPesquisa}
                onChange={(e) => setTermoPesquisa(e.target.value)}
            />

            {clientesFiltrados.map((item, index) => {
                return(

                    <div key={index} className="PaginaListaVeiculos_item">
                    <div>
                        <h3>{item.modelo}</h3>
                        <span className="PaginaListaVeiculos_modelo">
                            {item.modelo}
                        </span>
                    </div>
                </div>
                );
            })}
        </Principal>
    )
}

export default PaginaListaVeiculos;