'use client';

import Button from "@/components/Button";
import { CarrinhoContext } from "@/contexts";
import { useContext, useEffect, useState } from "react";
import {
    container,
    dados_entrega,
    dados_entrega_texto,
    dados_entrega_endereco,
    cancelar,
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
import ResumoPedido from "@/components/ResumoPedido";
import { buscarPedidoPorCodigo } from "@/services/pedido";
import { buscarItensPedidoPorPedido } from "@/services/itemPedido";

const MeuPedido = ({ params: { id }}) => {

    const router = useRouter();
    const [itensPedidoExistentes, setItensPedidoExistentes] = useState([]);
    const [pedido, setPedido] = useState({});

    useEffect(() => {

        const pedidoExistente = buscarPedidoPorCodigo(id);
        const itensPedidoExistentes = buscarItensPedidoPorPedido(id);

        setPedido(pedidoExistente);
        setItensPedidoExistentes(itensPedidoExistentes);
    }, [id]);
    

    return(
        <div className={ container }>
            <ResumoPedido itens={ itensPedidoExistentes }/>
            <div className={ dados_entrega }>
                <p className={ dados_entrega_texto }>Entregar em:</p>
                <p className={ dados_entrega_endereco }>Endereço de entrega</p>
            </div>
            <
            <div className={ divider }></div>
            <div className={ pagamento }>
                <p className={ pagamento_titulo }>Pagamento</p>
                <ul className={ pagamento_lista }>
                    <li className={ pagamento_item } style={{ display: pedido?.formaPagamento?.includes("Dédito") ? "initial" : "none"}}>
                        <Icone src={ "/icons/credit-card-outline.svg" }/>
                        <p className={ pagamento_texto } >Cartão de Débito</p>
                    </li>
                    <li className={ pagamento_item } style={{ display: pedido?.formaPagamento?.includes("Crédito") ? "initial" : "none"}}>
                        <Icone src={ "/icons/credit-card-outline.svg" }/>
                        <p className={ pagamento_texto }>Cartão de Crédito</p>
                    </li>
                    <li className={ pagamento_item } style={{ display: pedido?.formaPagamento?.includes("Pix") ? "initial" : "none"}}>
                        <Icone src={ "/icons/swap-horizontal.svg" }/>
                        <p className={ pagamento_texto }>Pix</p>
                    </li>
                    <li className={ pagamento_item } style={{ display: pedido?.formaPagamento?.includes("Dinheiro") ? "initial" : "none"}}>
                        <Icone src={ "/icons/cash.svg" }/>
                        <p className={ pagamento_texto }>Dinheiro</p>
                    </li>
                </ul>

            </div>
            <p className={ cancelar }>Cancelar pedido</p>
        </div>
    )
}

export default MeuPedido;