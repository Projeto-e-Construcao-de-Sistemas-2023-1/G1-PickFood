'use client';

import { AuthContext } from "@/contexts";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import {
    item,
    link,
    favorito,
    info,
    nome,
    restricoes_lista,
    restricao,
    estrelas,
    estrela,
    preco
} from "./styles.module.scss";
import { buscarTodosFavoritosPratoCliente, criarFavoritoPratoClinete, excluirFavoritoPorClienteEPrato } from "@/services/favoritos_prato_cliente";
import Icone from "@/components/Icone";
import { calcularNotaMediaPorRestaurante } from "@/services/avaliacao";
import { buscarPratosRestricoesPorPrato } from "@/services/prato_restricao";

const ItemListaPratos = ({ prato }) => {
    
    const { usuario } = useContext(AuthContext);
    const [nota, setNota] = useState(0);
    const [restricoes, setRestricoes] = useState([]);

    useEffect(() => {

        const notaMedia = calcularNotaMediaPorRestaurante(prato.idRestaurante);
        const restricoesExistentes = buscarPratosRestricoesPorPrato(prato?.id);

        setNota(notaMedia);
        setRestricoes(restricoesExistentes);

    }, [prato?.idRestaurante, prato?.id]);

    const ehFavoritado = () => {
        
        const favoritosExistentes = buscarTodosFavoritosPratoCliente();

        if (favoritosExistentes === null) {
            return false;
        }

        for (const favoritoExistente of favoritosExistentes) {
            if (favoritoExistente.idCliente === usuario.id && favoritoExistente.idPrato === prato.id) {

                
                return true;
            }
        }

        return false;
    }

    const [ehFavorito, setEhFavorito] = useState(() => ehFavoritado());

    const addFavoritos = () => {

        criarFavoritoPratoClinete({idCliente: usuario.id, idPrato: prato.id});

        setEhFavorito(true);
    }

    const removerFavoritos = () => {

        excluirFavoritoPorClienteEPrato({ idCliente: usuario.id , idPrato: prato.id });

        setEhFavorito(false);
    }

    return(
        <li className={ item } key={ prato.id }>
            {
                ehFavorito || ehFavoritado(prato.id) ?
                    <Image
                
                    className={ favorito } 
                        width={10} 
                        height={15} 
                        src="/icons/favorito_marcado.svg" 
                        alt="Icone de favorito quando o restaurante ainda não foi favoritado."
                        onClick={ () => removerFavoritos() }
                    />
                    :
                    <Image
                    className={ favorito } 
                        width={10} 
                        height={15} 
                        src="/icons/favorito_desmarcado.svg" 
                        alt="Icone de favorito quando o restaurante ainda não foi favoritado."
                        onClick={ () => addFavoritos() }
                    />

            }
            <Link href={ "/cliente/restaurante/" + prato.idRestaurante + "/prato/" + prato.id } className={ link }>
                <div className={ info }>
                    <div className={ nome }>{ prato.nome  }</div>
                    <div className={ restricoes_lista }>
                        {
                            restricoes?.map(item => {

                                return (
                                    <p className={ restricao } key={ item.id }>{ item.nome }</p>
                                )
                            })
                        }
                    </div>
                    <div className={ preco }>R$ { prato.preco }</div>
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

export default ItemListaPratos;