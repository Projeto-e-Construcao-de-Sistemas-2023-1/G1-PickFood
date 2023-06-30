'use client';
import Container from "@/components/Container";
import Form from "@/components/Form";
import { mensagens } from "@/erros/mensagens";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
    forms,
    imagem
} from "./styles.module.scss";
import { atualizarPrato, buscarPratoPorId } from "@/services/prato";
import Retornar from "@/components/Retornar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditarPrato({ params: { id } }) {

    const router = useRouter();
    const [ativo, setAtivo] = useState(false);

    const { register: registrar, handleSubmit: tratarFormulario, watch, formState: { errors: erros } } = useForm({
        defaultValues: async () => {

            const prato = buscarPratoPorId(id);

            return {
                nome: prato.nome,
                tipo: prato.tipo,
                preco: prato.preco,
                descricao: prato.descricao,
                foto: prato.foto
            }
        }
    });

    const imagemValida = /^https:\/\/[\w.-]+\/.*\.(jpg|png|jpeg)$/i;

    const editar = (data) => {

        atualizarPrato(id, data);

        setAtivo(true);

        console.log(data);
    }

    return (
        <Container>
            <Retornar navigate={ () => router.back() } />
                {
                    !imagemValida.test(watch("imagem")) ?
                    <Image
                        src={"/icons/foto.svg"}
                        width={87}
                        height={87}
                        className={imagem}

                        alt="."
                    />
                    :
                    <Image
                        src={watch("imagem")}
                        width={120}
                        height={120}
                        style={{ objectFit: "cover" }}
                        className={imagem}
                        alt="."
                    />
                }

            <div className={forms}>
                <Form onSubmit={ tratarFormulario(editar) }> 

                <Form.Sucesso ativo={ ativo }>Perfil atualizado com sucesso</Form.Sucesso>
                    <Form.Erros erros={ erros } />

                    <Form.Field>
                        <Form.Label>Nome</Form.Label>
                        <Form.Input  type={ "text" } registrar={{ ...registrar("nome", {
                            required: mensagens.required("nome")
                        }) }}/>
                    </Form.Field>
                    
                    <Form.Field>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Input type={ "text" } registrar={{ ...registrar("tipo", {
                            required: mensagens.required("tipo")
                        }) }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Preço</Form.Label>
                        <Form.Input type={ "number" } registrar={{ ...registrar("preco", {
                            required: mensagens.required("preco")
                        }) }}/>
                    </Form.Field>
                
                    <Form.Field>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Input  type={ "text" } registrar={{ ...registrar("descricao", {
                            required: mensagens.required("descricao")
                        }) }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Link da imagem</Form.Label>
                        <Form.Input type={ "text" } registrar={{ ...registrar("foto") }}/>
                    </Form.Field>

                    <Form.Button >Continuar</Form.Button>
                    
                </Form>
            </div>
        </Container>
    )
}