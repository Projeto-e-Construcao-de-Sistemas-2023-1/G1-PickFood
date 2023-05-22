import Link from "next/link";
import { 
    lista,
    item,
    link,
    nome,
    restricoes
} from "./styles.module.scss";

export default function ListaRestaurantes({ children }) {
    return(
        <ul className={ lista }>{ children }</ul>
    )
}

ListaRestaurantes.Item = function ListaRestaurantes({ href, children }) {
    return(
        <li className={ item }>
            <Link className={ link } href={ href }>{ children }</Link>
        </li>
    )
}

ListaRestaurantes.Nome = function ListaRestaurantesNome({ children }) {
    return(
        <div className={ nome }>{ children }</div>
    )
}

ListaRestaurantes.Restricoes = function ListaRestaurantesRestricoes({ children }) {
    return(
        <div className={ restricoes }>{ children }</div>
    )
}

ListaRestaurantes.Restricao = function ListaRestaurantesRestricao({ children }) {
    return(
        <div className={ restricoes }>{ children }</div>
    )
}



