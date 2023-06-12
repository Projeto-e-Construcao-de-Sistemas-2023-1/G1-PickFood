'use client';

import Button from "@/components/Button";
import { CarrinhoContext } from "@/contexts";
import { useContext, useEffect } from "react";
import {
    container,
    itens_lista,
    item_info,
    item_quantidade,
    item_nome,
    item_preco
} from "./styles.module.scss";

const MeuPedido = () => {

    const { itens } = useContext(CarrinhoContext);

    return(
        <>
            <div className={ container }>
                <p>Nome do restaurante</p>
                <div className={ itens_lista }>
                    {
                        itens?.map((item) => {
                            return(
                                <>
                                    <div className={ item_info }>
                                        <span className={ item_quantidade }>{ item.quantidade }</span>
                                        <p className={ item_nome }>{ item.prato.nome }</p>
                                    </div>
                                    <p className={ item_preco }>{ item.valor }</p>
                                </>

                            )
                        })
                    }
                    
                </div>
                <div>
                    <p></p>
                    <p></p>
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
            <Button>Confirmar pedido</Button>
        </>
    )
}

export default MeuPedido;