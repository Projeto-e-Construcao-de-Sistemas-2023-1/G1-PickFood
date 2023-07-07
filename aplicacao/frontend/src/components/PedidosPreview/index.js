import { statusPedido } from "@/services/status_pedido";
import styles from "./styles.module.scss"

import {
    lista,
    texto,
    status
} from "./styles.module.scss"

export default function PedidosPreview({ pedidos }) {

    const exibirStatus = (pedido) => {

        const opcoesStatus = {
            0: "Agendado",
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
        <ul className= {lista} >
            {
                pedidos?.map(pedido => {

                    return(
                        <li className={texto} key={ pedido.codigo } style={{ display: pedido?.status === statusPedido.AGENDADO ? "none" : "flex" }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                                <p>Pedido</p>
                                <p style={{ textAlign: "start"}}>{ pedido.codigo }</p>
                            </div>
                            
                            <div className={ status }>{ exibirStatus(pedido) }</div>
                        </li>
                    )
                })
            }
        </ul>
    )
}