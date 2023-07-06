'use client';

import { 
    divider,
    texto,
    nome,
    codigo,
    status,
    checkbox,
    info,
    textoPrimario,
    textoSecundario,
    input,
    label,
    checkboxes,
    botao
} from "./styles.module.scss"
import { useForm } from "react-hook-form";
import Form from "@/components/Form";
import { useRouter } from "next/navigation";
import StatusPedido from "@/components/StatusPedido";
import { useEffect, useState } from "react";
import { atualizarStatusPedido, buscarPedidoPorCodigo } from "@/services/pedido";
import { buscarClientePorId } from "@/services/cliente";
import { buscarItensPedidoPorPedido } from "@/services/itemPedido";
import { Step, StepLabel, Stepper } from "@mui/material";
import Button from "@/components/Button";

export default function Pedidos({ params: { id }}) {

    const [passoAtivo, setPassoAtivo] = useState(0);

    const [pedido, setPedido] = useState({});
    const [cliente, setCliente] = useState({});
    const [itensPedido, setItensPedido] = useState([]);

    useEffect(() => {
        const pedidoExistente = buscarPedidoPorCodigo(id);
        const clienteExistente = buscarClientePorId(pedidoExistente?.idCliente);
        const itensPedidoExistentes = buscarItensPedidoPorPedido(pedidoExistente?.codigo);

        console.log(pedidoExistente);
        console.log(clienteExistente);
        console.log(itensPedidoExistentes);

        setItensPedido(itensPedidoExistentes)
        setPedido(pedidoExistente);
        setCliente(clienteExistente);
        setPassoAtivo(pedidoExistente.status);
    }, [id]);

    const exibirStatus = (pedido) => {

        const opcoesStatus = {
            1: "Aguardando confirmação",
            2: "Confirmado",
            3: "Em preparo",
            4: "A caminho",
            5: "Entregue",
            6: "Cancelado",
            7: "Agendado"
        };

        return opcoesStatus[pedido.status];
    }

    const atualizarStatus = () => {

        if (passoAtivo >= 5) {
            return;
        }
        
        setPassoAtivo(prev => prev + 1);

        atualizarStatusPedido(id);
    }

    return (
        <>
            <div className={texto}>
                <div className={ nome }>{ cliente.nome }
                <div className={ codigo }>{ pedido.codigo }</div>
                </div>
                    <div className={ status }>Status atual:
                    <div className={ codigo }>{ exibirStatus(pedido) }</div>
                </div>
            </div>

            <StatusPedido itensPedido={ itensPedido }/>

            <div className={ divider }></div>

            <div className={ info }>
                <p className={ textoPrimario }>Entregar em:</p>
                <p className={ textoSecundario }>Endereço</p>
            </div>

            <div className={ divider }></div>

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
            
            <Button className={ botao } onClick={ atualizarStatus }>Atualizar pedido</Button>
        </>
    )
}