'use client';

import Button from "@/components/Button";
import { CarrinhoContext } from "@/contexts";
import { useContext, useEffect, useState } from "react";
import {
    container,
    dados_entrega,
    dados_entrega_texto,
    dados_entrega_endereco,
    botao_cancelar,
    pagamento,
    pagamento_titulo,
    pagamento_lista,
    pagamento_item,
    pagamento_texto,
    divider,
    container_avaliacao,
    estrela
} from "./styles.module.scss";
import Retornar from "@/components/Retornar";
import { useRouter } from "next/navigation";
import Icone from "@/components/Icone";
import ResumoPedido from "@/components/ResumoPedido";
import { buscarPedidoPorCodigo, cancelarPedido } from "@/services/pedido";
import { buscarItensPedidoPorPedido } from "@/services/itemPedido";
import { Step, StepLabel, Stepper } from "@mui/material";
import { atualizarAvaliacao, buscarAvaliacaoPorPedido, criarAvaliacao } from "@/services/avaliacao";

const MeuPedido = ({ params: { id }}) => {

    const router = useRouter();
    const [itensPedidoExistentes, setItensPedidoExistentes] = useState([]);
    const [pedido, setPedido] = useState({});
    const [passoAtivo, setPassoAtivo] = useState(0);
    const [avaliacao, setAvaliacao] = useState({});


    useEffect(() => {

        const pedidoExistente = buscarPedidoPorCodigo(id);
        const itensPedidoExistentes = buscarItensPedidoPorPedido(id);
        const avaliacaoExistente = buscarAvaliacaoPorPedido(id);

        console.log(pedidoExistente.status);

        setPedido(pedidoExistente);
        setItensPedidoExistentes(itensPedidoExistentes);
        setPassoAtivo(pedidoExistente.status);
        
        console.log(avaliacaoExistente);

        if (avaliacaoExistente !== null) {
            setAvaliacao(avaliacaoExistente);
        }

    }, [id]);
    
    const cancelar = () => {

        console.log(id);
        cancelarPedido(id);
        router.push("/cliente/meus-pedidos");
    }

    const avaliar = (nota) => {
        console.log("Vou avaliar");

        const avaliacaoCriada = criarAvaliacao({
            idCliente: pedido.idCliente,
            idPedido: pedido.codigo,
            idRestaurante: pedido.idRestaurante,
            nota
        });

        setAvaliacao(avaliacaoCriada);
    }

    const reavaliar = (nota) => {
        console.log("Vou reavalizar");

        console.log(avaliacao.id);

        const avaliacaoAtualizada = atualizarAvaliacao(avaliacao.id, {
            nota
        });

        setAvaliacao({...avaliacaoAtualizada, nota});
    }

    return(
        <div className={ container }>
            <Retornar navigate={() => router.push("/cliente/meus-pedidos")} />

            <ResumoPedido itens={ itensPedidoExistentes }/>
            <div className={ dados_entrega }>
                <p className={ dados_entrega_texto }>Entregar em:</p>
                <p className={ dados_entrega_endereco }>Endereço de entrega</p>
            </div>

            <div className={ divider }></div>

            <p className={pagamento_titulo}>Andamento do Pedido</p>
            <Stepper activeStep={ passoAtivo } orientation="vertical" >
                <Step>
                    <StepLabel>Aguardando confirmação</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Confirmado</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Em preparo</StepLabel>
                </Step>
                <Step>
                    <StepLabel>A caminho</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Entregue</StepLabel>
                </Step>
            </Stepper>

            <div className={ divider }></div>
            <div className={ pagamento }>
                <p className={ pagamento_titulo }>Pagamento</p>
                <ul className={ pagamento_lista }>
                    <li className={ pagamento_item } style={{ display: pedido?.formaPagamento?.includes("Débito") ? "flex" : "none"}}>
                        <Icone src={ "/icons/credit-card-outline.svg" }/>
                        <p className={ pagamento_texto } >Cartão de Débito</p>
                    </li>
                    <li className={ pagamento_item } style={{ display: pedido?.formaPagamento?.includes("Crédito") ? "flex" : "none"}}>
                        <Icone src={ "/icons/credit-card-outline.svg" }/>
                        <p className={ pagamento_texto }>Cartão de Crédito</p>
                    </li>
                    <li className={ pagamento_item } style={{ display: pedido?.formaPagamento?.includes("Pix") ? "flex" : "none"}}>
                        <Icone src={ "/icons/swap-horizontal.svg" }/>
                        <p className={ pagamento_texto }>Pix</p>
                    </li>
                    <li className={ pagamento_item } style={{ display: pedido?.formaPagamento?.includes("Dinheiro") ? "flex" : "none"}}>
                        <Icone src={ "/icons/cash.svg" }/>
                        <p className={ pagamento_texto }>Dinheiro</p>
                    </li>
                </ul>

            </div>
            <div className={ divider }></div>
            <p className={ pagamento_titulo }>Avaliar Pedido</p>
            <div className={ container_avaliacao }>
                <Icone src={ avaliacao.nota >= 1 ? "/icons/estrela.svg" : "/icons/estrela_desmarcada.svg" } className={ estrela } onClick={ () => Object.keys(avaliacao).length === 0 ? avaliar(1) : reavaliar(1) }/>
                <Icone src={ avaliacao.nota >= 2 ? "/icons/estrela.svg" : "/icons/estrela_desmarcada.svg" } className={ estrela } onClick={ () => Object.keys(avaliacao).length === 0  ? avaliar(2) : reavaliar(2) }/>
                <Icone src={ avaliacao.nota >= 3 ? "/icons/estrela.svg" : "/icons/estrela_desmarcada.svg" } className={ estrela } onClick={ () => Object.keys(avaliacao).length === 0  ? avaliar(3) : reavaliar(3) }/>
                <Icone src={ avaliacao.nota >= 4 ? "/icons/estrela.svg" : "/icons/estrela_desmarcada.svg" } className={ estrela } onClick={ () => Object.keys(avaliacao).length === 0  ? avaliar(4) : reavaliar(4) }/>
                <Icone src={ avaliacao.nota >= 5 ? "/icons/estrela.svg" : "/icons/estrela_desmarcada.svg" } className={ estrela } onClick={ () => Object.keys(avaliacao).length === 0  ? avaliar(5) : reavaliar(5) }/>
            </div>
            <p className={ botao_cancelar } onClick={ cancelar } style={{
                display: pedido.status === 1 || pedido.status === 2 ?
                    "block"
                    :
                    "none"
            }}>Cancelar pedido</p>
        </div>
    )
}

export default MeuPedido;