'use client';

import Image from "next/image";
import Link from "next/link";
import {
    titulo,
    lista,
    item,
    link,
    icone,
    excluirConta,
    iconeExcluirConta,
    textoExcluirConta
} from "./styles.module.scss";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function MeuPerfil() {


    const [ativo, setAtivo] = useState(true);

    return(
        <>
            <Modal ativo={ ativo }>
                <Modal.Cabecalho>
                    <Modal.Icone svg="/icons/aviso.svg"/>
                    <Modal.Titulo>Tem certeza que deseja excluir sua conta?</Modal.Titulo>
                </Modal.Cabecalho>

                <Modal.Rodape>
                    <Modal.BotaoConfirmar/>
                    <Modal.BotaoCancelar/>
                </Modal.Rodape>
            </Modal>

            <h2 className={ titulo }>Meu Perfil</h2>
            <ul className={ lista }>
                <li className={ item }>
                    <Link className={ link } href={ "" }>
                        <Image className={ icone } src="/icons/meus-dados.svg" alt="Icone de 'Meus Dados'." width={15} height={15}/>
                        <div>Meus dados</div>
                    </Link>
                </li>
                <li className={ item }>
                    <Link href={ "" } className={ link }>
                        <Image className={ icone } src="/icons/meus-enderecos.svg" alt="Icone de 'Meus Endereços'." width={15} height={15}/>
                        <div>Meus endereços</div>
                    </Link>
                </li>
                <li className={ item }>
                    <Link href={ "" } className={ link }>
                        <Image className={ icone } src="/icons/meus-favoritos.svg" alt="Icone de 'Meus Favoritos'." width={15} height={15}/>
                        <div>Meus favoritos</div>
                    </Link>
                </li>
            </ul>
            <div className={ excluirConta }>
                <Image className={ iconeExcluirConta } alt="Icone de 'Excluir conta'." src="/icons/lixeira.svg" width={15} height={15}/>
                <div className={ textoExcluirConta }>Excluir conta</div>
            </div>
        </>
    )
}