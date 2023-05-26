'use client';

import Form from "@/components/Form";
import Link from "next/link";
import {
    cadastrar,
    margin
} from "./styles.module.scss";

export default function CriarEndereco() {

    return(
        <>
            <Form>
                <Form.Field>
                    <Form.Label>Apelido</Form.Label>
                    <Form.Input/>
                </Form.Field>
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
                <Form.Field>
                    <Form.Label>Estado</Form.Label>
                    <Form.Input/>
                </Form.Field> 
                <Form.Field>
                    <Form.Label>Cidade</Form.Label>
                    <Form.Input/>
                </Form.Field> 
                
                <div className={ margin }>
                    <Link href={ "/cliente/meu-perfil/meus-enderecos"}>
                        <Form.Button onClick={ cadastrar }>Salvar alterações</Form.Button>
                    </Link> 
                </div>
            </Form>
        </>
    )
}