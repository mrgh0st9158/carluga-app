import { buscarNoLocalStorage, salvarNoLocalStorage } from "./localstorage-servico";

export const salvarModelo = (modelo) => {
  const modelo = buscarNoLocalStorage("modelo") || [];
  if (!modelo.id) {
    // inclusão de novo modelo
    modelo.id = Date.now();
    modelo.push(modelo);
  } else {
    // edição de modelo existente
    const index = modelo.findIndex((c) => c.id === modelo.id);
    modelo[index] = modelo;
  }
  
  salvarNoLocalStorage("modelos", modelos);
};

export const buscarModelos = () => {
  return buscarNoLocalStorage("modelos") || [];
};
