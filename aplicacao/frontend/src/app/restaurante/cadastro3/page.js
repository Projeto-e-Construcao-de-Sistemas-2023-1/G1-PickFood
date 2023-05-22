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

export default function Cadastro3() {

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

            <div className={ [center, title].join(' ') }>Informações de Endereço</div>

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

                <Form.Button onClick={ () => authenticate() }>Continuar</Form.Button>
            </Form>
            </div>

        </Container>
    )
}