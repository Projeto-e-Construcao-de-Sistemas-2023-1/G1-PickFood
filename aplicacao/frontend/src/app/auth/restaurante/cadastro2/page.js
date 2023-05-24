'use client';

import Form from "@/components/form";
import Container from "@/components/Container";
import Image from "next/image";
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
            <Image
                src="/icons/back.svg"
                width={ 21 }
                height={ 21 }
                className={ arrow }
                alt="Icone de seta apontando para trás."
            />

            <div className={ [center, title].join(' ') }>Informações Adicionais</div>

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

                <Form.Button onClick={ () => authenticate() }>Continuar</Form.Button>
            </Form>
            </div>

        </Container>
    )
}