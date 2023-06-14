'use client';

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import Form from "@/components/Form";
import { useForm } from "react-hook-form";
import { 
    title,
    center,
    forms,
    arrow,
    logo,
} from "./styles.module.scss"
import { useContext, useState } from "react";
import { CadastroRestauranteContext } from "../layout";
import { useRouter } from "next/navigation";
import rotas from "@/rotas";
import { mensagens } from "@/erros/mensagens";
import TituloPagina from "@/components/TituloPagina";

export default function Cadastro1() {

    const { watch, register, handleSubmit: submit, formState: { errors: erros } } = useForm();

    const { definirDados } = useContext(CadastroRestauranteContext);

    const router = useRouter();

    const handleSubmit = (data) => {

        const { email, senha, razao_social, nome_fantasia, cnpj} = data;

        console.log(data);
        
        definirDados({
            email,
            senha,
            razao_social,
            nome_fantasia,
            cnpj
        })

        router.push(rotas.auth.restaurante.cadastro2.url());
    }

    return (
        <Container>
            <Link href={"/auth/login"}>
            <Image
                src="/icons/back.svg"
                width={ 21 }
                height={ 21 }
                className={ arrow }
                alt="Icone de seta apontando para trás."
            />
            </Link>

            <Logo className={ logo }/>

            <TituloPagina>Informações do Restaurante</TituloPagina>
             
            <div className={forms}>         
                <Form onSubmit={ submit(handleSubmit) }>
                    <Form.Erros erros={erros}/>
                    <Form.Field>
                        <Form.Label>Email</Form.Label>
                        <Form.Input type="email" registrar = {{ ...register("email", {required: mensagens.required("email")}) }}/>
                    </Form.Field>
                    
                    <Form.Field>
                    <Form.Label>Senha</Form.Label>
                    <Form.Input 
                        registrar={{ ...register("senha", { 
                            required: mensagens.required("senha"), 
                            minLength: { message: mensagens.minLength("senha", 8), value: 8}
                        }) }} 
                        type={ "password" }/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Confirmar senha</Form.Label>
                        <Form.Input 
                            registrar={{ ...register("confirmacao_senha", { 
                                required: mensagens.required("confirmar senha"), 
                                minLength: { message: mensagens.minLength("senha", 8), value: 8}, 
                                validate: (value) => {
                                    const senha = watch("senha");

                                    if (senha !== value) {
                                        return "As senhas nao coincidem"
                                    }

                                    return true;
                            } }) }} 
                            type={ "password" }/>
                </Form.Field>

                    <Form.Field>
                        <Form.Label>Nome Fantasia</Form.Label>
                        <Form.Input type="text" registrar = {{ ...register("nome_fantasia", { required: mensagens.required("nome_fantasia") }) }}/>
                    </Form.Field>
                    
                    <Form.Field>
                        <Form.Label>Razão Social</Form.Label>
                        <Form.Input type="text" registrar = {{ ...register("razao_social", { required: mensagens.required("razao_social") }) }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>CNPJ</Form.Label>
                            <Form.Input 
                            registrar={{ ...register("cnpj", { 
                                required: mensagens.required("cnpj"), 
                                minLength: { message: mensagens.minLength("cnpj", 14), value: 14}, 
                                onChange: (e) => {
                                    const valor = e.target.value;
                                    
                                    const apenasNumeros = /^\d+$/;

                                    for (const indice in valor) {
                                        if (!apenasNumeros.test(valor[indice])) {
                                            e.target.value = valor.substring(0, indice);
                                        }
                                    }

                                    if (valor.length > 14) {
                                        e.target.value = valor.substring(0, 14);
                                    }
                            } }) }} 
                            type={ "text" }/>
                    </Form.Field>

                    <Form.Button type= "submit">Continuar</Form.Button> 
                </Form>
            </div>
        </Container>
    )
}