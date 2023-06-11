import {
    titulo
} from "./styles.module.scss";

const TituloPagina = ({ children, className = "", ...restProps }) => {
    return(
        <h1 className={ [titulo, className].join(" ") }>
            { children }
        </h1>
    )
}

export default TituloPagina;