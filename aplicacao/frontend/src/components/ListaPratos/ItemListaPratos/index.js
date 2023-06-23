'use client';

import { AuthContext } from "@/contexts";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
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
import { buscarTodosFavoritosPratoCliente, criarFavoritoPratoClinete, excluirFavoritoPorClienteEPrato } from "@/services/favoritos_prato_cliente";
import Icone from "@/components/Icone";

const ItemListaPratos = ({ prato }) => {
    
    const { usuario } = useContext(AuthContext);

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
                    <div className={ restricoes }>
                        <div className={ restricao }>Sem lactose</div>
                        <div className={ restricao }>Low carb</div>
                    </div>
                </div>
                <div className={ estrelas }>
                    <Icone className={ estrela } src="/icons/estrela.svg" alt="Estrela de avaliaçao"/>
                    <Icone className={ estrela } src="/icons/estrela.svg" alt="Estrela de avaliaçao"/>
                    <Icone className={ estrela } src="/icons/estrela.svg" alt="Estrela de avaliaçao"/>
                    <Icone className={ estrela } src="/icons/estrela.svg" alt="Estrela de avaliaçao"/>
                </div>
            </Link>
        </li>
    )
}

export default ItemListaPratos;