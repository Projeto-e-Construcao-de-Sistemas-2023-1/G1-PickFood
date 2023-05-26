'use client';

import ListaRestaurantes from "@/components/ListaRestaurantes";
import {
    titulo,
    banner
} from "./styles.module.scss";
import Pesquisa from "@/components/Pesquisa";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/layout";
import request from "@/services/axios";


export default function Home() {

    const [busca, setBusca] = useState("");
    const [restaurantes, setRestaurantes] = useState([]);

    const { usuario } = useContext(AuthContext);

    useEffect(() => {

        request.get("restaurante/list")
            .then((response) => {
                console.log("Entrou no then: ")

                const dados = response.data;
                setRestaurantes(dados);
                console.log(dados);
            })
            .catch((error) => {
                console.error("Entrou no catch: ");
                console.error(error);
            })
            .finally(() => {
                console.warn("Entrou no finally: ");
                
            });
    }, [])

    return(
        <>

            <div className={ banner }>
                <Pesquisa setBusca={ setBusca }/>
            </div>
            <h2 className={ titulo }>Restaurantes disponíveis</h2>

            {
                busca.length == 0 ?
                <ListaRestaurantes restaurantes={ restaurantes }/>
                :
                busca
            }

            
        </>
    )
}