'use client';

import CardapioPreview from "@/components/CardapioPreview";
import Button from "@/components/Button";
import Link from "next/link";

import { 
    divider,
    titulo,
    botao,
    link,
} from "./styles.module.scss"
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import PedidosPreview from "@/components/PedidosPreview";
import pratos from "@/fixtures/pratos";
import { buscarPratosPorRestaurante } from "@/services/prato";
import { AuthContext } from "@/contexts";
import { buscarPedidosPorRestaurante } from "@/services/pedido";

export default function RestauranteHome() {

    const [pratos, setPratos] = useState();
    const [pedidos, setPedidos] = useState();
    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        const pratosExistente = buscarPratosPorRestaurante(usuario.id);
        const pedidosExistentes = buscarPedidosPorRestaurante(usuario.id);

        setPratos(pratosExistente);
        setPedidos(pedidosExistentes);
    }, [usuario.id]);

    return (
        <>

            <h2 className= { titulo } >Cardápio</h2>

            <CardapioPreview pratos={ pratos }/>

            <Link href={"restaurante/cardapio"} className={ link }>
                <div className= { botao }>
                <Button>Exibir cardápio</Button>
                </div>
            </Link>

            <div className={ divider }></div>

            <h2 className={ titulo }>Pedidos</h2>

            <PedidosPreview pedidos={ pedidos }/>

            <Link href={"restaurante/pedidos"} className={ link }>
                <div className= { botao }>
                <Button>Exibir pedidos</Button>
                </div>
            </Link>

        </>
    )
}