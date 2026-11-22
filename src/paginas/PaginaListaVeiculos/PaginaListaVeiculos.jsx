import "./PaginaListaVeiculos.css"
import Principal from "../../componentes/Principal/Principal";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { buscarVeiculos } from "../../servicos/veiculos-servico";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";

import { BsSliders } from "react-icons/bs";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { salvarNoLocalStorage } from "../../servicos/localstorage-servico";
import { toast } from "react-toastify";

function PaginaListaVeiculos() {
    const navigate = useNavigate();
    const [veiculos, setVeiculos] = useState(buscarVeiculos());
    const [termoPesquisa, setTermoPesquisa] = useState("");
    const [termoAplicado, setTermoAplicado] = useState("");

    const veiculosFiltrados = veiculos.filter((item) => {
        return item.modelo.toLowerCase().includes(termoAplicado.toLowerCase());
    })

    const excluirVeiculo = (veiculoParaExcluir) => {
        if (confirm(`Deseja excluir o veículo:  ${veiculoParaExcluir.modelo} de placa ${veiculoParaExcluir.placa}?`)){
            const veiculosAtualizados = veiculos.filter(
                (item) => item.id !== veiculoParaExcluir.id
            );

            setVeiculos(veiculosAtualizados);
            salvarNoLocalStorage("veiculos", veiculosAtualizados);
            toast.success("Veículo excluído com sucesso!")
        }
    }

    const editarVeiculo = (veiculoParaEditar) => {
        navigate("/criacao-veiculo/" + veiculoParaEditar.id)
    }

    return (
        <Principal titulo="Lista de Veículos" voltarPara="/">
            <div className="container_barraDePesquisa">

                <div className="barraPesquisa_campo">

                    <CampoCustomizado
                        type="search"
                        label="Pesquisar"
                        placeholder="Digite o modelo do veículo"
                        value={termoPesquisa}
                        onChange={(e) => setTermoPesquisa(e.target.value)}
                    />
                </div>


                <BotaoCustomizado tipo="primario" aoClicar={() => setTermoAplicado(termoPesquisa)}>
                    Pesquisar
                </BotaoCustomizado>

                <BsSliders size={30} />

            </div>

            {veiculosFiltrados.map((item, index) => {
                return (

                    <div key={index} className="PaginaListaVeiculos_item">
                        <div>
                            <h3>{item.modelo}</h3>
                            <span className="PaginaListaVeiculos_modelo">
                                {item.placa.toUpperCase()}
                            </span>
                        </div>

                        <div className="PaginaListaVeiculos_botoesItem">
                            <BiSolidPencil size={22} onClick={() => editarVeiculo(item)}/>

                            <FaTrashAlt size={22} color="red" onClick={() => excluirVeiculo(item)}/>
                        </div>
                    </div>
                );
            })}
        </Principal>
    )
}

export default PaginaListaVeiculos;