import "./CampoCustomizado.css";

function CampoCustomizado(props) {
    return (
        <div className="CampoCustomizado_root">
            <span>{props.label}</span>
            <div className="container_iconeInput">
                {props.icone}
                {props.rows && <textarea {...props} className="CampoCustomizado_input" />}
                {!props.rows && <input {...props} className="CampoCustomizado_input" />}
            </div>
        </div>
    )
};

export default CampoCustomizado;