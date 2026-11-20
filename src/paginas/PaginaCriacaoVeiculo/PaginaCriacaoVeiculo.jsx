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
        //A COMPLETAR...
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
        // if (!formVeiculo.nome.trim() || !formVeiculo.email.trim()) {
        //   toast.error("Os campos nome e email são obrigatórios!");
        //   return;
        // }

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
                    setFormVeiculo({ ...formVeiculo, nome: e.target.value })
                }
                maxLength={50}
            />

            <CampoCustomizado
                label="Ano do Veículo"
                value={formVeiculo.ano}
                onChange={(e) =>
                    setFormVeiculo({ ...formVeiculo, ano: e.target.value })
                }
                maxLength={4}
            />

            <CampoCustomizado
                label="Descrição do Anúncio"
                value={formVeiculo.descricao}
                onChange={(e) =>
                    setFormVeiculo({ ...formVeiculo, descricao: e.target.value })
                }
                maxLength={300}



            />

            <div className="campo-seguro">
                <span>O veículo possui seguro?</span>

                <div className="opcoes-radio">
                    <CampoCustomizado
                        type="radio"
                        name="seguro"
                        value="sim"
                        checked={formVeiculo.seguro === "sim"}
                        onChange={(e) =>
                            setFormVeiculo({
                                ...formVeiculo,
                                seguro: e.target.value
                            })
                        }
                    />
                    Sim

                    <CampoCustomizado
                        type="radio"
                        name="seguro"
                        value="nao"
                        checked={formVeiculo.seguro === "nao"}
                        onChange={(e) =>
                            setFormVeiculo({
                                ...formVeiculo,
                                seguro: e.target.value
                            })
                        }
                    />

                    Não

                </div>
            </div>

            <div className="campo-seguro">
                <span>O veículo possui limite de KMs?</span>

                <div className="opcoes-radio">
                    <CampoCustomizado
                        type="radio"
                        name="limiteKm"
                        value="sim"
                        checked={formVeiculo.limiteKm === "sim"}
                        onChange={(e) =>
                            setFormVeiculo({
                                ...formVeiculo,
                                limiteKm: e.target.value
                            })
                        }
                    />
                    Sim

                    <CampoCustomizado
                        type="radio"
                        name="limiteKm"
                        value="nao"
                        checked={formVeiculo.limiteKm === "nao"}
                        onChange={(e) =>
                            setFormVeiculo({
                                ...formVeiculo,
                                limiteKm: e.target.value
                            })
                        }
                    />
                    Não
                </div>
            </div>

            <CampoCustomizado
                label="Valor do Veículo"
                value={formVeiculo.valorVeiculo}
                onChange={(e) =>
                    setFormVeiculo({ ...formVeiculo, valorVeiculo: e.target.value })
                }

            />

            <BotaoCustomizado tipo="primario" aoClicar={salvar}>
                Salvar
            </BotaoCustomizado>
        </Principal>
    )
}

export default PaginaCriacaoVeiculo;