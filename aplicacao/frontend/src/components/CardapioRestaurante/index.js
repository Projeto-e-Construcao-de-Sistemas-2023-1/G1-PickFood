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
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function CardapioRestaurante() {

    const [ativo, setAtivo] = useState(false);

    return(
        <>
        <Modal ativo={ ativo }>
        <Modal.Cabecalho>
            <Modal.Icone svg="/icons/aviso.svg"/>
            <Modal.Titulo>Tem certeza que deseja excluir sua conta?</Modal.Titulo>
        </Modal.Cabecalho>

        <Modal.Rodape>
            <Modal.BotaoConfirmar/>
            <Modal.BotaoCancelar onClick={ () => setAtivo(false) }/>
        </Modal.Rodape>
    </Modal>

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
                    onClick={ () => { setAtivo(prev => !prev) } }
                    alt="Icone de lixo."
                />
            </li>

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
                    onClick={ () => { setAtivo(prev => !prev) } }
                    alt="Icone de lixo."
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
                    onClick={ () => { setAtivo(prev => !prev) } }
                    alt="Icone de lixo."
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
                    onClick={ () => { setAtivo(prev => !prev) } }
                    alt="Icone de lixo."
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
                    alt="Icone de edtar."
                /> 
               <Image
                    src="/icons/lixo.svg"
                    className={ lixo }
                    width={ 14 }
                    height={ 14 }
                    onClick={ () => { setAtivo(prev => !prev) } }
                    alt="Icone de lixo."
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
                    onClick={ () => { setAtivo(prev => !prev) } }
                    alt="Icone de lixo."
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
                    onClick={ () => { setAtivo(prev => !prev) } }
                    alt="Icone de lixo."
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
                    onClick={ () => { setAtivo(prev => !prev) } }
                    alt="Icone de lixo."
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
                    onClick={ () => { setAtivo(prev => !prev) } }
                    alt="Icone de lixo."
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
                    onClick={ () => { setAtivo(prev => !prev) } }
                    alt="Icone de lixo."
            /></li>
        </ul>
    </>
    )
}