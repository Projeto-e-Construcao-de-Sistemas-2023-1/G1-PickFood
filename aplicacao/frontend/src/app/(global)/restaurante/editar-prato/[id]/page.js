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
import prato from "@/fixtures/prato";

export default function EditarPrato() {

    const { register: registrar, handleSubmit: tratarFormulario, watch, formState: { errors: erros } } = useForm();

    const imagemValida = /^https:\/\/[\w.-]+\/.*\.(jpg|png|jpeg)$/i;

    const editar = (data) => {
        console.log(data);
    }

    return (
        <Container>
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
                    <Form.Erros erros={ erros } />

                    <Form.Field>
                        <Form.Label>Nome</Form.Label>
                        <Form.Input defaultValue={ prato.nome } type={ "text" } registrar={{ ...registrar("nome", {
                            required: mensagens.required("nome")
                        }) }}/>
                    </Form.Field>
                    
                    <Form.Field>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Input defaultValue={ prato.tipo } type={ "text" } registrar={{ ...registrar("tipo", {
                            required: mensagens.required("tipo")
                        }) }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Preço</Form.Label>
                        <Form.Input defaultValue={ prato.preco } type={ "number" } registrar={{ ...registrar("preco", {
                            required: mensagens.required("preco")
                        }) }}/>
                    </Form.Field>
                
                    <Form.Field>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Input defaultValue={ prato.descricao } type={ "text" } registrar={{ ...registrar("descricao", {
                            required: mensagens.required("descricao")
                        }) }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Url da imagem</Form.Label>
                        <Form.Input defaultValue={ prato.foto } type={ "text" } registrar={{ ...registrar("imagem") }}/>
                    </Form.Field>

                    <Form.Button >Continuar</Form.Button>
                    
                </Form>
            </div>
        </Container>
    )
}