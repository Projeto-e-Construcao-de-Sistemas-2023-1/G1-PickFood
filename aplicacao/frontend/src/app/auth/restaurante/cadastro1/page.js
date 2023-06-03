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

export default function Cadastro1() {

    const { register, handleSubmit: submit, formState: { errors } } = useForm();

    const { definirDados } = useContext(CadastroRestauranteContext);

    const router = useRouter();

    const handleSubmit = (data) => {

        const { email, senha, razao_social, nome_fantasia, cnpj} = data;

        // request.post("restaurantes", {
        //      email,
        //      senha,
        //      razao_Social,
        //      nome_Fantasia,
        //      cnpj
        //  })
    
       definirDados({
            email,
            senha,
            razao_social,
            nome_fantasia,
            cnpj
         })
    }

    return (
        <Container>

            <Link href={""}>
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
            { Object.keys(errors).length !== 0 && <div style={{ color: "red" }}> Dados inválidos </div> }
            
            <div className={forms}>         
                <Form onSubmit={ handleSubmit }>
                    <Form.Field>
                        <Form.Label>Email</Form.Label>
                        <Form.Input type="email" { ...register("email", { required: true }) }/>
                    </Form.Field>
                    
                    <Form.Field>
                        <Form.Label>Senha</Form.Label>
                        <Form.Input type="senha" { ...register("senha", { required: true }) }/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Nome Fantasia</Form.Label>
                        <Form.Input type="nome_fantasia" { ...register("nome_fantasia", { required: true }) }/>
                    </Form.Field>
                    
                    <Form.Field>
                        <Form.Label>Razão Social</Form.Label>
                        <Form.Input type="razao_social" { ...register("razao_social", { required: true }) }/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>CNPJ</Form.Label>
                        <Form.Input type="cnpj" { ...register("cnpj", { required: true }) }/>
                    </Form.Field>

                    <Form.Button type= "submit">Continuar</Form.Button> 
                </Form>
            </div>
        
        </Container>
    )
}