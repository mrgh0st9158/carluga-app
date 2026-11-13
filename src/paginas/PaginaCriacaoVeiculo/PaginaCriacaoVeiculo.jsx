import { useEffect, useState } from "react";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaCriacaoVeiculo.css"
import { useNavigate, useParams } from "react-router-dom";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";

function PaginaCriacaoVeiculo() {
    const navigate = useNavigate()
    const [formVeiculo, setFormVeiculo] = useState({
        id: "",
        nome: "",
        email: "",
        dataNascimento: "",
        telefone: "",
        cpf: "",
    });

    const params = useParams();
    useEffect(() => {
        if (params.id) {
            const veiculoParaEditar = buscarVeiculos().find(
                (item) => item.id === +params.id,
            );
            if (veiculoParaEditar) {
                setFormVeiculo(veiculoParaEditar);
            }
        }
    }, [params.id]);

    const salvar = () => {
    if (!formVeiculo.nome.trim() || !formVeiculo.email.trim()) {
      toast.error("Os campos nome e email são obrigatórios!");
      return;
    }

    salvarVeiculo(formVeiculo);
    toast.success("Veículo salvo com sucesso!");
    navigate("/lista-veiculo");
  };

  const titulo = formVeiculo.id ? "Editar Veiculo" : "Novo Veiculo";

    return (
        <Principal titulo={titulo} voltarPara="/">
            <CampoCustomizado
                label="Modelo do Veículo"
                value={formVeiculo.nome}
                onChange={(e) =>
                    setFormVeiculo({...formVeiculo, nome: e.target.value})
                }
                maxLength={50}
            />

            <BotaoCustomizado tipo="primario" aoClicar={salvar}>
                Salvar
            </BotaoCustomizado>
        </Principal>
    )
}

export default PaginaCriacaoVeiculo;