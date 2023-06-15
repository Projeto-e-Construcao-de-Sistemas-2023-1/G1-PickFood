'use client';

import ListaRestaurantes from "@/components/ListaRestaurantes";
import Pesquisa from "@/components/Pesquisa";
import { buscarRestaurantes } from "@/services/restaurante";
import { useEffect, useState } from "react";

const Busca = () => {
    const [busca, setBusca] = useState("");
    const [restaurantes, setRestaurantes] = useState([]);


    useEffect(() => {
        const restaurantesExistente = buscarRestaurantes({nome: busca});

        setRestaurantes(restaurantesExistente);
    }, [busca]);

    return(
        <>
            <Pesquisa setBusca={ setBusca } style={{ marginBottom: "20px" }}/>
            <ListaRestaurantes restaurantes={ restaurantes }/>
        </>
    )
}

export default Busca;