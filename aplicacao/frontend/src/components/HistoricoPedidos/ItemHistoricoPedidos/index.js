import Icone from "@/components/Icone";
import {
    pedidos_item,
    pedidos_info,
    pedidos_numero,
    pedidos_cancelar
} from "./styles.module.scss";

const ItemHistoricoPedidos = ({ pedido }) => {

    return(
        <li className={ pedidos_item }>
            <div className={ pedidos_info }>
                <p>Pedido número: </p>
                <p className={ pedidos_numero }>{ pedido.codigo }</p>
                <div style={{ marginTop: "10px" }}>
                    {
                        exibirStatus(pedido)
                    }
                </div>
            </div>
            <Icone src={ "/icons/mais.svg" } onClick={ exibirCancelar }/>

            <div className={ pedidos_cancelar } style={{ display: cancelar ? "block" : "none" }} onClick={ () => cancelaPedido(pedido.id) }>
                Cancelar pedido
            </div>
        </li>
    )
}

export { ItemHistoricoPedidos };