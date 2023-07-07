import Link from "next/link";
import { 
    lista,
    
} from "./styles.module.scss";
import ItemListaPratos from "./ItemListaPratos";

export default function ListaPratos({ pratos, ...restProps }) {

    return(
        <ul className={ lista } { ...restProps }>
            {
                pratos?.map(prato => {
                    return(
                        <ItemListaPratos key={ prato?.id } prato={ prato }/>
                    )
                })
            }
                        
        </ul>
    )
}



