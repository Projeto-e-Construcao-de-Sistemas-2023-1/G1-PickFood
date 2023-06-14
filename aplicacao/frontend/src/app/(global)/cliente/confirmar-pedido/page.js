'use client';

import Button from "@/components/Button";
import { CarrinhoContext } from "@/contexts";
import { useContext, useEffect } from "react";
import {
    container,
    pedido,
    restaurante_nome,
    itens_lista,
    item_item,
    item_info,
    item_quantidade,
    item_nome,
    item_preco,
    total,
    dados_entrega,
    dados_entrega_texto,
    dados_entrega_endereco,
    botao_confirmar,
    pagamento,
    pagamento_titulo,
    pagamento_lista,
    pagamento_item,
    pagamento_texto,
    divider
} from "./styles.module.scss";
import Retornar from "@/components/Retornar";
import { useRouter } from "next/navigation";
import Icone from "@/components/Icone";

const ConfirmarPedido = () => {

    const router = useRouter();

    const { itens } = useContext(CarrinhoContext);

    const calcularTotalPedido = () => {
        let total = 0;

        for (const item of itens) {
            total += item.valor;
        }

        return total;
    }

    return(
        <div className={ container }>
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
                    <p>{ calcularTotalPedido() }</p>
                </div>
            </div>
            <div className={ dados_entrega }>
                <p className={ dados_entrega_texto }>Entregar em:</p>
                <p className={ dados_entrega_endereco }>Endereço de entrega</p>
            </div>
            <div className={ divider }></div>
            <div className={ pagamento }>
                <p className={ pagamento_titulo }>Pagamento</p>
                <ul className={ pagamento_lista }>
                    <li className={ pagamento_item }>
                        <Icone/>
                        <p className={ pagamento_texto }>Cartão de Débito</p>
                    </li>
                    <li className={ pagamento_item }>
                        <Icone/>
                        <p className={ pagamento_texto }>Cartão de Crédito</p>
                    </li>
                    <li className={ pagamento_item }>
                        <Icone/>
                        <p className={ pagamento_texto }>Pix</p>
                    </li>
                    <li className={ pagamento_item }>
                        <Icone/>
                        <p className={ pagamento_texto }>Dinheiro</p>
                    </li>
                </ul>

            </div>
            <Button className={ botao_confirmar }>Confirmar pedido</Button>
        </div>
    )
}

export default ConfirmarPedido;