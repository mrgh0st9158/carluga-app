import { Link } from "react-router-dom";
import "./Principal.css";
import BotaoCustomizado from "../BotaoCustomizado/BotaoCustomizado";

function Principal(props) {
    return (
        <main className="Principal_root">
            <div className="Principal_titulo">
                {props.voltarPara && (
                    <Link to={props.voltarPara}>
                        <BotaoCustomizado tipo="voltar">
                            Voltar
                        </BotaoCustomizado>
                    </Link>
                )}


                <h2>{props.titulo}</h2>

            </div>

            {props.children}
        </main>
    )
}

export default Principal;