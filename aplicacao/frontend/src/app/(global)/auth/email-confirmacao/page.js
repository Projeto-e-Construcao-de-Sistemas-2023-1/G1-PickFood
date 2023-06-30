'use client';

import Form from "@/components/Form";
import Logo from "@/components/Logo";
import Retornar from "@/components/Retornar";
import TituloPagina from "@/components/TituloPagina";
import { mensagens } from "@/erros/mensagens";
import request from "@/services/axios";
import { buscarClientePorEmail } from "@/services/cliente";
import { buscarRestaurantePorEmail } from "@/services/restaurante";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


const EmailConfirmacao = () => {

    const { register, handleSubmit: tratarFormulario, formState: { errors: erros }, setError } = useForm();
    const [sucesso, setSucesso] = useState(false);


    const enviar = (data) => {

        const { email } = data;

        let restaurante = buscarRestaurantePorEmail(email);;
        let cliente = buscarClientePorEmail(email);

        if (restaurante === null && cliente === null) {
            setError("EntidadeNaoEncontrada", {
                message: "Dados inválidos"
            });

            return;
        }

        axios.post("http://localhost:8000/api/v1/emails/send", {
            to: email,
            subject: "Redefinir senha",
            text: `Clique nesse link para redefinir sua senha: http://localhost:3000/auth/redefinir-senha?q=${email}`
        }).then(() => {
            setSucesso(true);

            setTimeout(() => {
                setSucesso(false)
            }, 5000);
        });
    }

    return (
        <> 
            <TituloPagina textAlign="center">Email para redefinição de senha</TituloPagina>
            <Form onSubmit={ tratarFormulario(enviar) }>
                    <Form.Sucesso ativo={ sucesso }>Email de redefinição de senha enviado com sucesso.</Form.Sucesso>
                    <Form.Erros erros={ erros} />

                    <Form.Field> 
                        <Form.Label>Email</Form.Label>
                        <Form.Input registrar={{ ...register("email", { required: mensagens.required("Email") }) }} type={"email"}/>
                    </Form.Field>

                    <Form.Button>Enviar</Form.Button>
            </Form>
        </>
    )
}

export default EmailConfirmacao;