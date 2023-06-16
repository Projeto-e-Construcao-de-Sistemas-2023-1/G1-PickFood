'use client';

import Form from "@/components/Form";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import { useForm } from "react-hook-form";
import { 
    title,
    center,
    forms,
    arrow,
    logo
} from "./styles.module.scss"
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { CadastroRestauranteContext } from "../layout";
import { mensagens } from "@/erros/mensagens";
import TituloPagina from "@/components/TituloPagina";

export default function Cadastro2() {

    const { dados, definirDados } = useContext(CadastroRestauranteContext);

    const router = useRouter();

    const { register, handleSubmit: submit, formState: { errors } } = useForm(); 

    const handleSubmit = (data) => {

        const { telefone, taxaEntrega, horarioAbertura, horarioFechamento} = data;


        definirDados({
            ...dados,
            telefone,
            taxaEntrega,
            horarioAbertura,
            horarioFechamento
        });

        console.log(dados);

        router.push("/auth/restaurante/cadastro3");
    }

    return (
        <Container>
            <Link href={"auth/restaurante/cadastro1"}>
                <Image
                src="/icons/back.svg"
                width={ 21 }
                height={ 21 }
                className={ arrow }
                alt="Icone de seta apontando para trás."
                />
            </Link>

            <Logo className={ logo }/>
            
            <TituloPagina>Informações Adicionais</TituloPagina>
             

            <div className={forms}>
                <Form onSubmit={ submit(handleSubmit) }>
                    <Form.Erros erros = { errors }/>
                    <Form.Field>
                        <Form.Label>DDD + Número</Form.Label>
                            <Form.Input registrar={{ ...register("telefone", { 
                                required: mensagens.required("telefone"), 
                                minLength: { message: mensagens.minLength("telefone", 11), value: 11 }, 
                                onChange: (e) => {

                                    const valor = e.target.value;

                                    const apenasNumeros = /^\d+$/;

                                    for (const indice in valor) {
                                        if (!apenasNumeros.test(valor[indice])) {
                                            e.target.value = valor.substring(0, indice);
                                        }
                                    }

                                    if (valor.length > 11) {
                                        e.target.value = valor.substring(0, 11);
                                    }
                            } }) }} 
                            type={ "text" }/>
                    </Form.Field>
                    
                    <Form.Field>
                        <Form.Label>Horário de Abertura</Form.Label>
                            <Form.Input type="time" registrar = {{ ...register("horarioAbertura", { required: mensagens.required("horarioAbertura")}) }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Horário de Fechamento</Form.Label>
                            <Form.Input type="time" registrar = {{ ...register("horarioFechamento", { required: mensagens.required("horarioFechamento") }) }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Taxa de Entrega</Form.Label>
                            <Form.Input type="number" registrar = {{ ...register("taxaEntrega", { required: mensagens.required("taxaEntrega") }) }}/>
                    </Form.Field>
                    
                    <Form.Button type="submit">Continuar</Form.Button>  
                </Form>
            </div>
        </Container>
    )
}