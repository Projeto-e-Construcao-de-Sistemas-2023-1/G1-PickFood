'use client';

import Form from "@/components/Form";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import { 
    title,
    center,
    forms,
    arrow,
    logo
} from "./styles.module.scss"
import { useContext, useState } from "react";
import { CadastroRestauranteContext } from "../layout";
import { useRouter } from "next/navigation";

export default function Cadastro1() {

    const { definirDados } = useContext(CadastroRestauranteContext);

    const router = useRouter();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nomeFantasia, setNomeFantasia] = useState("");
    const [razaoSocial, setRazaoSocial] = useState("");
    const [cnpj, setCnpj] = useState("");

    const handleEmail = (e) => {

        setEmail(e.target.value);
    }

    const handleSenha = (e) => {

        setSenha(e.target.value);
    } 

    const handleNomeFantasia = (e) => {

        setNomeFantasia(e.target.value);
    }

    const handleRazaoSocial = (e) => {

        setRazaoSocial(e.target.value);
    }

    const handleCnpj = (e) => {

        setCnpj(e.target.value)
    }

    const cadastrar = () => {

        definirDados({
            email,
            senha,
            razaoSocial,
            nomeFantasia,
            cnpj
        });

        router.push("/auth/restaurante/cadastro2");
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
             
            
            <h2 className={ [center, title].join(' ') }>Informações do restaurante</h2>

            <div className={forms}>
            <Form>
                <Form.Field>
                    <Form.Label>Email</Form.Label>
                    <Form.Input value={ email } onChange={ handleEmail }/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label>Senha</Form.Label>
                    <Form.Input value={ senha } type={ "password" } onChange={ handleSenha }/>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Confirme sua senha</Form.Label>
                    <Form.Input /*value={ ConfirmacaoSenha } onChange={ handleSenha }*/ type={"password"}/>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Nome Fantasia</Form.Label>
                    <Form.Input value={ nomeFantasia } onChange={ handleNomeFantasia }/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label>Razão Social</Form.Label>
                    <Form.Input value={ razaoSocial} onChange={ handleRazaoSocial}/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Input value={ cnpj } onChange={ handleCnpj }/>
                </Form.Field>

                <Form.Button onClick={ cadastrar }>Continuar</Form.Button> 
                
                
            </Form>
            </div>

        </Container>
    )
}