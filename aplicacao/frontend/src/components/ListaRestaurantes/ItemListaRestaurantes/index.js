import { AuthContext } from "@/contexts";
import { buscarTodosFavoritos, criarFavorito, excluirFavoritoPorClienteERestaurante } from "@/services/favorito";
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

const ItemListaRestaurantes = ({ restaurante }) => {
    
    const [ehFavorito, setEhFavorito] = useState(false);
    const { usuario } = useContext(AuthContext);

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
                    <Image className={ estrela } src="/icons/estrela.svg" width={10} height={10} alt="Estrela de avaliaçao"/>
                    <Image className={ estrela } src="/icons/estrela.svg" width={10} height={10} alt="Estrela de avaliaçao"/>
                    <Image className={ estrela } src="/icons/estrela.svg" width={10} height={10} alt="Estrela de avaliaçao"/>
                    <Image className={ estrela } src="/icons/estrela.svg" width={10} height={10} alt="Estrela de avaliaçao"/>
                </div>
            </Link>
        </li>
    )
}

export default ItemListaRestaurantes;