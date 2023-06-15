'use client';

import Image from "next/image";
import {
    container,
    cabecalho,
    nomeRestaurante,
    adicionarMaisItens,
    pratos,
    limpar,
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
import { useContext } from "react";
import { CarrinhoContext } from "@/contexts";
import { limpar as limpaCarrinho } from "@/services/carrinho";

const Carrinho = () => {

    const { itens, setItens } = useContext(CarrinhoContext);


    const incrementarItem = (id) => {
        
        for (const indice in itens) {

            const item = itens[indice];

                
            if (item.id === id) {
                
                
                itens[indice].quantidade += 1;
                itens[indice].valor += Number.parseFloat(item.prato.preco);

                setItens([ ...itens ]);
                
                localStorage.setItem("carrinho", JSON.stringify(itens));
            }
        }
    }

    const decrementarItem = (id) => {
        
        for (const indice in itens) {

            const item = itens[indice];

                
            if (item.id === id) {
                
                itens[indice].quantidade -= 1;
                itens[indice].valor -= item.prato.preco;

                if (itens[indice].quantidade === 0) {
                    itens.splice(indice, 1);
                }

                setItens([ ...itens ]);
                
                localStorage.setItem("carrinho", JSON.stringify(itens));
            }
        }
    }

    const limparCarrinho = () => {

        limpaCarrinho();
        setItens([]);
    }
    
    return(
        <div className={ container }>
            <div className={ cabecalho }>
                <div>
                    <p className={ nomeRestaurante }>Nome do restaurante</p>
                    <p className={ adicionarMaisItens }>Adicionar mais itens</p>
                </div>
                <p className={ limpar } onClick={ limparCarrinho }>Limpar carrinho</p>
            </div>
            <div className={ pratos }>
            {
                
                    itens?.map((item) => {

                        return(
                            <div className={ prato } key={ item.id }>
                                <div className={ info }>
                                    <p className={ nomePrato }>{ item.prato.nome }</p>
                                    <p className={ precoPrato }>{ item.valor }</p>
                                </div>
                                <div className={ interacoes }>
                                    <Icone src={ "/icons/add_item_carrinho.svg" } className={ addCarrinho } onClick={ () => incrementarItem(item.id) } />
                                    <p className={ quantidade }>{ item.quantidade }</p>
                                    <Icone src={ "/icons/remover_item_carrinho.svg" } className={ removerCarrinho } onClick={ () => decrementarItem(item.id) }/>
                                </div>
                            </div>
                        )
                    })
                    
            }
            </div>
        </div>
    )
}

export default Carrinho;