import Link from "next/link";
import { 
    lista,
    item,
    link,
    nome,
    restricoes,
    restricao
} from "./styles.module.scss";
import Image from "next/image";

export default function ListaRestaurantes({ restaurantes }) {
    return(
        <ul className={ lista }>
            <li className={ item }>
                <Link href={ "" } className={ link }>
                    <Image width={10} height={15} src="/icons/favorito_desmarcado.svg" alt="Icone de favorito quando o restaurante ainda não foi favoritado."/>
                    <div className={ nome }>Nome do restaurante</div>
                    <div className={ restricoes }>
                        <div className={ restricao }>Sem lactose</div>
                        <div className={ restricao }>Low carb</div>
                    </div>
                </Link>
            </li>
        </ul>
    )
}



