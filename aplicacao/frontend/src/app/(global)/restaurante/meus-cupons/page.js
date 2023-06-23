'use client';

import Icone from "@/components/Icone";
import Retornar from "@/components/Retornar";
import TituloPagina from "@/components/TituloPagina";
import { useRouter } from "next/navigation";
import { useState } from "react";

const MeusCupons = () => {

    const router = useRouter();
    const [cupons, setCupons] = useState([]);

    return(

        <div>
            <Retornar navigate={() => router.push("restaurante/perfil")}/>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TituloPagina textAlign="center">Meus Cupons</TituloPagina>
                <Icone src={ "/icons/adicionar.svg" } style={{ marginLeft: 20 }} onClick={ () => router.push("restaurante/meus-cupons/criar-cupom") }/>
            </div>
            <ul>
                {
                    cupons?.map(cupom => {

                        return (
                            <li key={ cupom.id }>
                                <div>
                                    <Icone src={ "/icons/ticket_verde.svg" }/>
                                    <div>
                                        <p>{ cupom.nome }</p>
                                        <span>{ cupom.preco }</span>
                                    </div>
                                </div>
                                <Icone src={ "/icons/mais.svg" } />
                            </li>
                        )
                    })
                }
                
            </ul>
        </div>
    )
}

export default MeusCupons;