'use client';

import Logo from "@/components/Logo";
import { logo, arrow } from "./styles.module.scss";
import Image from "next/image";
import Form from "@/components/Form";
import { useRouter } from "next/navigation";

export default function CadastroCliente() {

    const router = useRouter();


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
                    <Form.Input/>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Email</Form.Label>
                    <Form.Input/>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Senha</Form.Label>
                    <Form.Input/>
                </Form.Field>
                <Form.Field>
                    <Form.Label>CPF</Form.Label>
                    <Form.Input/>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Celular (DDD + número)</Form.Label>
                    <Form.Input/>
                </Form.Field> 
                
                <Form.Button onClick={ cadastrar } >Cadastrar</Form.Button>
            </Form>
        </>
    )
}