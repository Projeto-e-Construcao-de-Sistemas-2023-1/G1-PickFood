'use client';

import CardapioRestaurante from "@/components/CardapioRestaurante";
import Pesquisa from "@/components/Pesquisa";
import Link from "next/link";

import { 
    titulo,
    adicionar,
    pesquisa
} from "./styles.module.scss"
import { useRouter } from "next/navigation";
import Image from "next/image";
import TituloPagina from "@/components/TituloPagina";

export default function Cardapio() {

    const router = useRouter();      

    return (
        <>
            <div className={ pesquisa }>
                <Pesquisa/> 
                <Link href={"/restaurante/criar-prato"}>
                    <Image className= { adicionar }
                    src="/icons/adicionar.svg"
                    width={ 21 }
                    height={ 21 }
                    alt="Icone de círculo com um + no centro."
                    /> 
                </Link>
                
            </div>
            
            <TituloPagina>Cardápio</TituloPagina>

            <CardapioRestaurante/>

        </>
    )
}