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
import Icone from "../Icone";

export default function Enderecos({ enderecos }) {

    const [ativo, setAtivo] = useState(false);

    return(
        <>

        <ul className= {lista}>
            {
                enderecos?.map(endereco => {
                    return(
                        <li className={texto} key={ endereco.id }>
                            <div className={ dados }>
                                <div className={ apelido }>{ endereco.apelido }</div>
                                <div className={ preco }>{ `${endereco.rua}, ${endereco.bairro}`  }</div>
                            </div>
                            <Link href={ "/cliente/meu-perfil/meus-enderecos/editar-endereco/" + endereco.id } className={ link }>
                                <Image
                                    src="/icons/editar.svg"
                                    className={ editar }
                                    width={ 14 }
                                    height={ 14 }
                                    alt="Icone de editar."
                                    style={{ marginRight: 10 }}
                                />
                            </Link>
                            
                        </li>
                    )
                })
            }
            
        </ul>
    </>
    )
}