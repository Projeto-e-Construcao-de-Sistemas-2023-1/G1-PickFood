import { ItemHistoricoPedidos } from "./ItemHistoricoPedidos";
import {
    pedidos_lista
} from "./styles.module.scss";

const HistoricoPedidos = ({ pedidos }) => {
    return(
        <ul className={ pedidos_lista }>
            {
                pedidos?.map(pedido => {

                    return(
                        <ItemHistoricoPedidos key={ pedido.codigo } pedido={ pedido }/>
                    )
                })
            }
            
        </ul>
    )
}

export default HistoricoPedidos;
        