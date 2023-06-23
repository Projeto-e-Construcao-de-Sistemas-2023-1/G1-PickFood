'use client';

import Form from "@/components/Form";
import Retornar from "@/components/Retornar";
import TituloPagina from "@/components/TituloPagina";
import { AuthContext } from "@/contexts";
import { mensagens } from "@/erros/mensagens";
import { criarCupom } from "@/services/cupom";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

const CriarCupom = () => {
    
    const router = useRouter();
    const { usuario } = useContext(AuthContext);
    const { register: registrar, handleSubmit: tratarFormulario, formState: { errors: erros } } = useForm();
    const [sucesso, setSucesso] = useState(false);

    const criar = (data) => {
        
        criarCupom({...data, idRestaurante: usuario.id});

        setSucesso(true);
    }

    return(
        <div>
            <Retornar navigate={() => router.push("restaurante/meus-cupons") } />
            <TituloPagina textAlign="center">Criar Cupom</TituloPagina>
            <Form onSubmit={ tratarFormulario(criar) }>
                <Form.Erros erros={ erros }/>
                <Form.Sucesso ativo={ sucesso }>Cupom criado com sucesso!</Form.Sucesso>

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