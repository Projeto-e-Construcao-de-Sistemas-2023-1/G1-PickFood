import styles from "./styles.module.scss"
import Image from "next/image";
import Link from "next/link";

import {
    lista,
    texto,
    link,
    editar,
    preco,
    apelido,
    dados
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
            <Modal.Titulo>Tem certeza que deseja excluir esse item?</Modal.Titulo>
        </Modal.Cabecalho>

        <Modal.Rodape>
            <Modal.BotaoConfirmar/>
            <Modal.BotaoCancelar onClick={ () => setAtivo(false) }/>
        </Modal.Rodape>
    </Modal>

        <ul className= {lista}>
            <li className={texto}>
                <div className={ dados }>
                    <div className={ apelido }>Apelido</div>
                    <div className={ preco }>Infos do endereço</div>
                </div>
                <Link href={ "/cliente/meu-perfil/meus-enderecos/editar-endereco" } className={ link }>
                    <Image
                        src="/icons/editar.svg"
                        className={ editar }
                        width={ 14 }
                        height={ 14 }
                        alt="Icone de editar."
                    />
                </Link>
                
            </li>

            <li className={texto}>
                <div className={ dados }>
                    <div className={ apelido }>Apelido</div>
                    <div className={ preco }>Infos do endereço</div>
                </div>
                <Image
                    src="/icons/editar.svg"
                    className={ editar }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de editar."
                />
            </li>
        </ul>
    </>
    )
}