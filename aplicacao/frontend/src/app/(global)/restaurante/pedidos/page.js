'use client';

import PedidosRestaurante from "@/components/PedidosRestaurante";
import Pesquisa from "@/components/Pesquisa";

import { 
    titulo,
    pesquisa
} from "./styles.module.scss"
import { useRouter } from "next/navigation";
import TituloPagina from "@/components/TituloPagina";
import { useContext, useEffect, useState } from "react";
import { buscarPedidosPorRestaurante } from "@/services/pedido";
import { AuthContext } from "@/contexts";

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
            <div className={ pesquisa }>
                <Pesquisa/>
            </div>
            
            <TituloPagina>Pedidos</TituloPagina>

            <PedidosRestaurante pedidos={ pedidos }/>

        </>
    )
}