import styles from "./styles.module.scss"

import {
    lista,
    texto,
    status
} from "./styles.module.scss"

export default function PedidosPreview() {
    return(
        <ul className= {lista}>
            <li className={texto}>Pedido #1234
            <div className={ status }>status</div>
            </li>

            <li className={texto}>Pedido #1234
            <div className={ status }>status</div>
            </li>

            <li className={texto}>Pedido #1234
            <div className={ status }>status</div>
            </li>

            <li className={texto}>Pedido #1234
            <div className={ status }>status</div>
            </li>

            <li className={texto}>Pedido #1234
            <div className={ status }>status</div>
            </li>

            <li className={texto}>Pedido #1234
            <div className={ status }>status</div>
            </li>
        </ul>
    )
}