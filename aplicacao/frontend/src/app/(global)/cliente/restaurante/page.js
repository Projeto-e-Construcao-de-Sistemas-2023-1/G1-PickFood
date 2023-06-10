
'use client'

import Icone from "@/components/Icone";
import Retornar from "@/components/Retornar";
import TituloPagina from "@/components/TituloPagina";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Restaurante = () => {

    const router = useRouter();

    return(
        <>
            <Retornar navigate={ () => router.back() }/>
            <TituloPagina>Nome do Restaurante</TituloPagina>
        </>
    )
}

export default Restaurante;