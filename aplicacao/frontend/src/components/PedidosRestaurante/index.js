import styles from "./styles.module.scss"
import Image from "next/image";
import Link from "next/link";

import {
    lista,
    texto,
    foto,
    editar,
    lixo,
    status,
    nome
} from "./styles.module.scss"
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function PedidosRestaurante({ pedidos }) {

    const [ativo, setAtivo] = useState(false);

    const exibirStatus = (pedido) => {

        const opcoesStatus = {
            1: "Aguardando confirmação",
            2: "Confirmado",
            3: "Em preparo",
            4: "A caminho",
            5: "Entregue",
            6: "Cancelado"
        };

        return opcoesStatus[pedido.status];
    }

    return(
        <>
        <ul className= {lista}>
            {
                pedidos?.map(pedido => {

                    return(

                        <li className={texto} key={ pedido.codigo }>
                            <div >
                                <div className={ nome }>Pedido</div>
                                <div>{ pedido.codigo }</div>
                                <div className={ status }>{ exibirStatus(pedido) }</div>
                            </div>
                            <Link href={"/restaurante/status-pedido/" + pedido.codigo }>
                                <Image
                                src="/icons/pontinhos.svg"
                                className={ editar }
                                width={ 14 }
                                height={ 14 }
                                alt="Icone de tres pontinhos."
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