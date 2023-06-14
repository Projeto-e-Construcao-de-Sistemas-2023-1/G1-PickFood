'use client';

import Logo from "@/components/Logo";
import { logo, arrow } from "./styles.module.scss";
import Image from "next/image";
import Form from "@/components/Form"; 
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts";
import request from "@/services/axios";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import Link from "next/link";
import rotas from "@/rotas"
import { mensagens } from "@/erros/mensagens";
import { criarCliente } from "@/services/cliente";

export default function CadastroCliente() {

    const { setUsuario } = useContext(AuthContext);
    const { 
        register: registrar, 
        handleSubmit: tratarFormulario, 
        setError,
        clearErrors,
        formState: { errors: erros }, 
        watch
    } = useForm();
    const router = useRouter();

    useEffect(() => {
        console.log(erros);
    })

    const cadastrar = (data) => {


        console.log(data);
        let cliente;

        try {
            cliente = criarCliente(data);
        } catch (e) {
            setError("EntidadeDuplicada", { message: "Dados inválidos" });

            return;
        }

        // request.post("user", {
        //     nome,
        //     email,
        //     senha,
        //     cpf,
        //     telefone
        // })
        // .then((res) => {
        //     const dados = res.data;

        const usuario = {
            id: cliente.id,
            nome: cliente.nome,
            token: ""
        }

        setUsuario(usuario);

        localStorage.setItem("usuario", JSON.stringify(usuario));

        router.push(rotas.cliente.home.url());
    }
            
    return(
        <>
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
            <Form onSubmit={ tratarFormulario(cadastrar) }>

                <Form.Erros erros={ erros } />

                <Form.Field>
                    <Form.Label>Nome e sobrenome</Form.Label>
                    <Form.Input 
                        registrar={{ ...registrar("nome", { 
                            required: mensagens.required("nome"), 
                            minLength: { message: mensagens.minLength("nome", 3), value: 3} 
                        }) }} 
                        type={ "text" }/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Email</Form.Label>
                    <Form.Input 
                        registrar={{ ...registrar("email", { required: mensagens.required("email") })} } 
                        type={ "email" }/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Senha</Form.Label>
                    <Form.Input 
                        registrar={{ ...registrar("senha", { 
                            required: mensagens.required("senha"), 
                            minLength: { message: mensagens.minLength("senha", 8), value: 8}
                        }) }} 
                        type={ "password" }/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Confirmar senha</Form.Label>
                    <Form.Input 
                        registrar={{ ...registrar("confirmacao_senha", { 
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
                    <Form.Label>CPF</Form.Label>
                    <Form.Input 
                        registrar={{ ...registrar("cpf", { 
                            required: mensagens.required("cpf"), 
                            minLength: { message: mensagens.minLength("cpf", 11), value: 11}, 
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
                    <Form.Label>Celular (DDD + número)</Form.Label>
                    <Form.Input 
                        registrar={{ ...registrar("telefone", { 
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
                
                <Form.Button onClick={ () => clearErrors() }>Cadastrar</Form.Button>
            </Form>
        </>
    )
}