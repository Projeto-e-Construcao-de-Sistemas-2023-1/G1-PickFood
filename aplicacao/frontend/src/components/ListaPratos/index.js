import Link from "next/link";
import { 
    lista,
    
} from "./styles.module.scss";
import ItemListaPratos from "./ItemListaPratos";

export default function ListaPratos({ pratos }) {

    return(
        <ul className={ lista }>
            {
                pratos?.map(prato => {
                    return(
                        <ItemListaPratos key={ prato.id } prato={ prato }/>
                    )
                })
            }
                        
        </ul>
    )
}



