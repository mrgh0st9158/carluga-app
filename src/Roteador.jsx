import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import PaginaCriacaoVeiculo from "./paginas/PaginaCriacaoVeiculo/PaginaCriacaoVeiculo";
import PaginaListaVeiculos from "./paginas/PaginaListaVeiculos/PaginaListaVeiculos";
import PaginaCadastroUsuário from "./paginas/PaginaCadastroUsuário/PaginaCadastroUsuário";
import PaginaLogin from "./paginas/PaginaLogin/PaginaLogin";

const roteador = createBrowserRouter([
    {
        path: "",
        element: <PaginaInicial />
    },
    {
        path: "login",
        element: <PaginaLogin />
    },
    {
        path: "cadastro-usuario",
        element: <PaginaCadastroUsuário />
    },
    {
        path: "criacao-veiculo/:id?",
        element: <PaginaCriacaoVeiculo /> 
    },
    {
        path: "lista-veiculos",
        element: <PaginaListaVeiculos />
    },
    

])

function Roteador(){
    return(
        <RouterProvider router={roteador} />
    )
}

export default Roteador;