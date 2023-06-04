'use client';
import Form from "@/components/Form";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { 
    forms,
    imagem
} from "./styles.module.scss"

export default function EditarPrato() {

    const authenticate = () => {
        // request
    }

    return (
        <Container>
                <Image
                    src="/icons/foto.svg"
                    width={ 21 }
                    height={ 21 }
                    className={ imagem }
                    alt="Icone de seta apontando para trás."
                />

            <div className={forms}>
                <Form>
                    <Form.Field>
                        <Form.Label>Nome</Form.Label>
                        <Form.Input/>
                    </Form.Field>
                    
                    <Form.Field>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Input/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Preço</Form.Label>
                        <Form.Input/>
                    </Form.Field>
                    
                    <Form.Field>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Input/>
                    </Form.Field>

                    <Link href={"/restaurante/cardapio"}>
                        <Form.Button onClick={ () => authenticate() }>Continuar</Form.Button>
                    </Link>
                </Form>
            </div>
        </Container>
    )
}