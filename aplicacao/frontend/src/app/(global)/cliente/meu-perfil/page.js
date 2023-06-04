'use client';

import Form from "@/components/Form";
import { tituloPagina } from "@/styles/componentes.module.scss";
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
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts";
import { useRouter } from "next/navigation";

export default function MeuPerfil() {


    const [ativo, setAtivo] = useState(false);

    const { usuario } = useContext(AuthContext);
    const router = useRouter();

    const excluir = () => {
        let usuariosJaCadastrados = JSON.parse(localStorage.getItem("usuarios"));

        let indexBuscado = -1;

        for (const index in usuariosJaCadastrados) {
            if (usuariosJaCadastrados[index].id === usuario.id) {
                indexBuscado = index;
                break;
            }
        }

        usuariosJaCadastrados.splice(indexBuscado, 1);

        localStorage.setItem("usuarios", JSON.stringify([...usuariosJaCadastrados]));

        router.push("/auth/login");
    }

    return(
        <>
            <Modal ativo={ ativo }>
                <Modal.Cabecalho>
                    <Modal.Icone svg="/icons/aviso.svg"/>
                    <Modal.Titulo>Tem certeza que deseja excluir sua conta?</Modal.Titulo>
                </Modal.Cabecalho>

                <Modal.Rodape>
                    <Modal.BotaoConfirmar onClick={ excluir }/>
                    <Modal.BotaoCancelar onClick={ () => setAtivo(false) }/>
                </Modal.Rodape>
            </Modal>

            <h2 className={ tituloPagina }>Meu Perfil</h2>
            <ul className={ lista }>
                <li className={ item }>
                    <Link className={ link } href={ "/cliente/meu-perfil/meus-dados" }>
                        <Image className={ icone } src="/icons/meus-dados.svg" alt="Icone de 'Meus Dados'." width={15} height={15}/>
                        <div>Meus dados</div>
                    </Link>
                </li>
                <li className={ item }>
                    <Link href={ "/cliente/meu-perfil/meus-enderecos" } className={ link }>
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
            <div className={ excluirConta } onClick={ () => { setAtivo(prev => !prev) } }>
                <Image className={ iconeExcluirConta } alt="Icone de 'Excluir conta'." src="/icons/lixeira.svg" width={15} height={15}/>
                <div className={ textoExcluirConta }>Excluir conta</div>
            </div>
        </>
    )
}