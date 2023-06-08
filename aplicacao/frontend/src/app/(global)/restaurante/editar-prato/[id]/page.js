'use client';
import Form from "@/components/Form";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { 
    forms,
    imagem
} from "./styles.module.scss"
import { useForm } from "react-hook-form";
import { mensagens } from "@/erros/mensagens";

export default function EditarPrato() {

    const { register: registrar, handleSubmit: tratarFormulario, watch } = useForm();

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
                    

                    <Form.Field>
                        <Form.Label>Nome</Form.Label>
                        <Form.Input defaultValue={ "Nome do prato" } type={ "text" } registrar={{ ...registrar("nome", {
                            required: mensagens.required("nome")
                        }) }}/>
                    </Form.Field>
                    
                    <Form.Field>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Input defaultValue={ "Tipo do prato" } type={ "text" } registrar={{ ...registrar("tipo", {
                            required: mensagens.required("tipo")
                        }) }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Preço</Form.Label>
                        <Form.Input defaultValue={ "Preco do prato" } type={ "number" } registrar={{ ...registrar("preco", {
                            required: mensagens.required("preco")
                        }) }}/>
                    </Form.Field>
                
                    <Form.Field>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Input defaultValue={ "Descricao do prato" } type={ "text" } registrar={{ ...registrar("descricao", {
                            required: mensagens.required("descricao")
                        }) }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Url da imagem</Form.Label>
                        <Form.Input defaultValue={ "Url da imagem" } type={ "text" } registrar={{ ...registrar("imagem") }}/>
                    </Form.Field>

                    <Form.Button >Continuar</Form.Button>
                    
                </Form>
            </div>
        </Container>
    )
}