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
import { useState } from "react";

const HistoricoPedidos = () => {
    
    const router = useRouter();
    const [cancelar, setCancelar] = useState(false)

    const exibirCancelar = () => {
        setCancelar(prev => !prev);
    }

    const cancelarPedido = () => {

    }
    
    return(
        <div>
            <Retornar navigate={ () => router.back() }/>
            <TituloPagina>Meus pedidos</TituloPagina>
            <ul className={ pedidos_lista }>
                <li className={ pedidos_item }>
                    <div className={ pedidos_info }>
                        <p>Pedido número: </p>
                        <p className={ pedidos_numero }>numero</p>
                    </div>
                    <Icone src={ "/icons/mais.svg" } onClick={ exibirCancelar }/>

                    <div className={ pedidos_cancelar } style={{ display: cancelar ? "block" : "none" }} onClick={ cancelarPedido }>
                        Cancelar pedido
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default HistoricoPedidos;