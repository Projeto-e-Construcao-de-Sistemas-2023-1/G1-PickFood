'use client';

import Logo from "@/components/Logo";
import { logo, arrow } from "./styles.module.scss";
import Image from "next/image";
import Form from "@/components/Form"; 
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/layout";
import request from "@/services/axios";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import Link from "next/link";
import rotas from "../../../../rotas"

export default function CadastroCliente() {

    const { definirUsuario } = useContext(AuthContext);
    const { 
        register: registrar, 
        handleSubmit: tratarFormulario, 
        formState: { errors: erros }, 
        watch
    } = useForm();
    const router = useRouter();

    const cadastrar = (data) => {


        console.log(data);

        router.push(rotas.cliente.home.url());

        // request.post("user", {
        //     nome,
        //     email,
        //     senha,
        //     cpf,
        //     telefone
        // })
        // .then((res) => {
        //     const dados = res.data;
            
            

        //     router.push("/cliente/home")
            
        // })

        // const id = uuid();

        // const user = {
        //     id, 
        //     nome,
        //     email,
        // } 

        // const dados = {
        //     id,
        //     nome,
        //     email,
        //     senha,
        //     cpf,
        //     telefone,
        //     tipo: "cliente"
        // }

        // const clientesJaCadastratos = JSON.parse(localStorage.getItem("usuarios"));

        // if (clientesJaCadastratos === null || clientesJaCadastratos.length === 0) {
        //     localStorage.setItem("usuarios", JSON.stringify([dados]))
        // } else {
        //     localStorage.setItem("usuarios", JSON.stringify([dados, ...clientesJaCadastratos]))
        // }
        
        // definirUsuario(user);

        
        // router.push("/cliente/home");
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
            <div>{ Object.keys(erros).length !== 0 && "Dados inválidos" }</div>
            <Form onSubmit={ tratarFormulario(cadastrar) }>
                <Form.Field>
                    <Form.Label>Nome e sobrenome</Form.Label>
                    <Form.Input 
                    registrar={{ ...registrar("nome", { required: true, minLength: 3 }) }} 
                        type={ "text" }/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Email</Form.Label>
                    <Form.Input 
                        registrar={{ ...registrar("email", { required: true })} } 
                        type={ "email" }/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Senha</Form.Label>
                    <Form.Input 
                        registrar={{ ...registrar("senha", { required: true, minLength: 8 }) }} 
                        type={ "password" }/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Confirme sua senha</Form.Label>
                    <Form.Input 
                        registrar={{ ...registrar("confirmacao_senha", { required: true, minLength: 8, validate: (value) => {
                            const senha = watch("senha");

                            return senha === value;
                        } }) }} 
                        type={ "password" }/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>CPF</Form.Label>
                    <Form.Input 
                        registrar={{ ...registrar("cpf", { required: true, minLength: 11, maxLength: 11, onChange: (e) => {
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
                        registrar={{ ...registrar("telefone", { required: true, minLength: 11, maxLength: 11, onChange: (e) => {

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
                
                <Form.Button>Cadastrar</Form.Button>
            </Form>
        </>
    )
}