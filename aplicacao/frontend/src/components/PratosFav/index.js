import Link from "next/link";
import { 
    lista,
} from "./styles.module.scss";
import PratoFav from "./PratosFav";

export default function PratosFavs({ pratos }) {

    return(
        <ul className={ lista }>
            {
                pratos?.map(prato => {
                    return(
                        <PratoFav key={ prato.id } prato={ prato }/>
                    )
                })
            }
                        
        </ul>
    )
}