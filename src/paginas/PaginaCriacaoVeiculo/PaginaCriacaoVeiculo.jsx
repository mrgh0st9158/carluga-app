import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

import "./PaginaCriacaoVeiculo.css"
import Principal from "../../componentes/Principal/Principal";
import { salvarVeiculo, buscarVeiculos } from "../../servicos/veiculos-servico";

import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";

function PaginaCriacaoVeiculo() {
    const navigate = useNavigate()
    const [formVeiculo, setFormVeiculo] = useState({
        id: "",
        modelo: "",
        ano: "",
        placa: "",
        descricao: "",
        seguro: "",
        limiteKm: "",
        valorVeiculo: "",

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
        switch (true) {
            case !formVeiculo.modelo.trim():
                    toast.error("O campo modelo é obrigatório!");
                return;

            case !formVeiculo.ano.trim():
                toast.error("O campo ano é obrigatório!");
                return;

            case !formVeiculo.placa.trim():
                toast.error("O campo placa do veículo é obrigatório!");
                return;

            case !formVeiculo.descricao.trim():
                toast.error("O campo descrição é obrigatório!");
                return;

            case !formVeiculo.seguro.trim():
                toast.error("O campo seguro é obrigatório!");
                return;

            case !formVeiculo.limiteKm.trim():
                toast.error("O campo limite de KMs é obrigatório!");
                return;

            case !formVeiculo.valorVeiculo.trim():
                toast.error("O campo valor do veículo é obrigatório!");
                return;
            
            default:
                break;
        }
        
        salvarVeiculo(formVeiculo);
        toast.success("Veículo salvo com sucesso!");
        navigate("/lista-veiculos");
    };

    const titulo = formVeiculo.id ? "Editar Veiculo" : "Novo Veiculo";

    return (
        <Principal titulo={titulo} voltarPara="/">
            <CampoCustomizado
                label="Modelo do Veículo"
                value={formVeiculo.modelo}
                onChange={(e) =>
                    setFormVeiculo({ ...formVeiculo, modelo: e.target.value })
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
                label="Placa do Veículo"
                value={formVeiculo.placa}
                onChange={(e) =>
                    setFormVeiculo({ ...formVeiculo, placa: e.target.value })
                }
                maxLength={7}
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

            <div className="container_imagem">

                <CampoCustomizado
                    type="file"
                    accept="image/*"
                    label="Foto do Veículo"
                    onChange={(e) => {
                        const imagem = e.target.files[0];
                        if (imagem) {
                            const reader = new FileReader();
                            reader.onload = (event) => {
                                setFormVeiculo({ ...formVeiculo, foto: event.target.result });
                            };
                            reader.readAsDataURL(imagem);
                        }
                    }}
                />
            </div>

            {formVeiculo.foto && (
                <div className="containerImagemVeiculo">
                    <img
                        src={formVeiculo.foto}
                        alt="Foto do Veiculo"
                        style={{
                            width: "200px",
                            height: "200px",
                            objectFit: "cover",
                            borderRadius: "8px",
                        }}
                    />
                </div>
            )}

            <BotaoCustomizado tipo="primario" aoClicar={salvar}>
                Salvar
            </BotaoCustomizado>
        </Principal>
    )
}

export default PaginaCriacaoVeiculo;