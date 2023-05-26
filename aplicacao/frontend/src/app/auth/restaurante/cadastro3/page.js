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

export default function Cadastro3() {

    const authenticate = () => {
        // request
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
            <Form>
                <Form.Field>
                    <Form.Label>CEP</Form.Label>
                    <Form.Input/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label>Bairro</Form.Label>
                    <Form.Input/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Rua</Form.Label>
                    <Form.Input/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Número</Form.Label>
                    <Form.Input/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Complemento</Form.Label>
                    <Form.Input/>
                </Form.Field>

                <Link href={"auth/restaurante/cadastro4"}>
                    <Form.Button onClick={ () => authenticate() }>Continuar</Form.Button>
                </Link>
                
            </Form>
            </div>

        </Container>
    )
}