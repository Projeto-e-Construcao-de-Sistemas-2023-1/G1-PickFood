
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

const Restaurante = () => {

    const router = useRouter();

    return(
        <>
            <Retornar navigate={ () => router.back() }/>
            <TituloPagina className={ titulo }>Nome do Restaurante</TituloPagina>
            {/* <h2 className={ subtitulo }>Cardápio</h2> */}
            <Pesquisa/>
            <CardapioCliente pratos={ pratos } />
        </>
    )
}

export default Restaurante;