'use client';

import Button from "@/components/Button";
import { AuthContext, CarrinhoContext } from "@/contexts";
import { useContext, useEffect, useState } from "react";
import {
    container,
    pedido,
    restaurante_nome,
    itens_lista,
    item_item,
    item_info,
    item_quantidade,
    item_nome,
    item_preco,
    total,
    dados_entrega,
    dados_entrega_texto,
    dados_entrega_endereco,
    botao_confirmar,
    pagamento,
    pagamento_titulo,
    pagamento_lista,
    pagamento_item,
    pagamento_texto,
    divider,
    icone
} from "./styles.module.scss";
import Retornar from "@/components/Retornar";
import { useRouter } from "next/navigation";
import Icone from "@/components/Icone";
import { criarItemPedido } from "@/services/itemPedido";
import { criarPedido } from "@/services/pedido";
import { limpar } from "@/services/carrinho";

const ConfirmarPedido = () => {

    const router = useRouter();

    const { itens } = useContext(CarrinhoContext);
    const { usuario } = useContext(AuthContext);

    const [formaPagamento, setFormaPagamento] = useState("Pix");
    const [formaEntrega, setFormaEntrega] = useState("Entregar");

    const calcularTotalPedido = () => {
        let total = 0;

        for (const item of itens) {
            total += Number.parseFloat(item.valor);
        }

        return total;
    }

    const confirmarPedido = () => {

        console.log(formaPagamento);
        console.log(itens);


        
        criarPedido({
            idCliente: usuario.id,
            idRestaurante: itens[0].prato.idRestaurante,
            formaPagamento,
            totalPedido: calcularTotalPedido(),
            itens
        });

        limpar();

        router.push("/cliente/meus-pedidos");
    }

    return(
        <div className={ container }>
            <div className={ pedido }>
                <p className={ restaurante_nome }>Nome do restaurante</p>
                <div className={ itens_lista }>
                    {
                        itens?.map((item) => {
                            return(
                                <div className={ item_item } key={ item.id }>
                                    <div className={ item_info }>
                                        <span className={ item_quantidade }>{ item.quantidade }</span>
                                        <p className={ item_nome }>{ item.prato.nome }</p>
                                    </div>
                                    <p className={ item_preco }>{ item.valor }</p>
                                </div>

                            )
                        })
                    }
                    
                </div>
                <div className={ total }>
                    <p>Total com a entrega: </p>
                    <p>{ calcularTotalPedido() }</p>
                </div>
            </div>
            <div style={{ marginTop: 20 }}>
                <form>
                    <div>
                        <input type="radio" value="Retirar no local" name="formaEntrega" onChange={(e) => setFormaEntrega(e.target.value)}/>
                        <label>Retirar no local</label>
                    </div>
                    <div>
                        <input type="radio" value="Entregar" name="formaEntrega" defaultChecked onChange={(e) => setFormaEntrega(e.target.value)}/>
                        <label>Entregar</label>
                    </div>
                </form>
            </div>
            <div className={ divider }></div>
            <div className={ dados_entrega } style={{ display: formaEntrega === "Entregar" ? "block" : "none" }}>
                <p className={ dados_entrega_texto }>Entregar em:</p>
                <p className={ dados_entrega_endereco }>Endereço de entrega</p>
            </div>
            <div className={ divider } style={{ display: formaEntrega === "Entregar" ? "block" : "none" }}></div>
            <div className={ pagamento }>
                <p className={ pagamento_titulo }>Pagamento</p>
                <ul className={ pagamento_lista }>
                    <li className={ pagamento_item } onClick={() => setFormaPagamento("Cartão de Débito")}>
                        <Icone className={ icone } src="/icons/credit-card-outline.svg" alt="Icone de 'cartão de crédito'." width={15} height={15}/>
                        <p className={ pagamento_texto }>Cartão de Débito</p>
                    </li>
                    <li className={ pagamento_item } onClick={() => setFormaPagamento("Cartão de Crédito")}>
                        <Icone className={ icone } src="/icons/credit-card-outline.svg" alt="Icone de 'cartão de débio'." width={15} height={15}/>
                        <p className={ pagamento_texto }>Cartão de Crédito</p>
                    </li>
                    <li className={ pagamento_item } onClick={() => setFormaPagamento("Pix")}>
                        <Icone className={ icone } src="/icons/swap-horizontal.svg" alt="Icone de 'pix'." width={15} height={15}/>
                        <p className={ pagamento_texto }>Pix</p>
                    </li>
                    <li className={ pagamento_item } onClick={() => setFormaPagamento("Dinheiro")}>
                        <Icone className={ icone } src="/icons/cash.svg" alt="Icone de 'dinheiro'." width={15} height={15}/>
                        <p className={ pagamento_texto }>Dinheiro</p>
                    </li>
                </ul>

            </div>
            <Button className={ botao_confirmar } onClick={ () => confirmarPedido() }>Confirmar pedido</Button>
        </div>
    )
}

export default ConfirmarPedido;