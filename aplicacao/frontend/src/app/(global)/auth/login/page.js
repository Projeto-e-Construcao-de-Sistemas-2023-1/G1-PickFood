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
import { useRouter, useSearchParams } from "next/navigation";
import Logo from "@/components/Logo";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts";
import request from "@/services/axios";
import { useForm } from "react-hook-form";
import { mensagens } from "@/erros/mensagens";
import { buscarClientePorEmail, criarCliente } from "@/services/cliente";
import { buscarRestaurantePorEmail } from "@/services/restaurante";
import axios from "axios";
import popular from "@/scripts";

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
    const search = useSearchParams();

    useEffect(() => {

        console.log(search.get("code"));
    
        if (search.get("code")) {
            console.log("pegando link")
            axios.post("http://localhost:8080/api/v1/token", {code: search.get("code")}).then(() => {

                console.log("autentiquei");

                axios.get("http://localhost:8080/api/v1/me").then(res => {
                    console.log(res.data);

                    let cliente = buscarClientePorEmail(res.data.data.emailAddresses[0].value);
                   

                    if (cliente === null) {
                        
                        cliente = criarCliente({nome: res.data.data.names[0].displayName, email: res.data.data.emailAddresses[0].value, cpf: "", senha: "", telefone: ""})
                    }

                    console.log(cliente);

                    const usuario = {
                        id: cliente.id,
                        email: cliente.email,
                        nome: cliente.nome
                    }

                    setUsuario(usuario);

                    localStorage.setItem("usuario", JSON.stringify(usuario));


                    router.push("/cliente/home")
                })
            });
        }
    }, [search, setUsuario, router]);

    const autenticarGoogle = () => {
        axios.get("http://localhost:8080/api/v1/link").then(res => {
            window.location.assign(res.data);
        });
    }

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
                email: cliente.email,
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
            email: restaurante.email,
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
                    <Form.Label>E-mail</Form.Label>
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
                <button className={ botaoGoogle } onClick={ autenticarGoogle }>
                    <Image src="/google.png" width={17} height={17} alt="logo do google"/>
                    Entrar com Google
                </button>

                <Link href={ "/auth/restaurante/cadastro1" } className={ [link, center].join(' ') }>Quero me tornar um parceiro</Link>
            </div>

            <div onClick={ popular }>Popular</div>
        </>
    )
}