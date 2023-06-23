'use client';

import Icone from "@/components/Icone";
import Retornar from "@/components/Retornar";
import TituloPagina from "@/components/TituloPagina";
import { AuthContext } from "@/contexts";
import { buscarCuponsPorRestaurante } from "@/services/cupom";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import {
    cupom_item,
    cupom_dados,
    cupom_info,
    cupom_titulo,
    cupom_valor,
    cupom_icone
} from "./styles.module.scss"

const MeusCupons = () => {

    const router = useRouter();
    const [cupons, setCupons] = useState([]);
    const { usuario } = useContext(AuthContext);

    useEffect(() => {
        const cuponsExistentes = buscarCuponsPorRestaurante(usuario.id);

        setCupons(cuponsExistentes);
    }, [usuario.id]);

    return(

        <div>
            <Retornar navigate={() => router.push("/restaurante/home")}/>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <TituloPagina textAlign="center">Meus Cupons</TituloPagina>
                <Icone src={ "/icons/adicionar.svg" } style={{ marginLeft: 20 }} onClick={ () => router.push("restaurante/meus-cupons/criar-cupom") }/>
            </div>
            <ul>
                {
                    cupons?.map(cupom => {

                        return (
                            <li key={ cupom.id } className={ cupom_item }>
                                <div className={ cupom_dados }>
                                    <Icone src={ "/icons/ticket_verde.svg" } className={ cupom_icone }/>
                                    <div className={ cupom_info }>
                                        <p className={ cupom_titulo }>{ cupom.titulo }</p>
                                        <span className={ cupom_valor }>R$ { cupom.valor }</span>
                                    </div>
                                </div>
                                <Icone src={ "/icons/mais.svg" } onClick={() => router.push("restaurante/meus-cupons/editar-cupom/" + cupom.id)}/>
                            </li>
                        )
                    })
                }
                
            </ul>
        </div>
    )
}

export default MeusCupons;