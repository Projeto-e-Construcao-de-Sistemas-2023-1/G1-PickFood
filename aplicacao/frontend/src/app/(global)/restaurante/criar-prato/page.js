'use client';

import Form from "@/components/Form";
import Container from "@/components/Container";
import Image from "next/image";
import {
    forms,
    imagem
} from "./styles.module.scss"
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { mensagens } from "@/erros/mensagens";
import { criarPrato } from "@/services/prato";
import { AuthContext } from "@/contexts";
import { useRouter } from "next/navigation";

export default function CriarPrato() {

    const { register: registrar, handleSubmit: tratarFormulario, watch,
        formState: { errors: erros } } = useForm();

    const { usuario } = useContext(AuthContext);

    const imagemValida = /^https:\/\/[\w.-]+\/.*\.(jpg|png|jpeg)$/i;

    const router = useRouter();

    const criar = (data) => {
        console.log(data);

        criarPrato({
            idRestaurante: usuario.id,
            ...data
        });

        router.push("/restaurante/cardapio");
    }
    // Falta só colocar o input de seleção de restrição
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
                    <div>
                        <Image
                            src={watch("imagem")}
                            width={120}
                            height={120}
                            style={{ objectFit: "cover" }}
                            className={imagem}
                            alt="."
                        />
                    </div>
            }

            <Form onSubmit={tratarFormulario(criar)}>

                <Form.Erros erros={erros} />

                <Form.Field>
                    <Form.Label>Nome</Form.Label>
                    <Form.Input type={"text"} registrar={{
                        ...registrar("nome",
                            { required: mensagens.required("Nome") })
                    }} />
                </Form.Field>

                <Form.Field>
                    <Form.Label>Tipo</Form.Label>
                    <Form.Input type={"text"} registrar={{
                        ...registrar("tipo",
                            { required: mensagens.required("Tipo") })
                    }} />
                </Form.Field>

                <Form.Field>
                    <Form.Label>Preço</Form.Label>
                    <Form.Input type={"number"} registrar={{
                        ...registrar("preco",
                            { required: mensagens.required("Preço") })
                    }} />
                </Form.Field>

                <Form.Field>
                    <Form.Label>Descrição</Form.Label>
                    <Form.Input type={"text"} registrar={{
                        ...registrar("descricao",
                            { required: mensagens.required("Descrição") })
                    }} />
                </Form.Field>

                <Form.Field>
                    <Form.Label>Link da imagem</Form.Label>
                    <Form.Input registrar={{ ...registrar("foto") }} type={"text"}></Form.Input>
                </Form.Field>

                <Form.Button>Continuar</Form.Button>
            </Form>
        </Container>
    )
}