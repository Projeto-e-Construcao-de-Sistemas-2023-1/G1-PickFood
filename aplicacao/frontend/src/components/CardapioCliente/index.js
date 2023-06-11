import Image from "next/image";
import {
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

const CardapioCliente = ({ pratos }) => {
    return(
        <ul className={ itens }>
            {
                pratos.map(prato => {
                    return(
                        <>
                            <li key={ prato.id } className={ item }>
                                <div className={ cabecalho }>
                                    <div className={ cabecalho_prato }>
                                        <Image
                                            width={ 21 }
                                            height={ 21 }
                                            src={ prato.foto !== "" ? prato.foto : "/icons/foto.svg" }
                                            alt="Foto do prato"
                                            className={ foto }
                                        />
                                        <p className={ nome }>{ prato.nome }</p>
                                    </div>
                                    
                                    <div className={ preco }>{ prato.preco }</div>
                                </div>
                                <p className={ descricao }>{ prato.descricao }</p>
                                <div className={ restricoes }>
                                    {
                                        prato.restricoes.map(restricao => {

                                            return(
                                                <span key={ restricao.id } className={ restricao_nome }>
                                                    { restricao.nome }
                                                </span>
                                            )
                                        })
                                    }
                                </div>
                            </li>

                            <div className={ divider }></div>
                        </>
                    )
                })
            }
            
        </ul>
    )
}

export default CardapioCliente;