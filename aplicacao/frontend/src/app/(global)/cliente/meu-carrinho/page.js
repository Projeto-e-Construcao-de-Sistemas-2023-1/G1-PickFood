'use client';

import Button from "@/components/Button";
import Carrinho from "@/components/Carrinho";
import TituloPagina from "@/components/TituloPagina";
import {
    info,
    textoPrimario,
    divider,
    textoSecundario,
    botao,
    total,
    textoTotal,
    valorTotal
} from "./styles.module.scss";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Retornar from "@/components/Retornar";


const MeuCarrinho = () => {

    const router = useRouter();

    return(
        <>
            <Retornar navigate={ () => router.back() } />
            <TituloPagina>Meu carrinho</TituloPagina>
            
            <Carrinho/>
        
            <div className={ info }>
                <p className={ textoPrimario }>Hoje, 30 - 45 minutos</p>
                <p className={ textoSecundario }>Taxa: R$10,00</p>
            </div>

            <div className={ divider }></div>

            <div className={ total }>
                <p className={ textoTotal }>Total com a entrega:</p>
                <p className={ valorTotal }>Valor total</p>
            </div>

            <Button className={ botao } onClick={ () => router.push("/cliente/meu-pedido") }>Finalizar compra</Button>
        </>
    )
}

export default MeuCarrinho;