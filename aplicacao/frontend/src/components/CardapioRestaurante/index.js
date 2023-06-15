import styles from "./styles.module.scss"
import Image from "next/image";
import Link from "next/link";

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
import { excluirPrato } from "@/services/prato";

export default function CardapioRestaurante({ pratos }) {

    const [ativo, setAtivo] = useState(false);
    const [idPrato, setIdPrato] = useState("");

    const removerPrato = () => {

        excluirPrato(idPrato);

        document.querySelector(`#${idPrato}`).style.display = "none";
    }

    return(
        <>
        <Modal ativo={ ativo }>
            <Modal.Cabecalho>
                <Modal.Icone svg="/icons/aviso.svg"/>
                <Modal.Titulo>Tem certeza que deseja excluir esse item?</Modal.Titulo>
            </Modal.Cabecalho>

            <Modal.Rodape>
                <Modal.BotaoConfirmar onClick={() => {
                    removerPrato();
                    setAtivo(false);
                }}/>
                <Modal.BotaoCancelar onClick={ () => setAtivo(false) }/>
            </Modal.Rodape>
        </Modal>

        <ul className= {lista}>
            {
                pratos?.map(prato => {
                    return(
                        <li className={texto} key={ prato.id } id={ prato.id} >
                            <Image className={foto}
                                src="/icons/foto.svg"
                                width={ 21 }
                                height={ 21 }
                                alt="Icone de seta apontando para trás."
                            />
                            <div className={ nome }>{ prato.nome }
                            <div className={ preco }>R$ { prato.preco }</div>
                            </div>
                            <Link href={"/restaurante/editar-prato/" + prato.id}>
                                <Image
                                src="/icons/editar.svg"
                                className={ editar }
                                width={ 14 }
                                height={ 14 }
                                alt="Icone de editar."
                                />
                            </Link>
                            
                            <Image
                                src="/icons/lixo.svg"
                                className={ lixo }
                                width={ 14 }
                                height={ 14 }
                                onClick={ () => { 
                                    setAtivo(prev => !prev)
                                    setIdPrato(prato.id);
                                } }
                                alt="Icone de lixo."
                            />
                        </li>
                    )
                })
            }
            
        </ul>
    </>
    )
}