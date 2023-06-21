'use client';

import CardapioRestaurante from "@/components/CardapioRestaurante";
import Link from "next/link";

import { 
    titulo,
    adicionar,
    pesquisa
} from "./styles.module.scss"
import { useRouter } from "next/navigation";
import Image from "next/image";
import TituloPagina from "@/components/TituloPagina";
import { useContext, useEffect, useState } from "react";
import { buscarPratos, buscarPratosPorRestaurante } from "@/services/prato";
import { AuthContext } from "@/contexts";
import Icone from "@/components/Icone";
import Retornar from "@/components/Retornar";

export default function Cardapio() {

    const router = useRouter();
    const [pratos, setPratos] = useState();
    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        const pratosExistentes = buscarPratosPorRestaurante(usuario.id);
        console.log(pratosExistentes);

        setPratos(pratosExistentes);
    }, [usuario.id]);

    return (
        <>
            <Retornar navigate={() => router.push("/restaurante/home")} />
            <div className={ pesquisa }>
                <TituloPagina style={{ margin: 0 }}>Cardápio</TituloPagina>
                <Link href={"/restaurante/criar-prato"}>
                    <Icone className= { adicionar }
                        src="/icons/adicionar.svg"
                        alt="Icone de círculo com um + no centro."
                    /> 
                </Link>
                
            </div>
            

            <CardapioRestaurante pratos={ pratos }/>

        </>
    )
}