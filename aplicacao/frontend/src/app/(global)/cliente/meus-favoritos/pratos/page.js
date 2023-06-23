'use client';
import ListaPratos from "@/components/ListaPratos";
import Retornar from "@/components/Retornar";
import TituloPagina from "@/components/TituloPagina";
import { AuthContext } from "@/contexts";
import { buscarPratosFavoritosPorCliente } from "@/services/favoritos_prato_cliente";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Pratos = () => {
    
    const { usuario } = useContext(AuthContext);
    const [pratos, setPratos] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const pratosFavoritos = buscarPratosFavoritosPorCliente(usuario.id);

        setPratos(pratosFavoritos);
    }, [usuario.id])

    return(
        <div>
            <Retornar navigate={() => router.push("cliente/meus-favoritos")}/>

            <TituloPagina textAlign="center">Pratos</TituloPagina>

            <ListaPratos pratos={ pratos } style={{ display: "flex", flexDirection: "column", alignItems: "center" }}/>
        </div>
    )
}

export default Pratos;