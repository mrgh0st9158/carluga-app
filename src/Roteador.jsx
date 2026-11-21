import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import PaginaCriacaoVeiculo from "./paginas/PaginaCriacaoVeiculo/PaginaCriacaoVeiculo";
import PaginaListaVeiculos from "./paginas/PaginaListaVeiculos/PaginaListaVeiculos";

const roteador = createBrowserRouter([
    {
        path: "",
        element: <PaginaInicial />
    },
    {
        path: "criacao-veiculo",
        element: <PaginaCriacaoVeiculo /> 
    },
    {
        path: "lista-veiculos",
        element: <PaginaListaVeiculos />
    }

])

function Roteador(){
    return(
        <RouterProvider router={roteador} />
    )
}

export default Roteador;