'use client'

import Form from "@/components/Form";
import { tituloPagina } from "../../../../styles/componentes.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/layout";

export default function MeusDados() {

    const { usuario } = useContext(AuthContext);

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");

    const handleNome = (e) => {
        const valor = e.target.value;

        setNome(valor);
    }

    const handleEmail = (e) => {
        const valor = e.target.value;

        setEmail(valor);
    }

    const handleCpf = (e) => {
        const valor = e.target.value;

        setCpf(valor);
    }

    const handleTelefone = (e) => {
        const valor = e.target.value;

        setTelefone(valor);
    }

    useEffect(() => {

        const usuarios = JSON.parse(localStorage.getItem("usuarios"));

        let userBuscado = {};

        for (const user of usuarios) {
            if (user.id === usuario.id) {
                userBuscado = user;
                break;
            }
        }

        setNome(userBuscado.nome);
        setEmail(userBuscado.email);
        setCpf(userBuscado.cpf);
        setTelefone(userBuscado.telefone);

    }, [usuario.id]);
    
    const alterar = () => {

    }

    return(
        <>
            <h2 className={ tituloPagina }>Meus Dados</h2>
            <Form>
                <Form.Field>
                    <Form.Label>Nome</Form.Label>
                    <Form.Input value={ nome } onChange={ handleNome }/>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Email</Form.Label>
                    <Form.Input value={ email } onChange={ handleEmail }/>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Telefone</Form.Label>
                    <Form.Input value={ telefone } onChange={ handleTelefone }/>
                </Form.Field>
                <Form.Field>
                    <Form.Label>CPF</Form.Label>
                    <Form.Input value={ cpf } onChange={ handleCpf }/>
                </Form.Field>

                <Form.Button onClick={ "" }>Salvar alterações</Form.Button>
            </Form>
        </>
    )
}