
'use client'

import Icone from "@/components/Icone";
import Pesquisa from "@/components/Pesquisa";
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
            <h2>Cardápio</h2>
            <Pesquisa/>
            <ul>
                <li>
                    <div></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend, justo non luctus iaculis, tortor dui finibus diam, et rhoncus arcu metus ut metus.</p>
                    <div>
                        
                    </div>
                </li>
            </ul>
        </>
    )
}

export default Restaurante;