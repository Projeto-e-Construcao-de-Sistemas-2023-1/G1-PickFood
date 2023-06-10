import Image from "next/image";
import {
    container,
    cabecalho,
    nomeRestaurante,
    adicionarMaisItens,
    pratos,
    prato,
    info,
    nomePrato,
    precoPrato,
    interacoes,
    addCarrinho,
    quantidade,
    removerCarrinho
} from "./styles.module.scss";
import Icone from "../Icone";

const Carrinho = () => {
    
    return(
        <div className={ container }>
            <div className={ cabecalho }>
                <p className={ nomeRestaurante }>Nome do restaurante</p>
                <p className={ adicionarMaisItens }>Adicionar mais itens</p>
            </div>
            <div className={ pratos }>
                <div className={ prato }>
                    <div className={ info }>
                        <p className={ nomePrato }>Strogonoff de Frango</p>
                        <p className={ precoPrato }>R$65, 00</p>
                    </div>
                    <div className={ interacoes }>
                        <Icone src={ "/icons/add_item_carrinho.svg" } className={ addCarrinho }/>
                        <p className={ quantidade }>1</p>
                        <Icone src={ "/icons/remover_item_carrinho.svg" } className={ removerCarrinho }/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Carrinho;