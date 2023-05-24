import styles from "./styles.module.scss"
import Image from "next/image";

import {
    lista,
    texto,
    foto,
    editar,
    lixo,
    preco,
    nome
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
                <div className={ nome }>Nome do prato
                <div className={ preco }>R$ 99,99</div>
                </div>
                <Image
                    src="/icons/editar.svg"
                    className={ editar }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
                />
                <Image
                    src="/icons/lixo.svg"
                    className={ lixo }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
            /></li>

            <li className={texto}>
                <Image className={foto}
                    src="/icons/foto.svg"
                    width={ 21 }
                    height={ 21 }
                    alt="Icone de seta apontando para trás."
                />
                <div className={ nome }>Nome do prato
                <div className={ preco }>R$ 99,99</div>
                </div>
                <Image
                    src="/icons/editar.svg"
                    className={ editar }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
                />
                <Image
                    src="/icons/lixo.svg"
                    className={ lixo }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
            /></li>

            <li className={texto}>
                <Image className={foto}
                    src="/icons/foto.svg"
                    width={ 21 }
                    height={ 21 }
                    alt="Icone de seta apontando para trás."
                />
                <div className={ nome }>Nome do prato
                <div className={ preco }>R$ 99,99</div>
                </div>
                <Image
                    src="/icons/editar.svg"
                    className={ editar }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
                />
                <Image
                    src="/icons/lixo.svg"
                    className={ lixo }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
            /></li>

            <li className={texto}>
                <Image className={foto}
                    src="/icons/foto.svg"
                    width={ 21 }
                    height={ 21 }
                    alt="Icone de seta apontando para trás."
                />
                <div className={ nome }>Nome do prato
                <div className={ preco }>R$ 99,99</div>
                </div>
                <Image
                    src="/icons/editar.svg"
                    className={ editar }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
                />
                <Image
                    src="/icons/lixo.svg"
                    className={ lixo }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
            /></li>

            <li className={texto}>
                <Image className={foto}
                    src="/icons/foto.svg"
                    width={ 21 }
                    height={ 21 }
                    alt="Icone de seta apontando para trás."
                />
                <div className={ nome }>Nome do prato
                <div className={ preco }>R$ 99,99</div>
                </div>
                <Image
                    src="/icons/editar.svg"
                    className={ editar }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
                /> 
                <Image
                    src="/icons/lixo.svg"
                    className={ lixo }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
            /></li>

            <li className={texto}>
                <Image className={foto}
                    src="/icons/foto.svg"
                    width={ 21 }
                    height={ 21 }
                    alt="Icone de seta apontando para trás."
                />
                <div className={ nome }>Nome do prato
                <div className={ preco }>R$ 99,99</div>
                </div>
                <Image
                    src="/icons/editar.svg"
                    className={ editar }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
                />
                <Image
                    src="/icons/lixo.svg"
                    className={ lixo }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
            /></li>

            <li className={texto}>
                <Image className={foto}
                    src="/icons/foto.svg"
                    width={ 21 }
                    height={ 21 }
                    alt="Icone de seta apontando para trás."
                />
                <div className={ nome }>Nome do prato
                <div className={ preco }>R$ 99,99</div>
                </div>
                <Image
                    src="/icons/editar.svg"
                    className={ editar }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
                />
                <Image
                    src="/icons/lixo.svg"
                    className={ lixo }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
            /></li>

            <li className={texto}>
                <Image className={foto}
                    src="/icons/foto.svg"
                    width={ 21 }
                    height={ 21 }
                    alt="Icone de seta apontando para trás."
                />
                <div className={ nome }>Nome do prato
                <div className={ preco }>R$ 99,99</div>
                </div>
                <Image
                    src="/icons/editar.svg"
                    className={ editar }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
                />
                <Image
                    src="/icons/lixo.svg"
                    className={ lixo }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
            /></li>

            <li className={texto}>
                <Image className={foto}
                    src="/icons/foto.svg"
                    width={ 21 }
                    height={ 21 }
                    alt="Icone de seta apontando para trás."
                />
                <div className={ nome }>Nome do prato
                <div className={ preco }>R$ 99,99</div>
                </div>
                <Image
                    src="/icons/editar.svg"
                    className={ editar }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
                />
                <Image
                    src="/icons/lixo.svg"
                    className={ lixo }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
            /></li>

            <li className={texto}>
                <Image className={foto}
                    src="/icons/foto.svg"
                    width={ 21 }
                    height={ 21 }
                    alt="Icone de seta apontando para trás."
                />
                <div className={ nome }>Nome do prato
                <div className={ preco }>R$ 99,99</div>
                </div>
                <Image
                    src="/icons/editar.svg"
                    className={ editar }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
                />
                <Image
                    src="/icons/lixo.svg"
                    className={ lixo }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
            /></li>
        </ul>
    )
}