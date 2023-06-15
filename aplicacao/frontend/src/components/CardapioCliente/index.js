import Image from "next/image";
import {
    link,
    itens,
    item,
    cabecalho,
    cabecalho_prato,
    foto,
    nome,
    preco,
    descricao,
    restricoes,
    restricao_nome,
    divider,
    favorito
} from "./styles.module.scss";
import Link from "next/link";
import { useContext, useState } from "react";
import { buscarTodosFavoritosPratoCliente, criarFavoritoPratoClinete, excluirFavoritoPorClienteEPrato } from "@/services/favoritos_prato_cliente";
import { AuthContext } from "@/contexts";

const CardapioCliente = ({ pratos }) => {

    const [ehFavorito, setEhFavorito] = useState(false);
    const { usuario } = useContext(AuthContext);

    const ehFavoritado = (idPrato) => {
        
        const favoritosExistentes = buscarTodosFavoritosPratoCliente();

        if (favoritosExistentes === null) {
            return false;
        }

        for (const favoritoExistente of favoritosExistentes) {
            if (favoritoExistente.idCliente === usuario.id && favoritoExistente.idPrato === idPrato) {

                
                return true;
            }
        }

        return false;
    }

    const addFavoritos = (idPrato) => {

        criarFavoritoPratoClinete({idCliente: usuario.id, idPrato});

        setEhFavorito(true);
    }

    const removerFavoritos = (idPrato) => {

        excluirFavoritoPorClienteEPrato({ idCliente: usuario.id , idPrato });

        setEhFavorito(false);
    }

    return(
        <ul className={ itens }>
            {
                pratos?.map(prato => {
                    return(
                        <>
                            <Link href={ `/cliente/restaurante/${prato.idRestaurante}/prato/${prato.id}` } key={ prato.id } className={ link }>
                                <li className={ item }>
                                    <div className={ cabecalho }>
                                        <div className={ cabecalho_prato }>
                                            <Image
                                                width={ 21 }
                                                height={ 21 }
                                                src={ prato.foto !== "" ? "/icons/foto.svg" : "/icons/foto.svg" }
                                                alt="Foto do prato"
                                                className={ foto }
                                            />
                                            <p className={ nome }>{ prato.nome }</p>
                                        </div>
                                        
                                        <div style={{ display: "flex", alignItems: "center"}}>
                                            <div className={ preco }>R$ { prato.preco }</div>
                                            
                                        </div>
                                    </div>
                                    <p className={ descricao }>{ prato.descricao }</p>
                                    <div className={ restricoes }>
                                        {
                                            prato?.restricoes?.map(restricao => {

                                                return(
                                                    <span key={ restricao.id } className={ restricao_nome }>
                                                        { restricao.nome }
                                                    </span>
                                                )
                                            })
                                        }
                                    </div>
                                    
                                </li>

                            </Link>
                            <div style={{ display: "flex", justifyContent: "flex-end"}}>
                                {
                                        ehFavorito || ehFavoritado(prato.id) ?
                                        <Image
                                        className={ favorito } 
                                            width={10} 
                                            height={15} 
                                            src="/icons/favorito_marcado.svg" 
                                            alt="Icone de favorito quando o restaurante ainda não foi favoritado."
                                            onClick={ () => removerFavoritos(prato.id) }
                                        />
                                        :
                                        <Image
                                        className={ favorito } 
                                            width={10} 
                                            height={15} 
                                            src="/icons/favorito_desmarcado.svg" 
                                            alt="Icone de favorito quando o restaurante ainda não foi favoritado."
                                            onClick={ (e) => {
                                                e.stopPropagation();
                                                addFavoritos(prato.id)
                                            } }
                                        />
                                }
                            </div>
                            <div className={ divider }></div>
                        </>
                    )
                })
            }
            
        </ul>
    )
}

export default CardapioCliente;