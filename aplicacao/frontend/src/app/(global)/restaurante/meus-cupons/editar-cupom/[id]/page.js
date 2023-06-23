'use client';

import Form from "@/components/Form";
import Retornar from "@/components/Retornar";
import TituloPagina from "@/components/TituloPagina";
import { AuthContext } from "@/contexts";
import { mensagens } from "@/erros/mensagens";
import { atualizarCupom, buscarCupomPorId, criarCupom } from "@/services/cupom";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

const EditarCupom = ({ params: { id }}) => {
    
    const router = useRouter();

    const { register: registrar, handleSubmit: tratarFormulario, formState: { errors: erros } } = useForm({
        defaultValues: async () => {
            const cupom = buscarCupomPorId(id);

            return {
                titulo: cupom.titulo,
                valor: cupom.valor
            } 
        }
    });
    const [sucesso, setSucesso] = useState(false);

    const editar = (data) => {
        
        atualizarCupom(id, {...data});

        setSucesso(true);
    }

    return(
        <div>
            <Retornar navigate={() => router.push("restaurante/meus-cupons") } />
            <TituloPagina textAlign="center">Editar Cupom</TituloPagina>
            <Form onSubmit={ tratarFormulario(editar) }>
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
                <Form.Button>Editar</Form.Button>
            </Form>
        </div>
    )
}

export default EditarCupom;