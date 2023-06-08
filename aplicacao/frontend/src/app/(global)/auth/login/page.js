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

export default function Login() {

    const router = useRouter();

    const { 
        register: registrar, 
        handleSubmit: tratarFormulario, 
        setError,
        formState: { errors: erros } 
    } = useForm();

    const { definirUsuario } = useContext(AuthContext);

    const autenticar = (data) => {

        console.log(data);
        
        // e.preventDefault();

        // const usuariosJaCadastrados = JSON.parse(localStorage.getItem("usuarios"));

        // console.log(email);
        // console.log(senha)

        // for (const user of usuariosJaCadastrados) {
        //     if (user.senha == senha && user.email == email) {

        //         definirUsuario({
        //             id: user.id,
        //             email: user.email,
        //             nome: user.nome,
        //             tipo: user.tipo
        //         });
        //         if(email != "" || senha != ""){
        //             if (user.tipo == "cliente") {
        //                 router.push("/cliente/home")
        //             } else {
        //                 router.push("/restaurante/home")
        //             }
        //         } 
        //         break;
        //     }
        // }
        
        // request.post("user/login", {
        //     email,
        //     senha
        // })
        // .then((res) => {

        //     const dados = res.data;

            

        //     if (dados.type === "restaurante") {
        //         definirUsuario({
        //             id: dados.idRestaurante,
        //             email: dados.email,
        //             tipo: dados.type
        //         })

        //         router.push("/restaurante/home");
        //     } else {
        //         definirUsuario({
        //             id: dados.idCliente,
        //             email: dados.email,
        //             tipo: dados.type
        //         })

        //         router.push("/cliente/home");
        //     }

        // })
        // .catch((err) => {
        //     console.log(err);

        //     router.push("/auth/login");
        // })

    }

    return (
        <>
            <Link href={ "" }>
                <Image
                    src="/icons/back.svg"
                    width={ 21 }
                    height={ 21 }
                    className={ arrow }
                    alt="Icone de seta apontando para trás."
                />
            </Link>
            
            <Logo className={ logo }/>
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

                <Form.Button>Entrar</Form.Button>
            </Form>

            <div className={ links }>
                <Link href={ "" } className={ link }>Esqueci minha senha</Link>
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