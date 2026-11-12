import { useEffect, useState } from "react";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaCriacaoVeiculo.css"

function PaginaCriacaoVeiculo() {
    return (
        <Principal titulo="Criação de Veículos">
            <CampoCustomizado
            label="Modelo do Veículo" 
            >

            </CampoCustomizado>
        </Principal>
    )
}

export default PaginaCriacaoVeiculo;