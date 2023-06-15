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
import { mensagens } from "@/erros/mensagens";
import TituloPagina from "@/components/TituloPagina";
import { criarRestaurante } from "@/services/restaurante";

export default function Cadastro3() {

    const { dados } = useContext(CadastroRestauranteContext);

    const { setUsuario } = useContext(AuthContext);

    const router = useRouter()

    const { register, handleSubmit: submit, formState: { errors }, setError, clearErrors } = useForm();

    const handleSubmit = (data) => {
        const id = uuid();

        const { razao_social, nome_fantasia, email, senha, cnpj, telefone, horarioAbertura, horarioFechamento, taxaEntrega } = dados;

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

        let restaurante;

        try {
            restaurante = criarRestaurante(dadosRestaurante);

        } catch (e) {
            setError("EntidadeDuplicada", { message: "Dados inválidos" });

            return;
        }

        const usuario = {
            id: restaurante.id,
            nome: restaurante.nome_fantasia,
            token: ""
        };
        
        setUsuario(usuario);
        
        localStorage.setItem("usuario", JSON.stringify(usuario));
       
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

            <TituloPagina>Informações de Endereço</TituloPagina>

            <div className={forms}>
                <Form onSubmit={ submit(handleSubmit) }>
                    <Form.Erros erros = { errors }/>
                    <Form.Field>
                        <Form.Label>CEP</Form.Label>
                            <Form.Input registrar={{ ...register("cep", {
                                required: mensagens.required("cep"),
                                minLength: { message: mensagens.minLength("cep", 8), value: 8 },
                                onChange: (e) => {
                                    const valor = e.target.value;
                                                    
                                    const apenasNumeros = /^\d+$/;

                                    for (const indice in valor) {
                                        if (!apenasNumeros.test(valor[indice])) {
                                            e.target.value = valor.substring(0, indice);
                                        }
                                    }

                                    if (valor.length > 8) {
                                        e.target.value = valor.substring(0, 8);
                                    }
                                }
                                }) }} type={ "text" }/>
                    </Form.Field>
                    
                    <Form.Field>
                        <Form.Label>Bairro</Form.Label>
                        <Form.Input type="text" registrar = {{ ...register("bairro", { required: mensagens.required("bairro") }) }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Rua</Form.Label>
                        <Form.Input type="text" registrar = {{ ...register("rua", { required: mensagens.required("rua") }) }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Número</Form.Label>
                        <Form.Input type="number" registrar = {{ ...register("numero", { required: mensagens.required("numero") }) }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Complemento</Form.Label>
                        <Form.Input type="text" registrar = {{ ...register("complemento") }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Estado</Form.Label>
                        <Form.Input type="text" registrar = {{ ...register("estado", { required: mensagens.required("estado") }) }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Cidade</Form.Label>
                        <Form.Input type="text" registrar = {{ ...register("cidade", { required: mensagens.required("cidade") }) }}/>
                    </Form.Field>

                    <Form.Button type="submit" onClick={ () => clearErrors() }>Continuar</Form.Button>
                </Form>
            </div>
        </Container>
    )
}