'use client';

import ListaRestaurantes from "@/components/ListaRestaurantes";
import {
    titulo,
    banner
} from "./styles.module.scss";
import Pesquisa from "@/components/Pesquisa";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/layout";


export default function Home() {

    const [busca, setBusca] = useState("");

    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        console.log(usuario);
    }, [busca, usuario]);

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