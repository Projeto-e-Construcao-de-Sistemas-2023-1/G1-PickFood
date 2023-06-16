import Link from "next/link";
import { 
    lista,
    
} from "./styles.module.scss";
import ItemListaRestaurantes from "./ItemListaRestaurantes";

export default function ListaRestaurantes({ restaurantes }) {

    return(
        <ul className={ lista }>
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



