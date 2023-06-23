'use client';

import ListaPratos from "@/components/ListaPratos";
import {
    divider,
    botao
} from "./styles.module.scss";

import TituloPagina from "@/components/TituloPagina";
import ListaRestaurantes from "@/components/ListaRestaurantes";
import { useContext, useEffect, useState } from "react";
import { buscarPratosFavoritosPorCliente } from "@/services/favoritos_prato_cliente";
import { AuthContext } from "@/contexts";
import { buscarRestaurantesFavoritosPorCliente } from "@/services/favorito";
import Retornar from "@/components/Retornar";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

const MeusFavoritos = () => {

    const { usuario } = useContext(AuthContext);
    const [pratos, setPratos] = useState();
    const [restaurantes, setRestaurantes] = useState();
    const router = useRouter();

    useEffect(() => {
        const pratosFavoritos = buscarPratosFavoritosPorCliente(usuario.id);
        const restaurantesFavoritos = buscarRestaurantesFavoritosPorCliente(usuario.id);

        console.log(pratosFavoritos);
        console.log(restaurantesFavoritos);

        if (pratosFavoritos.length > 2) {
            pratosFavoritos.splice(2, pratosFavoritos.length - 1);
        }

        if (restaurantesFavoritos.length > 2) {
            restaurantesFavoritos.splice(2, restaurantesFavoritos.length - 1);
        }


        setPratos(pratosFavoritos);
        setRestaurantes(restaurantesFavoritos);
    }, [usuario.id]);

    return(
        <div>
            <Retornar navigate={() => router.push("cliente/meu-perfil")}/>

            <TituloPagina textAlign="center">Pratos</TituloPagina>
            <ListaPratos pratos={ pratos } style={{ display: "flex", flexDirection: "column", alignItems: "center" }}/>
            <Button className={ botao } onClick={() => router.push("cliente/meus-favoritos/pratos")}>Veja mais</Button>
            
            <div className={ divider }></div>

            <TituloPagina textAlign="center">Restaurantes</TituloPagina>
            <ListaRestaurantes restaurantes={ restaurantes } style={{ display: "flex", flexDirection: "column", alignItems: "center" }}/>
            <Button className={ botao } onClick={() => router.push("cliente/meus-favoritos/restaurantes")}>Veja mais</Button>

        </div>
    )
}

export default MeusFavoritos;