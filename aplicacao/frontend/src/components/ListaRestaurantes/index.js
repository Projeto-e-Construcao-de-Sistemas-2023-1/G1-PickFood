import Link from "next/link";
import { 
    lista,
    item,
    link,
    favorito,
    info,
    nome,
    restricoes,
    restricao,
    estrelas,
    estrela
} from "./styles.module.scss";
import Image from "next/image";

export default function ListaRestaurantes({ restaurantes }) {

    return(
        <ul className={ lista }>
            

            {
                restaurantes?.map(restaurante => {
                    return(
                        <li className={ item } key={ restaurante.id }>
                            <Link href={ "" } className={ link }>
                                <Image className={ favorito } width={10} height={15} src="/icons/favorito_desmarcado.svg" alt="Icone de favorito quando o restaurante ainda não foi favoritado."/>
                                <div className={ info }>
                                    <div className={ nome }>{ restaurante.nome_fantasia  }</div>
                                    <div className={ restricoes }>
                                        <div className={ restricao }>Sem lactose</div>
                                        <div className={ restricao }>Low carb</div>
                                    </div>
                                </div>
                                <div className={ estrelas }>
                                    <Image className={ estrela } src="/icons/estrela.svg" width={10} height={10} alt="Estrela de avaliaçao"/>
                                    <Image className={ estrela } src="/icons/estrela.svg" width={10} height={10} alt="Estrela de avaliaçao"/>
                                    <Image className={ estrela } src="/icons/estrela.svg" width={10} height={10} alt="Estrela de avaliaçao"/>
                                    <Image className={ estrela } src="/icons/estrela.svg" width={10} height={10} alt="Estrela de avaliaçao"/>
                                </div>
                            </Link>
                        </li>
                    )
                })
            }
                        
                    
                
            
            
            
        </ul>
    )
}



