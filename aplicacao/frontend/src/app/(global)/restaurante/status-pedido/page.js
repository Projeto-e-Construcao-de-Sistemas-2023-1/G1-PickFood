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

export default function Pedidos() {

    const router = useRouter();

    const { register, handleSubmit: submit, formState: { errors } } = useForm();

    const handleSubmit = (data) => {

        const { status } = data;

        console.log(data);

        definirDados({
            ...dados,
        });

        router.push("/restaurante/pedidos");
    }     

    return (
        <>
            <div className={texto}>
                <div className={ nome }>Nome do cliente
                <div className={ codigo }>Código do Pedidos</div>
                </div>
                    <div className={ status }>Status atual:
                    <div className={ codigo }>status</div>
                </div>
            </div>

            <StatusPedido/>

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
                        <Form.Input type= "checkbox" name ="a" className={ input }/>
                        <Form.Label for="a" className= { label }>Confirmar pedido</Form.Label>
                    </Form.Field>
                    <Form.Field className={ checkbox }>
                        <Form.Input type= "checkbox" name ="b" className={ input }/>
                        <Form.Label for="b" className= { label }>Em preparação</Form.Label>
                    </Form.Field>
                    <Form.Field className={ checkbox }>
                        <Form.Input type= "checkbox" name ="c" className={ input }/>
                        <Form.Label for="c" className= { label }>A caminho</Form.Label>
                    </Form.Field>
                    <Form.Field className={ checkbox }>
                        <Form.Input type= "checkbox" name ="d" className={ input }/>
                        <Form.Label for="d" className= { label }>Entregue</Form.Label>
                    </Form.Field>
                </div>
                
                
                <Form.Button type="submit">Atualizar Status</Form.Button>
            </Form>
            
        </>
    )
}