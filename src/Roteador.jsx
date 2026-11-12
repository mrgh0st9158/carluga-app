import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import PaginaCriacaoVeiculo from "./paginas/PaginaCriacaoVeiculo/PaginaCriacaoVeiculo";

const roteador = createBrowserRouter([
    {
        path: "",
        element: <PaginaInicial />
    },
    {
        path: "criacao-veiculo",
        element: <PaginaCriacaoVeiculo /> 
    }

])

function Roteador(){
    return(
        <RouterProvider router={roteador} />
    )
}

export default Roteador;