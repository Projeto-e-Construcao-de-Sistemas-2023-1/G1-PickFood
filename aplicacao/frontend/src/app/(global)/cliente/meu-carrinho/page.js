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
    valorTotal,
} from "./styles.module.scss";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Retornar from "@/components/Retornar";
import { CarrinhoContext } from "@/contexts";
import { calcularValorTotalItens } from "@/utils";


const MeuCarrinho = () => {

    const router = useRouter();
    const { itens } = useContext(CarrinhoContext);

    return(
        <>
            <Retornar navigate={ () => router.push("/cliente/home") } />
            <TituloPagina>Meu carrinho</TituloPagina>
            
            <Carrinho/>
        
            <div className={ info }>
                <p className={ textoPrimario }>Hoje, 30 - 45 minutos</p>
                <p className={ textoSecundario }>Taxa: R$10,00</p>
            </div>

            <div className={ divider }></div>

            <div className={ total }>
                <p className={ textoTotal }>Total com a entrega:</p>
                <p className={ valorTotal }>{ calcularValorTotalItens(itens) }</p>
            </div>    

            <Button className={ botao } onClick={ () => {
                if (itens?.length !== 0) {
                    router.push("/cliente/confirmar-pedido")
                }
            }}>Finalizar compra</Button>
        </>
    )
}

export default MeuCarrinho;