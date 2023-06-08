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

export default function Cadastro1() {

    const { register, handleSubmit: submit, formState: { errors: erros } } = useForm();

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
             
            <h2 className={ [center, title].join(' ') }>Informações do restaurante</h2>
            
            <div className={forms}>         
                <Form onSubmit={ submit(handleSubmit) }>
                    <Form.Erros erros={erros}/>
                    <Form.Field>
                        <Form.Label>Email</Form.Label>
                        <Form.Input type="email" registrar = {{ ...register("email", { required: true }) }}/>
                    </Form.Field>
                    
                    <Form.Field>
                        <Form.Label>Senha</Form.Label>
                        <Form.Input type="password" registrar = {{ ...register("senha", { required: true }) }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Confirme sua senha</Form.Label>
                        <Form.Input 
                            registrar={{ ...register("confirmacao_senha", { required: mensagens.required("Confirme sua senha"), minLength: {value: 8, message: mensagens.minLength("Confirme sua senha", 8)}, validate: (value) => {
                                const senha = watch("senha");

                                return senha === value;
                            } }) }} 
                            type={ "password" }/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Nome Fantasia</Form.Label>
                        <Form.Input type="text" registrar = {{ ...register("nome_fantasia", { required: true }) }}/>
                    </Form.Field>
                    
                    <Form.Field>
                        <Form.Label>Razão Social</Form.Label>
                        <Form.Input type="text" registrar = {{ ...register("razao_social", { required: true }) }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>CNPJ</Form.Label>
                        <Form.Input type="text" registrar = {{ ...register("cnpj", { required: true }) }}/>
                    </Form.Field>

                    <Form.Button type= "submit">Continuar</Form.Button> 
                </Form>
            </div>
        </Container>
    )
}