'use client';

import Icone from "@/components/Icone";
import Retornar from "@/components/Retornar";
import TituloPagina from "@/components/TituloPagina";
import { AuthContext } from "@/contexts";
import { buscarCuponsPorRestaurante } from "@/services/cupom";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import ListaCupons from "@/components/ListaCupons";

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
            <ListaCupons cupons={ cupons } />
        </div>
    )
}

export default MeusCupons;