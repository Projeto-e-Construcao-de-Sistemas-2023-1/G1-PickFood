'use client';
import ListaRestaurantes from "@/components/ListaRestaurantes";
import Retornar from "@/components/Retornar";
import TituloPagina from "@/components/TituloPagina";
import { AuthContext } from "@/contexts";
import { buscarRestaurantesFavoritosPorCliente } from "@/services/favorito";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Restaurantes = () => {
    
    const { usuario } = useContext(AuthContext);
    const [restaurantes, setRestaurantes] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const restaurantesFavoritos = buscarRestaurantesFavoritosPorCliente(usuario.id);

        console.log(restaurantesFavoritos);

        setRestaurantes(restaurantesFavoritos);
    }, [usuario.id])

    return(
        <div>
            <Retornar navigate={() => router.push("cliente/meus-favoritos")}/>

            <TituloPagina textAlign="center">Restaurantes</TituloPagina>

            <ListaRestaurantes restaurantes={ restaurantes } style={{ display: "flex", flexDirection: "column", alignItems: "center" }}/>
        </div>
    )
}

export default Restaurantes;