import styles from "./styles.module.scss"
import Image from "next/image";
import Link from "next/link";

import {
    lista,
    texto,
    editar,
    status,
    nome
} from "./styles.module.scss"

export default function PedidosRestaurante() {

    return(
        <>
        <ul className= {lista}>
            <li className={texto}>
                <div className={ nome }>Pedido #1234
                <div className={ status }>status</div>
                </div>
                <Link href={"/restaurante/status-pedido"}>
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
                <Link href={"/restaurante/status-pedido"}>
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
                <Link href={"/restaurante/status-pedido"}>
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
                <Link href={"/restaurante/status-pedido"}>
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