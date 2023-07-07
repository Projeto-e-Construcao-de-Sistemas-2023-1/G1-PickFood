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
import { buscarRestaurantePorId} from "@/services/restaurante";


const MeuCarrinho = () => {

    const router = useRouter();
    const { itens } = useContext(CarrinhoContext);
    if (itens === null || itens.length === 0) {
        return (
          <>
            <Retornar navigate={() => router.push("/cliente/home")} />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "65vh" }}>
              <div style={{ textAlign: "center"}}>
                <img src="/carrinho-vazio.png" alt="Carrinho Vazio" style={{ width: "50%", height: "auto" }} />
                <p style={{ fontSize: "4vw", marginTop: "2vh", color:"#808080"  }}>Carrinho vazio</p>
              </div>
            </div>
          </>
        );
      }

      
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