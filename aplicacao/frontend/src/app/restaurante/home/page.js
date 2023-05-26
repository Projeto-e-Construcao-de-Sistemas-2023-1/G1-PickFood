'use client';

import CardapioPreview from "@/components/CardapioPreview";
import Button from "@/components/Button";
import Link from "next/link";

import { 
    divider,
    titulo,
    botao,
    link
} from "./styles.module.scss"
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

export default function RestauranteHome() {        

    return (
        <>

           <h2 className= { titulo } >Cardápio</h2>

            <CardapioPreview/>

            <Link href={"restaurante/cardapio"} className={ link }>
                <div className= { botao }>
                <Button>Exibir cardápio</Button>
                </div>
            </Link>
            
            <div className={ divider }></div>

        </>
    )
}