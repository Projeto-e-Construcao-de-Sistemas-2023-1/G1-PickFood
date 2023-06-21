'use client';

import PedidosRestaurante from "@/components/PedidosRestaurante";
import { useRouter } from "next/navigation";
import TituloPagina from "@/components/TituloPagina";
import { useContext, useEffect, useState } from "react";
import { buscarPedidosPorRestaurante } from "@/services/pedido";
import { AuthContext } from "@/contexts";
import Retornar from "@/components/Retornar";

export default function Pedidos() {

    const router = useRouter();
    const [pedidos, setPedidos] = useState([]);
    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        const pedidosExistentes = buscarPedidosPorRestaurante(usuario.id);

        setPedidos(pedidosExistentes);

       
    }, [usuario.id]);

    return (
        <>
            <Retornar navigate={ () => router.push("/restaurante/home") } />
            <TituloPagina textAlign="center">Pedidos</TituloPagina>

            <PedidosRestaurante pedidos={ pedidos }/>

        </>
    )
}