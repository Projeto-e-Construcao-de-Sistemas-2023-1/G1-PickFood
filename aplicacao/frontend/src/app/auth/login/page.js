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
import { useContext, useState } from "react";
import { AuthContext } from "@/app/layout";
import request from "@/services/axios";

export default function Login() {

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleEmail = (e) => {
        const valor = e.target.value;

        setEmail(valor);
    }

    const handleSenha = (e) => {
        const valor = e.target.value;

        setSenha(valor);
    }

    const { definirUsuario } = useContext(AuthContext);

    const authenticate = (e) => {
        e.preventDefault();

        request.post("user/login", {
            email,
            senha
        })
        .then((res) => {
            console.log(res.data);

            const dados = res.data;

            definirUsuario({
                id: dados.id,
                email: dados.email,
                tipo: dados.type
            })

            if (dados.type === "restaurante") {
                router.push("/restaurante/home");
            } else {
                router.push("/cliente/home");
            }

        })
        .catch((err) => {
            console.log(err);

            router.push("/auth/login");
        })

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
            <Form>
                <Form.Field>
                    <Form.Label>Email</Form.Label>
                    <Form.Input value={ email } onChange={ handleEmail }/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label>Senha</Form.Label>
                    <Form.Input value={ senha } onChange={ handleSenha } type={ "password" }/>
                </Form.Field>

                <Form.Button onClick={ authenticate }>Entrar</Form.Button>
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