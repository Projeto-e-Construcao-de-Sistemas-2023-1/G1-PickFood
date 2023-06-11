import styles from "./styles.module.scss"
import Image from "next/image";

import {
    lista,
    texto,
    foto,
    preco
} from "./styles.module.scss"

export default function CardapioPreview({ pratos }) {
    return(
        <ul className= {lista}>

            {
                pratos.map(prato => {

                    return(
                        <li className={texto} key={ prato.id }>
                            <Image className={foto}
                                src="/icons/foto.svg"
                                width={ 21 }
                                height={ 21 }
                                alt="Icone de seta apontando para trás."
                            />
                            <p>{ prato.nome }</p>
                            <div className={ preco }>{ prato.preco }</div>
                        </li>
                )
                })
            }
            
        </ul>
    )
}