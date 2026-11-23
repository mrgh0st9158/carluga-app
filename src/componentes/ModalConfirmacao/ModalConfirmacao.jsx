
import "./ModalConfirmacao.css";

function ModalConfirmacao(props) {
    return (
        <div className="ModalConfirmacao_overlay">
            <div className="ModalConfirmacao_card">

                <h2>{props.titulo}</h2>

                <p>{props.mensagem}</p>

                <div className="ModalConfirmacao_botoes">
                    <button className="botao_cancelar" onClick={props.aoCancelar}>
                        Cancelar
                    </button>

                    <button className="botao_excluir" onClick={props.aoConfirmar}>
                        Excluir
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ModalConfirmacao;
