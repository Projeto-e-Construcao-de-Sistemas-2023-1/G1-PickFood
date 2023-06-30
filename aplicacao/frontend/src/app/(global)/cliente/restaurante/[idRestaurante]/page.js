
'use client'

import Retornar from "@/components/Retornar";
import TituloPagina from "@/components/TituloPagina";
import pratos from "@/fixtures/pratos";
import CardapioCliente from "@/components/CardapioCliente";
import { useRouter } from "next/navigation";
import {
    titulo,
    center,
    icone
} from "./styles.module.scss";
import { useEffect, useState } from "react";
import { buscarRestaurantePorId } from "@/services/restaurante";
import { buscarPratosPorRestaurante } from "@/services/prato";
import Icone from "@/components/Icone";

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
            <Retornar navigate={ () => router.push("/cliente/home") }/>
            <div className={ center }>
                <TituloPagina className={ titulo }>{ restaurante.nome_fantasia }</TituloPagina>
                <Icone className= { icone }
                    src={ "/icons/mensagem.svg" }
                    alt="Icone de círculo com um + no centro."
                    onClick={() => router.push("cliente/restaurante/" + idRestaurante + "/contato")}
                />
            </div>

            <CardapioCliente pratos={ pratos } />
        </>
    )
}

export default Restaurante;