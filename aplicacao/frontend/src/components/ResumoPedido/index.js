import { useContext, useEffect } from "react";
import {
    pedido_container,
    restaurante_nome,
    itens_lista,
    item_item,
    item_info,
    item_nome,
    item_preco,
    item_quantidade,
    total
} from "./styles.module.scss";


const ResumoPedido = ({ pedido, itens }) => {

    useEffect(() => {
        console.log(itens);
    }, []);

    return(
        <div className={ pedido_container }>
            <p className={ restaurante_nome }>Nome do restaurante</p>
            <div className={ itens_lista }>
                {
                    itens?.map((item) => {
                        return(
                            <div className={ item_item } key={ item.id }>
                                <div className={ item_info }>
                                    <span className={ item_quantidade }>{ item.quantidade }</span>
                                    <p className={ item_nome }>{ item.prato.nome }</p>
                                </div>
                                <p className={ item_preco }>{ item.valor }</p>
                            </div>

                        )
                    })
                }
                
            </div>
            <div className={ total }>
                <p>Total com a entrega + cupom: </p>
                <p>{ pedido?.totalPedido }</p>
            </div>
        </div>
    )
}

export default ResumoPedido;
        