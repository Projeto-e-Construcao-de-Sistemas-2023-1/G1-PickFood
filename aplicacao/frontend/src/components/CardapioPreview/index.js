import styles from "./styles.module.scss"
import Image from "next/image";

import {
    lista,
    texto,
    foto,
    preco
} from "./styles.module.scss"

export default function CardapioPreview() {
    return(
        <ul className= {lista}>
            <li className={texto}>
                <Image className={foto}
                    src="/icons/foto.svg"
                    width={ 21 }
                    height={ 21 }
                    alt="Icone de seta apontando para trás."
                />
            Nome do prato<div className={ preco }>R$ 99,99</div></li>

            <li className={texto}>
                <Image className={foto}
                    src="/icons/foto.svg"
                    width={ 21 }
                    height={ 21 }
                    alt="Icone de seta apontando para trás."
                />
            Nome do prato<div className={ preco }>R$ 99,99</div></li>

            <li className={texto}>
                <Image className={foto}
                    src="/icons/foto.svg"
                    width={ 21 }
                    height={ 21 }
                    alt="Icone de seta apontando para trás."
                />
            Nome do prato<div className={ preco }>R$ 99,99</div></li>

            <li className={texto}>
                <Image className={foto}
                    src="/icons/foto.svg"
                    width={ 21 }
                    height={ 21 }
                    alt="Icone de seta apontando para trás."
                />
            Nome do prato<div className={ preco }>R$ 99,99</div></li>

            <li className={texto}>
                <Image className={foto}
                    src="/icons/foto.svg"
                    width={ 21 }
                    height={ 21 }
                    alt="Icone de seta apontando para trás."
                />
            Nome do prato<div className={ preco }>R$ 99,99</div></li>

            <li className={texto}>
                <Image className={foto}
                    src="/icons/foto.svg"
                    width={ 21 }
                    height={ 21 }
                    alt="Icone de seta apontando para trás."
                />
            Nome do prato<div className={ preco }>R$ 99,99</div></li>
        </ul>
    )
}