'use client';

import Button from "@/components/Button";
import FormasPagamento from "@/components/FormasPagamento";
import Icone from "@/components/Icone";
import Modal from "@/components/Modal";
import { AuthContext, CarrinhoContext } from "@/contexts";
import { limpar } from "@/services/carrinho";
import { buscarCuponsPorRestaurante } from "@/services/cupom";
import { criarPedido } from "@/services/pedido";
import { buscarRestaurantePorId } from "@/services/restaurante";
import { calcularValorTotalItens } from "@/utils";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import {
    botao_confirmar,
    botoes,
    container,
    cupom_aplicar,
    cupom_icone,
    cupom_info,
    cupom_item,
    cupom_lista,
    cupom_titulo,
    cupom_valor,
    dados_entrega,
    dados_entrega_endereco,
    dados_entrega_texto,
    divider,
    item_info,
    item_item,
    item_nome,
    item_preco,
    item_quantidade,
    itens_lista,
    pagamento,
    pagamento_titulo,
    pedido,
    restaurante_nome,
    textoCupom,
    total,
    cupom_preco_minimo
} from "./styles.module.scss";
import { buscarCuponsClientesPorCliente, criarClienteCupom } from "@/services/cliente_cupom";

const ConfirmarPedido = () => {

    const router = useRouter();

    const [cupons, setCupons] = useState([]);
    const [cupomSelecionado, setCupomSelecionado] = useState({});
    const [ativo, setAtivo] = useState(false);
    const [clientesCuponsCliente, setClientesCuponsCliente] = useState([]);

    const { itens } = useContext(CarrinhoContext);
    const { usuario } = useContext(AuthContext);

    const [formaPagamento, setFormaPagamento] = useState("Pix");
    const [formaEntrega, setFormaEntrega] = useState("Entregar");

    const [restaurante, setRestaurante] = useState({});
    const { setItens } = useContext(CarrinhoContext);

    const selecionarCupom = (cupom) => {

        console.log(cupom.precoMinimo);
        console.log(calcularValorTotalItens(itens));

        if (cupom?.precoMinimo >= calcularValorTotalItens(itens)) {
            return;
        }

        setCupomSelecionado(cupom);
        setAtivo(false);
    }

    const confirmarPedido = () => {

        console.log(formaPagamento);
        console.log(itens);


        
        const pedidoCriado = criarPedido({
            idCliente: usuario.id,
            idRestaurante: itens[0].prato.idRestaurante,
            formaPagamento,
            totalPedido: Object.keys(cupomSelecionado).length === 0 ? calcularValorTotalItens(itens) : (calcularValorTotalItens(itens) - cupomSelecionado.valor),
            itens
        });

        criarClienteCupom(usuario.id, cupomSelecionado.id);

        limpar();
        setItens([]);

        router.push("/cliente/meus-pedidos");
    }

    const cupomJaUtilizadoPeloCliente = (cupom) => {
        return clientesCuponsCliente.find(clienteCupomCliente => clienteCupomCliente.idCliente === usuario.id && clienteCupomCliente.idCupom === cupom.id)
    }
    
    useEffect(() => {
        const cuponsExistentes = buscarCuponsPorRestaurante(itens[0]?.prato.idRestaurante);
        const clientesCuponsClienteExistente = buscarCuponsClientesPorCliente(usuario.id);

        setCupons(cuponsExistentes);
        setClientesCuponsCliente(clientesCuponsClienteExistente);
    }, [itens, usuario.id]);

    useEffect(() => {
        if (itens?.length !== 0) {
            const restauranteExistente = buscarRestaurantePorId(itens[0].prato.idRestaurante);

            setRestaurante(restauranteExistente);
        }
    }, [itens]);

    return(
    <>
    
        <Modal ativo={ ativo }>
            <Modal.Cabecalho>
                <Modal.Icone svg="/icons/ticket_verde.svg"/>
                <Modal.Titulo>Cupons disponíveis</Modal.Titulo>
            </Modal.Cabecalho>
            <Modal.Corpo>
                <ul className={ cupom_lista }>
                    {
                        cupons?.map(cupom => {

                            return (
                                <li key={ cupom.id } className={ cupom_item } 
                                    style={{
                                        backgroundColor: cupomJaUtilizadoPeloCliente(cupom) ? "#E7E7E7" : "none",
                                        opacity: cupomJaUtilizadoPeloCliente(cupom) ? "50%" : "100%",
                                        pointerEvents: cupomJaUtilizadoPeloCliente(cupom) ? "none" : "initial"
                                    }}
                                    onClick={() => {
                                        selecionarCupom(cupom);
                                    }}
                                >
                                        <div className={ cupom_info }>
                                            
                                            <Icone src={ "/icons/ticket_verde.svg" } className={ cupom_icone }/>
                                            <div>
                                                <p className={ cupom_titulo }>{ cupom.titulo }</p>
                                                <p className={ cupom_preco_minimo }>Preço mínimo: R$ { cupom.precoMinimo }</p>
                                            </div>
                                        </div>
                                        <span className={ cupom_valor }>R$ { cupom.valor }</span>
                                </li>
                            )
                        })
                    }
            
                </ul>
            </Modal.Corpo>
            <Modal.Rodape className={ botoes }>
                <Modal.BotaoCancelar onClick={ () => setAtivo(false) }/>
            </Modal.Rodape>
        </Modal>

        <div className={ container }>
            <div className={ pedido }>
                <p className={ restaurante_nome }>{ restaurante?.nome_fantasia }</p>
                <div className={ itens_lista }>
                    {
                        itens?.map((item) => {
                            return(
                                <div className={ item_item } key={ item.id }>
                                    <div className={ item_info }>
                                        <span className={ item_quantidade }>{ item.quantidade }</span>
                                        <p className={ item_nome }>{ item.prato.nome }</p>
                                    </div>
                                    <p className={ item_preco }>R$ { item.valor }</p>
                                </div>

                            )
                        })
                    }
                    
                </div>
                <div className={ total }>
                    <p>Total com a entrega: </p>
                    <p>
                        R$  {
                                Object.keys(cupomSelecionado).length === 0 ?
                                    calcularValorTotalItens(itens)
                                    :
                                    `${calcularValorTotalItens(itens)} - ${cupomSelecionado.valor} = R$ ${calcularValorTotalItens(itens) - cupomSelecionado.valor}`
                            }
                    </p>
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
            <div className={ cupom_aplicar }
                onClick={ () => { setAtivo(prev => !prev) }}>
                <Icone className= { cupom_icone }                 
                    src={ "/icons/ticket_preto.svg" }
                    alt="Icone cupom preto"
                    
                />
                <p className={ textoCupom }>
                    { 
                        Object.keys(cupomSelecionado).length === 0 ?
                            'Aplicar cupom'
                            :
                            <p>{ cupomSelecionado.titulo }</p>
                    }
                </p>
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