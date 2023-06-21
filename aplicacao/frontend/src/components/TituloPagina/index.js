import {
    titulo
} from "./styles.module.scss";

const TituloPagina = ({ children, className = "", textAlign = "start", ...restProps }) => {
    return(
        <h1 className={ [titulo, className].join(" ") } style={{ textAlign }} { ...restProps }>
            { children }
        </h1>
    )
}

export default TituloPagina;