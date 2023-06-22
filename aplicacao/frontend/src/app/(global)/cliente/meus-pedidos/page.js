'use client';

import Icone from "@/components/Icone";
import Retornar from "@/components/Retornar";
import TituloPagina from "@/components/TituloPagina";
import { useRouter } from "next/navigation";
import {
    pedidos_lista,
    pedidos_item,
    pedidos_info,
    pedidos_numero,
    pedidos_cancelar
} from "./styles.module.scss";
import { useContext, useEffect, useState } from "react";
import { buscarPedidosPorCliente, cancelarPedido } from "@/services/pedido";
import { AuthContext } from "@/contexts";

const MeusPedidos = () => {
    
    const { usuario } = useContext(AuthContext);
    const router = useRouter();
    const [cancelar, setCancelar] = useState(false)
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        const pedidosExistentes = buscarPedidosPorCliente(usuario.id);

        setPedidos(pedidosExistentes);
    }, [usuario.id]);

    const exibirCancelar = () => {
        setCancelar(prev => !prev);
    }

    const exibirStatus = (pedido) => {

        const opcoesStatus = {
            1: "Aguardando confirmação",
            2: "Confirmado",
            3: "Em preparo",
            4: "A caminho",
            5: "Entregue",
            6: "Cancelado"
        };

        return opcoesStatus[pedido.status];
    }

    const cancelaPedido = (idPedido) => {

        cancelarPedido(idPedido);
    }
    
    return(
        <div>
            <Retornar navigate={ () => router.back() }/>
            <TituloPagina>Meus pedidos</TituloPagina>
            <ul className={ pedidos_lista }>
                {
                    pedidos?.map(pedido => {

                        return(
                            <li className={ pedidos_item } key={ pedido.codigo }>
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
                    })
                }
                
            </ul>
        </div>
    )
}

export default MeusPedidos;