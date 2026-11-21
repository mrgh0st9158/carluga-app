import { buscarNoLocalStorage, salvarNoLocalStorage } from "./localstorage-servico";

export const salvarVeiculo = (veiculo) => {
  const veiculos = buscarNoLocalStorage("veiculo") || [];
  if (!veiculo.id) {
    // inclusão de novo veiculo
    veiculo.id = Date.now();
    veiculos.push(veiculo);
  } else {
    // edição de veiculo existente
    const index = veiculos.findIndex((c) => c.id === veiculo.id);
    veiculos[index] = veiculo;
  }
  
  salvarNoLocalStorage("veiculos", veiculos);
};

export const buscarVeiculos = () => {
  return buscarNoLocalStorage("veiculos") || [];
};
