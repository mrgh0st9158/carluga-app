import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import PaginaCriacaoVeiculo from "./paginas/PaginaCriacaoVeiculo/PaginaCriacaoVeiculo";
import PaginaListaVeiculos from "./paginas/PaginaListaVeiculos/PaginaListaVeiculos";
import PaginaCadastroUsuário from "./paginas/PaginaCadastroUsuário/PaginaCadastroUsuário";
import PaginaLogin from "./paginas/PaginaLogin/PaginaLogin";
import ValidarAutenticacao from "./ValidarAutenticação";

const roteador = createBrowserRouter([
    {
        path: "login",
        element: <PaginaLogin />
    },
    {
        path: "cadastro-usuario",
        element: <PaginaCadastroUsuário />
    },
    {
        path: "",
        element: <ValidarAutenticacao />,
        children: [
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
        ]
    },

])

function Roteador() {
    return (
        <RouterProvider router={roteador} />
    )
}

export default Roteador;