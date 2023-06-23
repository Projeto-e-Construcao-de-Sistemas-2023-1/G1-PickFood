'use client';

import Form from "@/components/Form";
import Retornar from "@/components/Retornar";
import TituloPagina from "@/components/TituloPagina";
import { mensagens } from "@/erros/mensagens";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const CriarCupom = () => {
    
    const router = useRouter();
    const { register: registrar, handleSubmit: tratarFormulario, formState: { errors: erros } } = useForm();

    const criarCupom = (data) => {
        console.log(data);
    }

    return(
        <div>
            <Retornar navigate={() => router.push("restaurante/meus-cupons") } />
            <TituloPagina textAlign="center">Criar Cupom</TituloPagina>
            <Form onSubmit={ tratarFormulario(criarCupom) }>
                <Form.Erros erros={ erros }/>

                <Form.Field>
                    <Form.Label>Título</Form.Label>
                    <Form.Input
                        type={ "text" }
                        registrar={{ ...registrar("titulo", { required: mensagens.required("título")}) }}
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Label>Valor</Form.Label>
                    <Form.Input type={ "number" } registrar={{ ...registrar("valor", { required: mensagens.required("valor")}) }}/>
                </Form.Field>
                <Form.Button>Criar</Form.Button>
            </Form>
        </div>
    )
}

export default CriarCupom;