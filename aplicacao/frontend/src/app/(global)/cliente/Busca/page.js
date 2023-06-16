'use client';

import ListaRestaurantes from "@/components/ListaRestaurantes";
import Pesquisa from "@/components/Pesquisa";
import { buscarRestaurantes } from "@/services/restaurante";
import { useEffect, useState } from "react";
import {
    filtrar,
    filtros,
    filtro
} from "./styles.module.scss";

const Busca = () => {
    const [busca, setBusca] = useState("");
    const [restaurantes, setRestaurantes] = useState([]);


    useEffect(() => {
        const restaurantesExistente = buscarRestaurantes({nome: busca});

        console.log(busca);

        setRestaurantes(restaurantesExistente);
    }, [busca]);

    return(
        <>
            <Pesquisa setBusca={ setBusca }/>
            <div className={ filtrar }>
                <p>Filtrar</p>
            </div>
            <div className={ filtros }>
                <div className={ filtro }>
                    <input type="radio" value={"prato"} name="filtro" onSelect={() => {

                    }}/>
                    <label>Prato</label>
                </div>
                <div>
                <input type="radio" value={"prato"} name="filtro" onSelect={() => {

                }}/>
                <label>Restaurante</label>
                </div>
            </div>
            <ListaRestaurantes restaurantes={ restaurantes }/>
        </>
    )
}

export default Busca;