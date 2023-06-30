'use client';

import Form from "@/components/Form";
import Retornar from "@/components/Retornar";
import TituloPagina from "@/components/TituloPagina";
import { AuthContext } from "@/contexts";
import { buscarRestaurantePorId } from "@/services/restaurante";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Contato = ({ params: { idRestaurante }}) => {

    const router = useRouter();
    const { register, handleSubmit } = useForm();
    const [restaurante, setRestaurante] = useState({});
    const [sucesso, setSucesso] = useState(false);
    const { usuario } = useContext(AuthContext);

    useEffect(() => {

        const restauranteExistente = buscarRestaurantePorId(idRestaurante);

        setRestaurante(restauranteExistente);

    }, [idRestaurante])

    const enviar = (data) => {

        const { assunto, mensagem } = data;

        axios.post("http://localhost:8000/api/v1/emails/send", {
            to: restaurante.email,
            subject: assunto,
            text: mensagem + "\n\nEmail do cliente para contato: " + usuario.email
        }).then(() => {
            setSucesso(true);

            setTimeout(() => {
                setSucesso(false);
            }, 5000)
        });
    }

    return(
        <>
            <Retornar navigate={() => router.back()} />
            <TituloPagina textAlign="center">Entre em contato com o restaurante</TituloPagina>
            <Form onSubmit={ handleSubmit(enviar) }>
                <Form.Sucesso ativo={ sucesso }>Email enviado com sucesso</Form.Sucesso>
                <Form.Field>
                    <Form.Label>Assunto</Form.Label>
                    <Form.Input type={"text"} registrar={{ ...register("assunto") }}/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Mensagem</Form.Label>
                    <Form.TextArea type={"text"} registrar={{ ...register("mensagem") }}/>
                </Form.Field>

                <Form.Button>Confirmar envio</Form.Button>
            </Form>
        </>
    )
}

export default Contato;