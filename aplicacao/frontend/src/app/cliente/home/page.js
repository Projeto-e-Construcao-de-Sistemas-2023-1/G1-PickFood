'use client';

import ListaRestaurantes from "@/components/ListaRestaurantes";
import {
    titulo,
    banner
} from "./styles.module.scss";
import Pesquisa from "@/components/Pesquisa";
import { createContext, useEffect, useState } from "react";


export default function Home() {

    const [busca, setBusca] = useState("");

    useEffect(() => {
        console.log("ola mundo");
    }, [busca]);

    return(
        <>

            <div className={ banner }>
                <Pesquisa setBusca={ setBusca }/>
            </div>
            <h2 className={ titulo }>Restaurantes disponíveis</h2>

            {
                busca.length == 0 ?
                <ListaRestaurantes restaurantes={ {} }/>
                :
                busca
            }

            
        </>
    )
}