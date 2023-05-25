'use client';

import Form from "@/components/Form";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { 
    title,
    center,
    forms,
    arrow
} from "./styles.module.scss"

export default function Cadastro2() {

    const authenticate = () => {
        // request
    }

    return (
        <Container>
            <Link href={"auth/restaurante/cadastro1"}>
                <Image
                src="/icons/back.svg"
                width={ 21 }
                height={ 21 }
                className={ arrow }
                alt="Icone de seta apontando para trás."
                />
            </Link>
            

            <h2 className={ [center, title].join(' ') }>Informações Adicionais</h2>

            <div className={forms}>
            <Form>
                <Form.Field>
                    <Form.Label>DDD + Número</Form.Label>
                    <Form.Input/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label>Horário de Funcionamento</Form.Label>
                    <Form.Input/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Taxa de Entrega</Form.Label>
                    <Form.Input/>
                </Form.Field>
                <Link href={"auth/restaurante/cadastro3"}>
                    <Form.Button onClick={ () => authenticate() }>Continuar</Form.Button>
                </Link>
                
            </Form>
            </div>

        </Container>
    )
}