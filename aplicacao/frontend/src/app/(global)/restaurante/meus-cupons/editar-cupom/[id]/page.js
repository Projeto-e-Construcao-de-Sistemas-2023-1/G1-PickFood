'use client';

import Form from "@/components/Form";
import Retornar from "@/components/Retornar";
import TituloPagina from "@/components/TituloPagina";
import {
    margin,
    excluir
} from "./styles.module.scss";
import { AuthContext } from "@/contexts";
import { mensagens } from "@/erros/mensagens";
import { atualizarCupom, buscarCupomPorId, criarCupom, excluirCupom } from "@/services/cupom";
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
                valor: cupom.valor,
                precoMinimo: cupom.precoMinimo
            }
        }
    });
    const [sucesso, setSucesso] = useState(false);

    const editar = (data) => {
        
        atualizarCupom(id, {...data});

        setSucesso(true);
    }

    const removerCupom = () => {
        excluirCupom(id);

        router.push("/restaurante/meus-cupons");
    }

    return(
        <div>
            <Retornar navigate={() => router.push("restaurante/meus-cupons") } />
            <TituloPagina textAlign="center">Editar Cupom</TituloPagina>
            <Form onSubmit={ tratarFormulario(editar) }>
                <Form.Erros erros={ erros }/>
                <Form.Sucesso ativo={ sucesso }>Cupom editado com sucesso!</Form.Sucesso>

                <Form.Field>
                    <Form.Label>Título</Form.Label>
                    <Form.Input
                        type={ "text" }
                        registrar={{ ...registrar("titulo", { required: mensagens.required("título")}) }}
                    />
                </Form.Field>
                <Form.Field>
                    <Form.Label>Valor</Form.Label>
                    <Form.Input step=".01" type={ "number" } registrar={{ ...registrar("valor", { required: mensagens.required("valor")}) }}/>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Preço mínimo</Form.Label>
                    <Form.Input step=".01" type={ "number" } registrar={{ ...registrar("precoMinimo", { required: mensagens.required("Preço mínimo")}) }}/>
                </Form.Field>
                <div className={ margin }>
                    <Form.Button>Editar</Form.Button>
                    <div className={ excluir } onClick={() => removerCupom() }>Excluir cupom</div>
                </div>
            </Form>
        </div>
    )
}

export default EditarCupom;