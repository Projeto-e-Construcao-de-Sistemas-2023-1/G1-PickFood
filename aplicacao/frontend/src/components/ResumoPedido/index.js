import { useContext, useEffect } from "react";
import {
    pedido,
    restaurante_nome,
    itens_lista,
    item_item,
    item_info,
    item_nome,
    item_preco,
    item_quantidade,
    total
} from "./styles.module.scss";
import { CarrinhoContext } from "@/contexts";
import { calcularValorTotalItens } from "@/utils";

const ResumoPedido = ({ itens }) => {

    useEffect(() => {
     
    }, []);

    return(
        <div className={ pedido }>
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
                <p>Total com a entrega: </p>
                <p>{ calcularValorTotalItens(itens) }</p>
            </div>
        </div>
    )
}

export default ResumoPedido;
        