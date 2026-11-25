import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import PaginaCriacaoVeiculo from "./paginas/PaginaCriacaoVeiculo/PaginaCriacaoVeiculo";
import PaginaListaVeiculos from "./paginas/PaginaListaVeiculos/PaginaListaVeiculos";
import PaginaCadastroUsuário from "./paginas/PaginaCadastroUsuário/PaginaCadastroUsuário";

const roteador = createBrowserRouter([
    {
        path: "",
        element: <PaginaInicial />
    },
    {
        path: "criacao-veiculo/:id?",
        element: <PaginaCriacaoVeiculo /> 
    },
    {
        path: "lista-veiculos",
        element: <PaginaListaVeiculos />
    },
    {
        path: "cadastro-usuario",
        element: <PaginaCadastroUsuário />
    }

])

function Roteador(){
    return(
        <RouterProvider router={roteador} />
    )
}

export default Roteador;