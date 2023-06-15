
'use client'

import Pesquisa from "@/components/Pesquisa";
import Retornar from "@/components/Retornar";
import TituloPagina from "@/components/TituloPagina";
import pratos from "@/fixtures/pratos";
import CardapioCliente from "@/components/CardapioCliente";
import { useRouter } from "next/navigation";
import {
    titulo,
    subtitulo
} from "./styles.module.scss";
import { useEffect, useState } from "react";
import { buscarRestaurantePorId } from "@/services/restaurante";
import { buscarPratosPorRestaurante } from "@/services/prato";

const Restaurante = ({ params: { idRestaurante } }) => {

    const router = useRouter();

    const [restaurante, setRestaurante] = useState({});
    const [pratos, setPratos] = useState([]);

    useEffect(() => {
        const restauranteExistente = buscarRestaurantePorId(idRestaurante);
        const pratosExistentes = buscarPratosPorRestaurante(idRestaurante);

        console.log(idRestaurante);

        setRestaurante(restauranteExistente);
        setPratos(pratosExistentes);
    }, [idRestaurante]);

    return(
        <>
            <Retornar navigate={ () => router.back() }/>
            <TituloPagina className={ titulo }>{ restaurante.nome_fantasia }</TituloPagina>
            <Pesquisa/>
            <CardapioCliente pratos={ pratos } />
        </>
    )
}

export default Restaurante;