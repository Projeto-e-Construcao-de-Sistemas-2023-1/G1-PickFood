import Image from "next/image";
import {
    divider,
    itens
} from "./styles.module.scss";
import Link from "next/link";
import ItemCardapioCliente from "./ItemCardapioCliente";

const CardapioCliente = ({ pratos }) => {

    

    return(
        <ul className={ itens }>
            {
                pratos?.map(prato => {
                    return(
                        <>
                            <ItemCardapioCliente prato={ prato } />
                            <div className={ divider }></div>
                        </>
                    )
                })
            }
            
        </ul>
    )
}

export default CardapioCliente;