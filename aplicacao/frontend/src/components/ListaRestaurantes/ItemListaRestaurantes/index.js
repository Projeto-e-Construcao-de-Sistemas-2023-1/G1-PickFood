'use client';

import { AuthContext } from "@/contexts";
import { buscarTodosFavoritos, criarFavorito, excluirFavoritoPorClienteERestaurante } from "@/services/favorito";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import {
    item,
    link,
    favorito,
    info,
    nome,
    restricoes,
    restricao,
    estrelas,
    estrela
} from "./styles.module.scss";
import Icone from "@/components/Icone";
import { calcularNotaMediaPorRestaurante } from "@/services/avaliacao";

const ItemListaRestaurantes = ({ restaurante }) => {
    
    const { usuario } = useContext(AuthContext);
    const [nota, setNota] = useState(0);

    useEffect(() => {

        const notaMedia = calcularNotaMediaPorRestaurante(restaurante.id);

        setNota(notaMedia);

    }, [restaurante.id]);

    const ehFavoritado = () => {
        
        const favoritosExistentes = buscarTodosFavoritos();

        if (favoritosExistentes === null) {
            return false;
        }

        for (const favoritoExistente of favoritosExistentes) {
            if (favoritoExistente.idCliente === usuario.id && favoritoExistente.idRestaurante === restaurante.id) {

                
                return true;
            }
        }

        return false;
    }

    const [ehFavorito, setEhFavorito] = useState(() => ehFavoritado());
    

    const addFavoritos = () => {

        criarFavorito({idCliente: usuario.id, idRestaurante: restaurante.id});

        setEhFavorito(true);
    }

    const removerFavoritos = () => {

        excluirFavoritoPorClienteERestaurante({ idCliente: usuario.id , idRestaurante: restaurante.id });

        setEhFavorito(false);
    }

    return(
        <li className={ item } key={ restaurante.id }>
            {
                ehFavorito || ehFavoritado(restaurante.id) ?
                    <Image
                    className={ favorito } 
                        width={10} 
                        height={15} 
                        src="/icons/favorito_marcado.svg" 
                        alt="Icone de favorito quando o restaurante ainda não foi favoritado."
                        onClick={ () => removerFavoritos(restaurante.id) }
                    />
                    :
                    <Image
                    className={ favorito } 
                        width={10} 
                        height={15} 
                        src="/icons/favorito_desmarcado.svg" 
                        alt="Icone de favorito quando o restaurante ainda não foi favoritado."
                        onClick={ () => addFavoritos(restaurante.id) }
                    />

            }
            <Link href={ "/cliente/restaurante/" + restaurante.id } className={ link }>
                <div className={ info }>
                    <div className={ nome }>{ restaurante.nome_fantasia  }</div>
                    <div className={ restricoes }>
                        <div className={ restricao }>Sem lactose</div>
                        <div className={ restricao }>Low carb</div>
                    </div>
                </div>
                <div className={ estrelas }>
                    <Icone src={ nota >= 1 ? "/icons/estrela.svg" : "/icons/estrela_desmarcada.svg" } className={ estrela }/>
                    <Icone src={ nota >= 2 ? "/icons/estrela.svg" : "/icons/estrela_desmarcada.svg" } className={ estrela }/>
                    <Icone src={ nota >= 3 ? "/icons/estrela.svg" : "/icons/estrela_desmarcada.svg" } className={ estrela }/>
                    <Icone src={ nota >= 4 ? "/icons/estrela.svg" : "/icons/estrela_desmarcada.svg" } className={ estrela }/>
                    <Icone src={ nota >= 5 ? "/icons/estrela.svg" : "/icons/estrela_desmarcada.svg" } className={ estrela }/>
                </div>
            </Link>
        </li>
    )
}

export default ItemListaRestaurantes;