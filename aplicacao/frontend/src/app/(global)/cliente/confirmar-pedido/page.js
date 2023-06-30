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
    divider,
    icone,
    textoCupom,
    cupom_item,
    cupom_dados,
    cupom_icone,
    cupom_info,
    cupom_titulo,
    cupom_valor,
    botoes
} from "./styles.module.scss";
import Retornar from "@/components/Retornar";
import { useRouter } from "next/navigation";
import Icone from "@/components/Icone";
import { criarItemPedido } from "@/services/itemPedido";
import { criarPedido } from "@/services/pedido";
import { limpar } from "@/services/carrinho";
import { calcularValorTotalItens } from "@/utils";
import FormasPagamento from "@/components/FormasPagamento";
import Modal from "@/components/Modal";
import { buscarCupomPorId, buscarCuponsPorRestaurante, buscarTodosCupons } from "@/services/cupom";

const ConfirmarPedido = () => {

    const router = useRouter();

    const [cupons, setCupons] = useState([]);
    const [cupom, setCupom] = useState({});
    const [ativo, setAtivo] = useState(false);

    const { itens } = useContext(CarrinhoContext);
    const { usuario } = useContext(AuthContext);

    const [formaPagamento, setFormaPagamento] = useState("Pix");
    const [formaEntrega, setFormaEntrega] = useState("Entregar");

    const confirmarPedido = () => {

        console.log(formaPagamento);
        console.log(itens);


        
        criarPedido({
            idCliente: usuario.id,
            idRestaurante: itens[0].prato.idRestaurante,
            formaPagamento,
            totalPedido: calcularValorTotalItens(itens),
            itens
        });

        limpar();

        router.push("/cliente/meus-pedidos");
    }
    
        useEffect(() => {
            const cuponsExistentes = buscarCuponsPorRestaurante(idRestaurante);
    
            setCupons(cuponsExistentes);
        }, [idRestaurante]);

    return(
    <>
    
    <Modal ativo={ ativo }>
                    <Modal.Cabecalho>
                        <Modal.Icone svg="/icons/ticket_verde.svg"/>
                        <Modal.Titulo>Cupons disponíveis</Modal.Titulo>
                    </Modal.Cabecalho>
                    <ul>
                {
                    cupons?.map(cupom => {

                        return (
                            <li key={ cupom.id } className={ cupom_item } style={{
                                backgroundColor: cupom === cupom.id ? "#5ED0AE" : "initial"}} onClick={() => {
                                    <p style={{ color: cupom === cupom.id ? "#F8F8F8" : "initial" }} className={ cupom_titulo }>{ cupom.nome }</p>
                            }}>
                                <div className={ cupom_dados }>
                                    <Icone src={ "/icons/ticket_verde.svg" } className={ cupom_icone }/>
                                    <div className={ cupom_info }>
                                        <p className={ cupom_titulo }>{ cupom.titulo }</p>
                                        <span className={ cupom_valor }>R$ { cupom.valor }</span>
                                    </div>
                                    <p style={{ color: cupom === cupom.nome ? "#F8F8F8" : "initial" }} className={ cupom_titulo }>{ cupom.nome }</p>
                                </div>
                            </li>
                        )
                    })
                }
                
            </ul>
                    <Modal.Rodape className={ botoes }>
                        <Modal.BotaoConfirmar onClick={() => {
                            setAtivo(false);
                            setCupom(cupom.nome)
                        }}/>
                        <Modal.BotaoCancelar onClick={ () => setAtivo(false) }/>
                    </Modal.Rodape>
        </Modal>

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
                    <p>{ calcularValorTotalItens(itens) }</p>
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
            <div className={ cupons }>
                <Icone className= { cupom_icone }                 
                    src={ "/icons/ticket_preto.svg" }
                    alt="Icone cupom preto"
                    onClick={ () => {
                        setAtivo(prev => !prev)
                            
                        } }
                />
                <p className={ textoCupom }>{ cupom.nome }</p>
            </div>

            <div className={ divider }></div>
            <div className={ pagamento }>
                <p className={ pagamento_titulo }>Pagamento</p>
                <FormasPagamento formaPagamento={ formaPagamento} setFormaPagamento={ setFormaPagamento } />
                {/* <ul className={ pagamento_lista }>
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
                </ul> */}

            </div>
            <Button className={ botao_confirmar } onClick={ () => confirmarPedido() }>Confirmar pedido</Button>
        </div>
    </>
    )
}

export default ConfirmarPedido;