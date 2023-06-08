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

export default function PedidosRestaurante() {

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
                <div className={ nome }>Pedido #1234
                <div className={ status }>status</div>
                </div>
                <Link href={"/restaurante/pedidos"}>
                    <Image
                    src="/icons/pontinhos.svg"
                    className={ editar }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de tres pontinhos."
                    />
                </Link>
            </li>

            <li className={texto}>
                <div className={ nome }>Pedido #1234
                <div className={ status }>status</div>
                </div>
                <Link href={"/restaurante/pedidos"}>
                    <Image
                    src="/icons/pontinhos.svg"
                    className={ editar }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de tres pontinhos."
                    />
                </Link>
            </li>

            <li className={texto}>
                <div className={ nome }>Pedido #1234
                <div className={ status }>status</div>
                </div>
                <Link href={"/restaurante/pedidos"}>
                    <Image
                    src="/icons/pontinhos.svg"
                    className={ editar }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de tres pontinhos."
                    />
                </Link>
            </li>

            <li className={texto}>
                <div className={ nome }>Pedido #1234
                <div className={ status }>status</div>
                </div>
                <Link href={"/restaurante/pedidos"}>
                    <Image
                    src="/icons/pontinhos.svg"
                    className={ editar }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de tres pontinhos."
                    />
                </Link>
            </li>

            <li className={texto}>
                <div className={ nome }>Pedido #1234
                <div className={ status }>status</div>
                </div>
                <Link href={"/restaurante/pedidos"}>
                    <Image
                    src="/icons/pontinhos.svg"
                    className={ editar }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de tres pontinhos."
                    />
                </Link>
            </li>

            <li className={texto}>
                <div className={ nome }>Pedido #1234
                <div className={ status }>status</div>
                </div>
                <Link href={"/restaurante/pedidos"}>
                    <Image
                    src="/icons/pontinhos.svg"
                    className={ editar }
                    width={ 14 }
                    height={ 14 }
                    alt="Icone de tres pontinhos."
                    />
                </Link>
            </li>
        </ul>
    </>
    )
}