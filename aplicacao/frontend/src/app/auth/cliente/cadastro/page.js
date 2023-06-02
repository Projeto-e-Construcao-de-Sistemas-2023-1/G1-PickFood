'use client';

import Logo from "@/components/Logo";
import { logo, arrow } from "./styles.module.scss";
import Image from "next/image";
import Form from "@/components/Form"; 
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { AuthContext } from "@/app/layout";
import request from "@/services/axios";
import { v4 as uuid } from "uuid";

export default function CadastroCliente() {

    const router = useRouter();

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
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

    const handleSenha = (e) => {
        const valor = e.target.value;

        setSenha(valor);
    }

    const handleCpf = (e) => {
        const valor = e.target.value;

        setCpf(valor);
    }

    const handleTelefone = (e) => {
        const valor = e.target.value;

        setTelefone(valor);
    }


    const { definirUsuario } = useContext(AuthContext);

    const cadastrar = () => {

        // request.post("user", {
        //     nome,
        //     email,
        //     senha,
        //     cpf,
        //     telefone
        // })
        // .then((res) => {
        //     const dados = res.data;
            
            

        //     router.push("/cliente/home")
            
        // })

        const id = uuid();

        const user = {
            id, 
            nome,
            email,
        } 

        const dados = {
            id,
            nome,
            email,
            senha,
            cpf,
            telefone,
            tipo: "cliente"
        }

        const clientesJaCadastratos = JSON.parse(localStorage.getItem("usuarios"));

        if (clientesJaCadastratos === null || clientesJaCadastratos.length === 0) {
            localStorage.setItem("usuarios", JSON.stringify([dados]))
        } else {
            localStorage.setItem("usuarios", JSON.stringify([dados, ...clientesJaCadastratos]))
        }
        
        definirUsuario(user);

        
        router.push("/cliente/home");
    }
            
    return(
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
                    <Form.Label>Nome e sobrenome</Form.Label>
                    <Form.Input value={ nome } onChange={ handleNome }/>
                </Form.Field>
                <Form.Field>
                    <Form.Label >Email</Form.Label>
                    <Form.Input value={ email } onChange={ handleEmail }/>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Senha</Form.Label>
                    <Form.Input value={ senha } onChange={ handleSenha } type={"password"}/>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Confirme sua senha</Form.Label>
                    <Form.Input /*value={ ConfirmacaoSenha } onChange={ handleSenha }*/ type={"password"}/>
                </Form.Field>
                <Form.Field>
                    <Form.Label>CPF</Form.Label>
                    <Form.Input value={ cpf } onChange={ handleCpf }/>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Celular (DDD + número)</Form.Label>
                    <Form.Input value={ telefone } onChange={ handleTelefone }/>
                </Form.Field> 
                
                <Form.Button onClick={ cadastrar } >Cadastrar</Form.Button>
            </Form>
        </>
    )
}