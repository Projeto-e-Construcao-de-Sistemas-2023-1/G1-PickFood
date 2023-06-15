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
    divider
} from "./styles.module.scss";
import Link from "next/link";

const CardapioCliente = ({ pratos }) => {
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
                                        
                                        <div className={ preco }>R$ { prato.preco }</div>
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
                            <div className={ divider }></div>
                        </>
                    )
                })
            }
            
        </ul>
    )
}

export default CardapioCliente;