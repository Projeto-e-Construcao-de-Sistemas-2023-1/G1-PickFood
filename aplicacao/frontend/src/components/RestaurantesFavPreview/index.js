import { AuthContext } from "@/contexts";
import Image from "next/image";
import {
    item,
    lista,
    favorito,
    info,
    nome,
    restricoes,
    restricao,
    estrelas,
    estrela
} from "./styles.module.scss";
import { useContext, useState } from "react";
import { excluirFavoritoPorClienteERestaurante, buscarTodosFavoritos } from "@/services/favorito";

const RestaurantesFavPreview = ({ restaurante }) => {

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

    const removerFavoritos = () => {

        excluirFavoritoPorClienteERestaurante({ idCliente: usuario.id , idRestaurante: restaurante.id });

        setEhFavorito(false);
    }
    return(
        <div className= { lista }>
            <li className={ item } >
            {
                    <Image
                    className={ favorito } 
                        width={10} 
                        height={15} 
                        src="/icons/favorito_marcado.svg" 
                        alt="Icone de favorito quando o restaurante ainda não foi favoritado."
                        onClick={ () => removerFavoritos() }
                    />
            }
                <div className={ info }>aaaa
                    <div className={ nome }>aaaa</div>
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
            </li>
        </div>
        
    )
}

export default RestaurantesFavPreview;