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


const MeuCarrinho = () => {

    
    
    return(
        <>
            <TituloPagina>Meu carrinho</TituloPagina>
            
            <Carrinho/>
            
            <div className={ info }>
                <p className={ textoPrimario }>Entregar em:</p>
                <p className={ textoSecundario }>Endereço</p>
            </div>

            <div className={ divider }></div>

            <div className={ info }>
                <p className={ textoPrimario }>Hoje, 30 - 45 minutos</p>
                <p className={ textoSecundario }>Taxa: R$10,00</p>
            </div>

            <div className={ divider }></div>

            <div className={ total }>
                <p className={ textoTotal }>Total com a entrega:</p>
                <p className={ valorTotal }>Valor total</p>
            </div>

            <Button className={ botao }>Continuar</Button>
        </>
    )
}

export default MeuCarrinho;