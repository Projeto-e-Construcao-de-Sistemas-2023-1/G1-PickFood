'use client';

import PedidosRestaurante from "@/components/PedidosRestaurante";
import Pesquisa from "@/components/Pesquisa";

import { 
    titulo,
    pesquisa
} from "./styles.module.scss"
import { useRouter } from "next/navigation";
import TituloPagina from "@/components/TituloPagina";

export default function Pedidos() {

    const router = useRouter();

    return (
        <>
            <div className={ pesquisa }>
                <Pesquisa/>
            </div>
            
            <TituloPagina>Pedidos</TituloPagina>

            <PedidosRestaurante/>

        </>
    )
}