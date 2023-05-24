'use client';

import Form from "@/components/form";
import Container from "@/components/Container";
import Link from "next/link";
import { 
    title,
    center,
    forms,
    link,
    opcoes
} from "./styles.module.scss"

export default function Cadastro1() {

    const authenticate = () => {
        // request
    }

    return (
        <Container>

            <div className={ [center, title].join(' ') }>Minhas informações</div>

            <div className={forms}>
            <Form>
                <Form.Field>
                    <Form.Label>Nome do estabelecimento</Form.Label>
                    <Form.Input/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Input/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Telefone</Form.Label>
                    <Form.Input/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Input/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Endereço</Form.Label>
                    <Form.Input/>
                </Form.Field>

                <div className={ opcoes }>
                    <Form.Button onClick={ () => authenticate() }>Salvar alterações</Form.Button>
                    <Link href={ "" } className={ link }>Excluir conta</Link>
                </div>
                
            </Form>
            </div>

        </Container>
    )
}