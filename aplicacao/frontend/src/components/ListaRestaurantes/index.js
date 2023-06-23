import Link from "next/link";
import { 
    lista,
    
} from "./styles.module.scss";
import ItemListaRestaurantes from "./ItemListaRestaurantes";

export default function ListaRestaurantes({ restaurantes, ...restProps }) {

    return(
        <ul className={ lista } { ...restProps }>
            {
                restaurantes?.map(restaurante => {
                    return(
                        <ItemListaRestaurantes key={ restaurante.id } restaurante={ restaurante }/>
                    )
                })
            }
                        
        </ul>
    )
}



