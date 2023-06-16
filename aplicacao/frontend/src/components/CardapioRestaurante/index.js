import styles from "./styles.module.scss"
import Image from "next/image";
import Link from "next/link";

import {
    lista
} from "./styles.module.scss"
import ItemCardapioRestaurante from "./ItemCardapioRestaurante";

export default function CardapioRestaurante({ pratos }) {

    return(
        <ul className= {lista}>
            {
                pratos?.map(prato => {
                    return(
                        <ItemCardapioRestaurante key={ prato.id } prato={ prato } />
                    )
                })    
            }  
        </ul>
    )
}