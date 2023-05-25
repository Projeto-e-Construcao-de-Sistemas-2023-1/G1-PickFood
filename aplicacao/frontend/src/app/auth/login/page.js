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
import { useContext } from "react";
import { AuthContext } from "@/app/layout";

export default function Login() {

    const router = useRouter();

    const { definirUsuario } = useContext(AuthContext);

    const authenticate = (e) => {
        e.preventDefault();

        definirUsuario({
            nome: "pedro"
        });

        localStorage.setItem("usuario", {
            nome: "pedro"
        })
        router.push("/cliente/home");
    }

    return (
        <>
            <Image
                src="/icons/back.svg"
                width={ 21 }
                height={ 21 }
                className={ arrow }
                alt="Icone de seta apontando para trás."
            />
           <Logo className={ logo }/>
            <Form>
                <Form.Field>
                    <Form.Label>Email</Form.Label>
                    <Form.Input/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label>Senha</Form.Label>
                    <Form.Input/>
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

                <Link href={ "" } className={ [link, center].join(' ') }>Quero me tornar um parceiro</Link>
            </div>
        </>
    )
}