'use client';

import PedidosRestaurante from "@/components/PedidosRestaurante";
import Pesquisa from "@/components/Pesquisa";

import { 
    titulo,
    pesquisa
} from "./styles.module.scss"
import { useRouter } from "next/navigation";

export default function Pedidos() {

    const router = useRouter();

    return (
        <>
            <div className={ pesquisa }>
                <Pesquisa/>
            </div>
            
            <h2 className= { titulo }>Pedidos</h2>

            <PedidosRestaurante/>

        </>
    )
}