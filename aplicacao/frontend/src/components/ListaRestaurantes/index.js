import Link from "next/link";
import { 
    lista,
    
} from "./styles.module.scss";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { buscarTodosFavoritos, criarFavorito, excluirFavoritoPorClienteERestaurante } from "@/services/favorito";
import { AuthContext } from "@/contexts";
import { excluirCliente } from "@/services/cliente";
import ItemListaRestaurantes from "./ItemListaRestaurantes";

export default function ListaRestaurantes({ restaurantes }) {

    const [ehFavorito, setEhFavorito] = useState(false);
    const { usuario } = useContext(AuthContext);

    const ehFavoritado = (idRestaurante) => {
        
        const favoritosExistentes = buscarTodosFavoritos();

        if (favoritosExistentes === null) {
            return false;
        }

        for (const favoritoExistente of favoritosExistentes) {
            if (favoritoExistente.idCliente === usuario.id && favoritoExistente.idRestaurante === idRestaurante) {

                
                return true;
            }
        }

        return false;
    }

    const addFavoritos = (idRestaurante) => {

        criarFavorito({idCliente: usuario.id, idRestaurante});

        setEhFavorito(true);
    }

    const removerFavoritos = (idRestaurante) => {

        excluirFavoritoPorClienteERestaurante({ idCliente: usuario.id , idRestaurante });

        setEhFavorito(false);
    }

    return(
        <ul className={ lista }>
            {
                restaurantes?.map(restaurante => {
                    return(
                        <ItemListaRestaurantes key={ restaurante.id } restaurante={ restaurante }/>
                    )
                })
            }
                        
                    
                
            
            
            
        </ul>
    )
}



