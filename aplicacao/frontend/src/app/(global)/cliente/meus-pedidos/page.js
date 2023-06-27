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
import PedidosCliente from "@/components/PedidosCliente";

const MeusPedidos = () => {
    
    const { usuario } = useContext(AuthContext);
    const router = useRouter();
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        const pedidosExistentes = buscarPedidosPorCliente(usuario.id);

        setPedidos(pedidosExistentes);
    }, [usuario.id]);

    return(
        <div>
            <Retornar navigate={ () => router.back() }/>
            <TituloPagina>Meus pedidos</TituloPagina>
            <PedidosCliente pedidos={ pedidos } />
        </div>
    )
}

export default MeusPedidos;