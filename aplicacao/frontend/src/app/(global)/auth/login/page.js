'use client';

import Form from "@/components/Form";
import Container from "@/components/Container";
import Image from "next/image";
import { 
    logo, 
    divider,
    links, 
    link,
    center,
    arrow,
    botaoGoogle,
    containerInferior
} from "./styles.module.scss"
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts";
import request from "@/services/axios";
import { useForm } from "react-hook-form";
import { mensagens } from "@/erros/mensagens";
import { buscarClientePorEmail } from "@/services/cliente";
import { buscarRestaurantePorEmail } from "@/services/restaurante";
import axios from "axios";

export default function Login() {

    const router = useRouter();
    const { 
        register: registrar, 
        handleSubmit: tratarFormulario, 
        setError,
        clearErrors,
        formState: { errors: erros } 
    } = useForm();

    const { setUsuario } = useContext(AuthContext);

    const autenticar = (data) => {

        console.log(data);

        let usuario;
        let restaurante;
        let cliente;
        
        
        cliente = buscarClientePorEmail(data.email);
        restaurante = buscarRestaurantePorEmail(data.email);

        if (cliente === null && restaurante === null) {

            setError("EntidadeNaoEncontrada", {
                message: "Dádos inválidos"
            });

            return;
        }

        if (restaurante === null) {
            if (cliente.senha !== data.senha) {
                setError("SenhaIncorreta", {
                    message: "Dádos inválidos"
                });
    
                return;
            }

            usuario = {
                id: cliente.id,
                nome: cliente.nome,
                token: ""
            };

            setUsuario(usuario)
            localStorage.setItem("usuario", JSON.stringify(usuario));

            router.push("/cliente/home");

            return;
        }

        if (restaurante.senha !== data.senha) {
            setError("SenhaIncorreta", {
                message: "Dádos inválidos"
            });

            return;
        }

        usuario = {
            id: restaurante.id,
            nome: restaurante.nome_fantasia,
            token: ""
        };

        setUsuario(usuario)
        localStorage.setItem("usuario", JSON.stringify(usuario));

        router.push("/restaurante/home");

        return;


    }

    return (
        <>
            
            <Form onSubmit={ tratarFormulario(autenticar) }>

                <Form.Erros erros={ erros }/>
                

                <Form.Field>
                    <Form.Label>Email</Form.Label>
                    <Form.Input registrar={{ ...registrar("email", { required: mensagens.required("email") } ) }} type={ "email" }/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label>Senha</Form.Label>
                    <Form.Input registrar={{ ...registrar("senha", { required: mensagens.required("senha") }) }} type={ "password" }/>
                </Form.Field>

                <Form.Button onClick={() => clearErrors()}>Entrar</Form.Button>
            </Form>

            <div className={ links }>
                <Link href={ "/auth/email-confirmacao" } className={ link }>Esqueci minha senha</Link>
                <Link href={ "/auth/cliente/cadastro" } className={ link }>Criar conta</Link>
            </div>

            <div className={ divider }></div>

            <div className={ containerInferior }>
                <button className={ botaoGoogle }>
                    <Image src="/google.png" width={17} height={17} alt="logo do google"/>
                    Entrar com Google
                </button>

                <Link href={ "/auth/restaurante/cadastro1" } className={ [link, center].join(' ') }>Quero me tornar um parceiro</Link>
            </div>
        </>
    )
}