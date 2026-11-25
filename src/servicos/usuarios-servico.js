import { buscarNoLocalStorage, salvarNoLocalStorage } from "./localstorage-servico";

export const salvarUsuario = (usuario) => {
    const usuarios = buscarNoLocalStorage("usuarios") || [];

    usuario.id = Date.now();
    usuarios.push(usuario);
    salvarNoLocalStorage("usuarios", usuarios);
};

export const buscarUsuarios = () => {
    return buscarNoLocalStorage("usuarios") || [];
};