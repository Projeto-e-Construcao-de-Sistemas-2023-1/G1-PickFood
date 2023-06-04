'use client';

import Form from "@/components/Form";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import { useForm } from "react-hook-form";
import { 
    title,
    center,
    forms,
    arrow,
    logo
} from "./styles.module.scss"
import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { CadastroRestauranteContext } from "../layout";
import { AuthContext } from "@/contexts";
import { useRouter } from "next/navigation";

export default function Cadastro3() {

    const { dados } = useContext(CadastroRestauranteContext);

    const { definirUsuario } = useContext(AuthContext);

    const router = useRouter()

    const { register, handleSubmit: submit, formState: { errors } } = useForm();

    const handleSubmit = (data) => {
        const id = uuid();

        const { razao_social, nome_fantasia, email, senha, cnpj, telefone, horarioAbertura, horarioFechamento, taxaEntrega } = dados;

        const user = {
            id, 
            nome: nome_fantasia,
            email,
        } 

        const dadosRestaurante = {
            ...data,
            id,
            razao_social,
            email,
            senha,
            cnpj,
            telefone,
            horarioAbertura,
            horarioFechamento,
            nome_fantasia,
            taxaEntrega,
            tipo: "restaurante"
        }

        console.log(dadosRestaurante);

        const restaurantesJaCadastratos = JSON.parse(localStorage.getItem("usuarios"));

        if (restaurantesJaCadastratos === null || restaurantesJaCadastratos.length === 0) {
            localStorage.setItem("usuarios", JSON.stringify([dadosRestaurante]))
        } else {
            localStorage.setItem("usuarios", JSON.stringify([dadosRestaurante, ...restaurantesJaCadastratos]))
        }
        
        definirUsuario(user);
       
        router.push("/restaurante/home");
    }

    return (
        <Container>
            <Link href={"auth/restaurante/cadastro2"}>
                <Image
                src="/icons/back.svg"
                width={ 21 }
                height={ 21 }
                className={ arrow }
                alt="Icone de seta apontando para trás."
                />
            </Link>
            
            <Logo className={ logo }/>

            <h2 className={ [center, title].join(' ') }>Informações de Endereço</h2>

            <div className={forms}>
            <Form onSubmit={ submit(handleSubmit) }>
                <Form.Field>
                    <Form.Label>CEP</Form.Label>
                    <Form.Input type="string" registrar = {{ ...register("cep", { required: true }) }}/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label>Bairro</Form.Label>
                    <Form.Input type="string" registrar = {{ ...register("bairro", { required: true }) }}/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Rua</Form.Label>
                    <Form.Input type="string" registrar = {{ ...register("rua", { required: true }) }}/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Número</Form.Label>
                    <Form.Input type="number" registrar = {{ ...register("numero", { required: true }) }}/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Complemento</Form.Label>
                    <Form.Input type="string" registrar = {{ ...register("complemento") }}/>
                </Form.Field>

                <Form.Button type="submit">Continuar</Form.Button>
                
            </Form>
            </div>
        </Container>
    )
}