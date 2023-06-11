
'use client'

import Pesquisa from "@/components/Pesquisa";
import Retornar from "@/components/Retornar";
import TituloPagina from "@/components/TituloPagina";
import { useRouter } from "next/navigation";
import pratos from "@/fixtures/pratos";
import CardapioCliente from "@/components/CardapioCliente";

const Restaurante = () => {

    const router = useRouter();

    return(
        <>
            <Retornar navigate={ () => router.back() }/>
            <TituloPagina>Nome do Restaurante</TituloPagina>
            <h2>Cardápio</h2>
            <Pesquisa/>
            <CardapioCliente pratos={ pratos } />
        </>
    )
}

export default Restaurante;