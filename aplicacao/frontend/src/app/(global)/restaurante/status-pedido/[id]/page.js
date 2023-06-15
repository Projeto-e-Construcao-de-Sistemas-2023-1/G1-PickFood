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
    checkboxes
} from "./styles.module.scss"
import { useForm } from "react-hook-form";
import Form from "@/components/Form";
import { useRouter } from "next/navigation";
import StatusPedido from "@/components/StatusPedido";
import { useEffect, useState } from "react";
import { buscarPedidoPorCodigo } from "@/services/pedido";
import { buscarClientePorId } from "@/services/cliente";
import { buscarItensPedidoPorPedido } from "@/services/itemPedido";

export default function Pedidos({ params: { id }}) {

    const router = useRouter();

    const { register, handleSubmit: submit, formState: { errors } } = useForm();
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
    }, [id]);

    const handleSubmit = (data) => {

        const { status } = data;

        console.log(data);

       

        router.push("/restaurante/pedidos");
    }

    const exibirStatus = (pedido) => {

        const opcoesStatus = {
            1: "Aguardando confirmação",
            2: "Confirmado",
            3: "Em preparo",
            4: "A caminho",
            5: "Entregue",
            6: "Cancelado"
        };

        return opcoesStatus[pedido.status];
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

            <Form onSubmit={ submit(handleSubmit) }>
                <Form.Erros erros = { errors }/>
                <div className={ checkboxes }>
                    <Form.Field className={ checkbox }>
                        <Form.Input type= "radio" name ="status" className={ input }/>
                        <Form.Label htmlFor="a" className= { label }>Confirmar pedido</Form.Label>
                    </Form.Field>
                    <Form.Field className={ checkbox }>
                        <Form.Input type= "radio" name ="status" className={ input }/>
                        <Form.Label htmlFor="b" className= { label }>Em preparação</Form.Label>
                    </Form.Field>
                    <Form.Field className={ checkbox }>
                        <Form.Input type= "radio" name ="status" className={ input }/>
                        <Form.Label htmlFor="c" className= { label }>A caminho</Form.Label>
                    </Form.Field>
                    <Form.Field className={ checkbox }>
                        <Form.Input type= "radio" name ="status" className={ input }/>
                        <Form.Label htmlFor="d" className= { label }>Entregue</Form.Label>
                    </Form.Field>
                </div>
                
                
                <Form.Button type="submit">Atualizar Status</Form.Button>
            </Form>
            
        </>
    )
}